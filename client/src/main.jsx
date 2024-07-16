
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx';
import Home from './pages/Home';
import Login from './pages/Login';
import PageNotFound from './pages/404';
import Contact from './pages/ContactUs';
import Huddle from './pages/Huddle.jsx';
//import Invite from './pages/Send-invite.jsx';
import CreateAccount from './pages/CreateAccount';
import 'bootstrap/dist/css/bootstrap.min.css'

import EventList from './pages/EventList';
import EventSingle from './pages/EventSingle';
import EventAdd from './pages/EventAdd';
import EventEdit from './pages/EventEdit';




const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,

        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/CreateAccount',
        element: <CreateAccount />
      },
      {
        path: '/events',
        element: <EventList />
      },
      {
        path: '/event/:eventId',
        element: <EventSingle />
      },
      {
        path: '/event/edit/:eventId',
        element: <EventEdit />
      },
      {
        path: '/event/add',
        element: <EventAdd />
      },
      {
        path: '/Contact-us',
        element: <Contact />
      },
      {
        path: '/Huddle',
        element: <Huddle />
      },
      {
        path: '/Login',
        element: <Login />
      },
      {
        path: '/Create-account',
        element: <CreateAccount />
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
