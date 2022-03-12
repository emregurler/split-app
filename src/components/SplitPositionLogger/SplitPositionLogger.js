import styles from './SplitPositionLogger.module.scss';

import React from 'react';
import { useSelector } from 'react-redux';

const SplitPositionLogger = () => {
  const { verticalSizes, upperHorizontalSizes, bottomHorizontalSizes } = useSelector(
    (state) => state.splitSizeReducer
  );

  return (
    <div className={styles.container}>
      <div className={styles.logsContainer}>
        <span>Ayarlar</span> <br /> <br />
        <div>
          <span>
            Yatay Pencere Değerleri <br />
          </span>
          {verticalSizes[0]} {verticalSizes[1]}
        </div>
        <div>
          <span>
            Üst Dikey Pencere Değerleri: <br />
          </span>
          {upperHorizontalSizes[0]} {upperHorizontalSizes[1]}
        </div>
        <div>
          <span>
            Alt Dikey Pencere Değerleri: <br />
          </span>
          {bottomHorizontalSizes[0]} {bottomHorizontalSizes[1]}
        </div>
      </div>
    </div>
  );
};

export default SplitPositionLogger;
