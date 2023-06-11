import type { ReactElement } from 'react';
import { useStyles } from './styles.ts';
import { Link } from 'react-router-dom';

const Footer = (): ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <div className={classes.nav}>
        <span>
          <Link to="/about">关于药品助手</Link>
        </span>
        <span>
          <Link to="/disclaimer">免责声明</Link>
        </span>
        <span>
          <Link to="/contact-us">联系我们</Link>
        </span>
      </div>
      <p>Copyright ©qinghuanI, All Rights Reserved</p>
    </div>
  );
};

export default Footer;
