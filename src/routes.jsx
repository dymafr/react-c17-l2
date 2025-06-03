import { createBrowserRouter } from 'react-router';
import App from './App';
import Homepage from './pages/Homepage/Homepage';
import Profile from './pages/Profile/Profile';

export const ROUTER = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        Component: Homepage,
      },
      {
        path: 'profile',
        Component: Profile,
      },
    ],
  },
]);
