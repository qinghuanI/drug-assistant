import { ReactElement } from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/footer/Footer';
import { Link } from 'react-router-dom';

const Root = (): ReactElement => {
  return (
    <>
      <h1>
        <Link to="/">您身边的药品助手</Link>
      </h1>
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
