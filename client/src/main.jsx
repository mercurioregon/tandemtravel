import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx'
import Homepage from './pages/homepage.jsx';
import Login from './pages/LoginPage.jsx'
import PageNotFound from './pages/404.jsx';
import Contact from './pages/Contact-us.jsx';
import Huddle from './pages/Huddle.jsx';
import Invite from './pages/Send-invite.jsx';
import CreateAccount from './pages/Create-account.jsx';
import LandingPage from './pages/LandingPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <LandingPage />
      },
      {
        path: '/Invite',
        element: <Invite />
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
