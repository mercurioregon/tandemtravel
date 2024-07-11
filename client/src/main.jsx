import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx'
import Homepage from './pages/homepage.jsx';
import Login from './pages/LoginPage.jsx'
import PageNotFound from './pages/404.jsx';
import Contact from './pages/Contact-us.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Homepage />
      }, {
        path: '/Login',
        element: <Login />
      }, {
        path: '/Contact-us',
        element: <Contact />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
