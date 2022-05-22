import React, { useMemo } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';

import NotFound from './components/pages/404';
import Dashboard from './components/pages/Admin/Dashboard';
import AdminLogin from './components/pages/Admin/Login';
import Coupones from './components/pages/Admin/Coupones';
import Customers from './components/pages/Admin/Customers';
import Orders from './components/pages/Admin/Orders';
import Products from './components/pages/Admin/Products';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Registration from './components/pages/Registration';
import Cart from './components/pages/Cart';
import Account from './components/pages/User/Account';
import About from './components/pages/AboutUs';
import Delivery from './components/pages/Delivery';
import Contacts from './components/pages/Contacts';
import Help from './components/pages/HelpPage';
import WishList from './components/pages/WishList';
import Notifications from './components/pages/NotificationsEl';

import {
  BASE_ROUTE,
  NOT_FOUND_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  CART_ROUTE,
  WISH_LIST_ROUTE,
  HELP_PAGE_ROUTE,
  CONTACTS_ROUTE,
  DELIVERY_ROUTE,
  NOTIFICATIONS_ROUTE,
  PRODUCT_ROUTE,
  ACCOUNT_ROUTE,
  ABOUT_ROUTE,
  ADMIN_ROUTE,
  ADMIN_COUPONES_ROUTE,
  ADMIN_CUSTOMERS_ROUTE,
  ADMIN_ORDERS_ROUTE,
  ADMIN_PRODUCTS_ROUTE,
  ADMIN_DASHBOARD,
  ADMIN_LOGIN,
} from './shared/utils';

export const authAdminRoutes = [
  {
    name: 'admin',
    path: `${ADMIN_ROUTE}${ADMIN_DASHBOARD}`,
    element: <Dashboard />,
  },
  {
    name: 'login',
    path: `${ADMIN_ROUTE}${ADMIN_LOGIN}`,
    element: <AdminLogin />,
  },
  {
    name: 'coupones',
    path: `${ADMIN_ROUTE}${ADMIN_COUPONES_ROUTE}`,
    element: <Coupones />,
  },
  {
    name: 'customers',
    path: `${ADMIN_ROUTE}${ADMIN_CUSTOMERS_ROUTE}`,
    element: <Customers />,
  },
  {
    name: 'orders',
    path: `${ADMIN_ROUTE}${ADMIN_ORDERS_ROUTE}`,
    element: <Orders />,
  },
  {
    name: 'products',
    path: `${ADMIN_ROUTE}${ADMIN_PRODUCTS_ROUTE}`,
    element: <Products />,
  },
];

export const authRoutes = [
  {
    name: 'account',
    path: ACCOUNT_ROUTE,
    element: <Account />,
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
  {
    name: 'cart',
    path: CART_ROUTE,
    element: <Cart />,
  },
  {
    name: 'wishList',
    path: WISH_LIST_ROUTE,
    element: <WishList />,
  },
  {
    name: 'notifications',
    path: NOTIFICATIONS_ROUTE,
    element: <Notifications />,
  },
  {
    name: 'help',
    path: HELP_PAGE_ROUTE,
    element: <Help />,
  },
  {
    name: 'contacts',
    path: CONTACTS_ROUTE,
    element: <Contacts />,
  },
  {
    name: 'delivery',
    path: DELIVERY_ROUTE,
    element: <Delivery />,
  },
  {
    name: 'about',
    path: ABOUT_ROUTE,
    element: <About />,
  },
];

export const UserRoutes = (isAuth) => {
  return (
    <Routes>
      {isAuth &&
        authRoutes.map((route) => (
          <Route key={route.name} path={route.path} element={route.Component} />
        ))}
      {publicRoutes.map((route) => (
        <Route key={route.name} path={route.path} element={route.element} />
      ))}
      {isAuth && <Route path={LOGIN_ROUTE} element={<Navigate to="/404" />} />}
      {isAuth && (
        <Route path={REGISTRATION_ROUTE} element={<Navigate to="/404" />} />
      )}
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
};

export const AdminRoutes = (isAuth) => {
  return (
    <Routes>
      {isAuth &&
        authAdminRoutes.map((route) => (
          <Route key={route.name} path={route.path} element={route.Component} />
        ))}

      <Route
        path="*"
        element={<Navigate to={isAuth ? '/404' : '/admin/login'} />}
      />
    </Routes>
  );
};

export const BaseRoutes = (userRole, isAuth) => {
  return useMemo(() => {
    switch (userRole) {
      case 'ADMIN': {
        return <AdminRoutes isAuth={isAuth} />;
      }
      default: {
        return <UserRoutes isAuth={isAuth} />;
      }
    }
  }, [userRole, isAuth]);
};
