import ReactDOM from 'react-dom/client';

import 'antd/dist/reset.css';

import './index.css';
import { router } from './routes/routes.tsx';
import { RouterProvider } from 'react-router-dom';
import App from './App.tsx';

const rootEl = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(rootEl).render(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
