import React, { useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { CloudinaryContext } from 'cloudinary-react';
import { BaseRoutes } from './routes';
import { store } from './redux/store';
import messages from './shared/msgs/ru_BY.json';

const App = () => {
  const [isAuth, setIsAuth] = useState('');
  const [userRole, setUserRole] = useState('');

  const state = store.getState();

  useEffect(() => {
    const userToken = state.user.token.length;
    const userRole = state.user.role;

    setIsAuth(userToken);
    setUserRole(userRole);
  }, [state.user.token.length, state.user.role]);

  return (
    <IntlProvider locale="ru" messages={messages}>
      <CloudinaryContext cloudName={String(process.env.CLOUDINARY_NAME)}>
        {<BaseRoutes userRole={userRole} isAuth={isAuth} />}
      </CloudinaryContext>
    </IntlProvider>
  );
};

export default App;
