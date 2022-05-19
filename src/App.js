import React, { useState } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { CloudinaryContext } from 'cloudinary-react';
import { authRoutes, publicRoutes } from './routes';
import { store } from './redux/store';
import messages from './shared/msgs/ru_BY.json';

const App = () => {
  const state = store.getState();

  console.log(state);
  const [isAuth, setIsAuth] = useState(false);

  return (
    <IntlProvider locale="ru" messages={messages}>
      <CloudinaryContext cloudName={String(process.env.CLOUDINARY_NAME)}>
        <Routes>
          {isAuth &&
            authRoutes.map((route) => (
              <Route
                key={route.name}
                path={route.path}
                element={route.Component}
              />
            ))}
          {publicRoutes.map((route) => (
            <Route key={route.name} path={route.path} element={route.element} />
          ))}
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </CloudinaryContext>
    </IntlProvider>
  );
};

export default App;
