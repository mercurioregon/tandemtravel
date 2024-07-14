const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
//const http = require('http');
const {Server} = require('socket.io');

const cors = require("cors");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startApolloServer = async () => {
  await server.start();
  
  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  
  app.use('/graphql', expressMiddleware(server));

  // if we're in production, serve client/dist as static assets
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  } 

  const io = new Server(server, {
    cors: {
      origin: `http://localhost:${PORT}`,
    methods: ["GET", "POST"],
    },
  });

  io.on('connection', (socket) => {
    console.log(`user connected = ${socket.id}` );
    
    socket.on("join_room", (data) => {
      socket.join(data);
      console.log(`User with ID: ${socket.id} joined room ${data}`);
    });

    socket.on('disconnect', () => {
      console.log(`user disconnected = ${socket.id}` );
    });
  });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

startApolloServer();

const nodemailer = require('nodemailer')

require("dotenv").config()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const transporter = nodemailer.createTransport({
  host: process.env.HOST,
  port: process.env.PORT_NUM,
  secureConnection: false,
  auth: {
    user: process.env.USER_NAME,
    pass: process.env.USER_PW,
  },
  tls: {
    ciphers: 'SSLv3'
  }
});




app.post('/api/send', async (req, res) => {
  const options = {
    from: `${req.body.name} <${req.body.email}>`,
    to: req.body.email,
    subject: req.body.subject,
    html: req.body.message,
  };
  console.log(options)
  await transporter.sendMail(options);

  res.status(200).send("success")
})