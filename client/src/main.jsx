import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from '../src/routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import App from './App.jsx';
// import Overview from './pages/overview.jsx';
// import Login from './pages/LoginPage.jsx';
// import PageNotFound from './pages/404.jsx';
// import Contact from './pages/Contact-us.jsx';
// import Huddle from './pages/Huddle.jsx';
// import Invite from './pages/Send-invite.jsx';
// import CreateAccount from './pages/Create-account.jsx';
// import LandingPage from './pages/LandingPage.jsx';

// ReactDOM.render(
//   <Router>
//     <Switch>
//       <Route exact path="/" component={App} />
//       <Route path="/overview" component={Overview} />
//       <Route path="/Login" component={Login} />
//       <Route path="/Contact-us" component={Contact} />
//       <Route path="/Huddle" component={Huddle} />
//       <Route path="/Invite" component={Invite} />
//       <Route path="/Create-account" component={CreateAccount} />
//       <Route component={PageNotFound} />
//     </Switch>
//   </Router>,
//   document.getElementById('root')
// );