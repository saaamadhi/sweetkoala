import NotFound from './components/pages/404';
import Dashboard from './components/pages/Admin/Dashboard';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Registration from './components/pages/Registration';
import Cart from './components/pages/Cart';
import {
  ADMIN_ROUTE,
  BASE_ROUTE,
  NOT_FOUND_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  CART_ROUTE,
} from './shared/utils';

// export const authAdminRoutes = [
//   {
//     name: 'admin',
//     path: ADMIN_ROUTE,
//     element: <Dashboard />,
//   },
// ];

export const authRoutes = [
  {
    name: 'cart',
    path: CART_ROUTE,
    element: <Cart />,
  },
];

export const publicRoutes = [
  {
    name: 'home',
    path: BASE_ROUTE,
    element: <Home />,
  },
  {
    name: 'login',
    path: LOGIN_ROUTE,
    element: <Login />,
  },
  {
    name: 'registration',
    path: REGISTRATION_ROUTE,
    element: <Registration />,
  },
  {
    name: 'not_found',
    path: NOT_FOUND_ROUTE,
    element: <NotFound />,
  },
];
