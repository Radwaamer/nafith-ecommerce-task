import ReactDOM from 'react-dom/client'
import './index.css'

import { Provider } from 'react-redux';
import { store } from './store';
import AppRouter from '@routes/AppRouter.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
)
