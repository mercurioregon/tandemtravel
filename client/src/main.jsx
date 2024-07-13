import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home';
import EventList from './pages/EventList';
import EventSingle from './pages/EventSingle';
import EventAdd from './pages/EventAdd';
import EventEdit from './pages/EventEdit';

import PageNotFound from './pages/PageNotFound';

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
