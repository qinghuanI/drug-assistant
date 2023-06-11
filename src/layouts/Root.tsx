import { ReactElement } from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/footer/Footer.tsx';

const Root = (): ReactElement => {
  return (
    <>
      <h1>您身边的药品助手</h1>
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
