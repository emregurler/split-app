import style from './Layout.module.scss';

import React, { useState } from 'react';
import { UserAvatar } from 'components';

const Header = () => {
  const [user] = useState({
    name: 'emre',
    surname: 'gürler',
  });

  const name = user.name.toLocaleLowerCase();
  return (
    <div className={style.header}>
      <div className={style.logo}>EPİAŞ</div>
      <div className={style.rightContent}>
        <span>Çalışma Alanı</span>
        <div className={style.userInfo}>
          <UserAvatar firstName={user.name} secondName={user.surname} />
          <span>
            Merhaba, <span className={style.userName}>{name}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
