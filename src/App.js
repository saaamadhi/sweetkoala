import { IntlProvider } from 'react-intl';
import Header from './components/Header';
import messages from './shared/msgs/ru_BY.json';

const App = () => {
  return (
    <IntlProvider locale="ru" messages={messages}>
      <div>
        <Header />
        It works!
      </div>
    </IntlProvider>
  );
};

export default App;
