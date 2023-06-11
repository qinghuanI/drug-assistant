import type { ReactElement } from 'react';

const Disclaimer = (): ReactElement => {
  return (
    <div style={{ maxWidth: '400px' }}>
      <h2>免责声明</h2>
      <p>
        药品助理，致力于为用户提供客观
        可信赖的信息服务。产品所提供的信息均来源于国内的权威网站，用户可以在药品详情页面中获取信息
        来源，但我们无法对所有信息的真实性进行实质核查，望充分知悉。
      </p>
    </div>
  );
};

export default Disclaimer;
