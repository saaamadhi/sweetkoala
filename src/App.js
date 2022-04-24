import { useEffect } from 'react';
import { Navigate, Routes, Route, useNavigate } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import Home from './components/pages/Home';
import messages from './shared/msgs/ru_BY.json';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, [navigate]);

  return (
    <IntlProvider locale="ru" messages={messages}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Navigate replace to="/404" />} />

        {/* <Route
          path="/restricted"
          element={<ProtectedRoutes component={Dashboard} />}
        ></Route> */}
      </Routes>
    </IntlProvider>
  );
};

export default App;
