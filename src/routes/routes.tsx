import { createHashRouter, Navigate } from 'react-router-dom';
import About from '../pages/about';
import Root from '../layouts/Root.tsx';
import DrugTable from '../components/drug-table/DrugTable.tsx';
import ContactUs from '../pages/contact-us';
import Disclaimer from '../pages/disclaimer/Disclaimer.tsx';

export const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Navigate to={'/drug'} />,
      },
      {
        path: '/drug',
        element: <DrugTable />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact-us',
        element: <ContactUs />,
      },
      {
        path: '/disclaimer',
        element: <Disclaimer />,
      },
    ],
  },
]);
