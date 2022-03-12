import style from './Layout.module.scss';

import React from 'react';

const Content = ({ children }) => {
  return <div className={style.content}>{children}</div>;
};

export default Content;
