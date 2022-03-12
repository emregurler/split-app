import styles from './UserAvatar.module.scss';

import React from 'react';

const UserAvatar = ({ firstName = '', secondName = '' }) => {
  const avatarWord = firstName.substring(0, 1) + secondName.substring(0, 1);
  return <div className={styles.container}>{avatarWord}</div>;
};

export default UserAvatar;
