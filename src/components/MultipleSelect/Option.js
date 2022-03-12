import styles from './MultipleSelect.module.scss';

import React from 'react';

const Option = ({ id, index, checked, children, onChange }) => {
  const handleChange = () => {
    onChange(id, index);
  };
  return (
    <div className={styles.optionContainer}>
      <input type="checkbox" onChange={handleChange} checked={checked} />
      <div className={styles.optionLabel}>{children}</div>
    </div>
  );
};

export default Option;
