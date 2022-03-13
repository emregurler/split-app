import styles from './SplitPositionLogger.module.scss';

import React from 'react';
import { useSelector } from 'react-redux';

const SplitPositionLogger = () => {
  const { verticalSizes, upperHorizontalSizes, bottomHorizontalSizes } = useSelector(
    (state) => state.splitSizeReducer
  );

  const getLogText = (sizes = []) => (sizes.length > 0 ? `${sizes[0]} ${sizes[1]}` : ' - ');

  return (
    <div className={styles.container}>
      <div className={styles.logsContainer}>
        <span>Ayarlar</span> <br /> <br />
        <div>
          <span>
            Yatay Pencere Değerleri <br />
          </span>
          {getLogText(verticalSizes)}
        </div>
        <div>
          <span>
            Üst Dikey Pencere Değerleri: <br />
          </span>
          {getLogText(upperHorizontalSizes)}
        </div>
        <div>
          <span>
            Alt Dikey Pencere Değerleri: <br />
          </span>
          {getLogText(bottomHorizontalSizes)}
        </div>
      </div>
    </div>
  );
};

export default SplitPositionLogger;
