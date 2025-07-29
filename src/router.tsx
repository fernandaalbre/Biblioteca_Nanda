import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home.tsx';
import Favorites from './pages/Favorites/Favorites.tsx';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/favorites', element: <Favorites /> },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
