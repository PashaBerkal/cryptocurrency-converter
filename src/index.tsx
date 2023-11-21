import { setupStore } from './store/store';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './app/App';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = setupStore();
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
