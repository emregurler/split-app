import styles from './MultipleSelect.module.scss';

import React, { useRef, useState } from 'react';
import { ReactComponent as FilterIcon } from 'components/Icons/filter.svg';
import Option from './Option';
import { useOutsideClick } from './hooks';

const MultipleSelect = ({ options = [], onChange }) => {
  const [isVisible, setIsVisible] = useState(false);
  const dropdownContainerRef = useRef(null);
  const dropdownIconRef = useRef(null);

  useOutsideClick([dropdownContainerRef, dropdownIconRef], () => {
    if (isVisible) {
      setIsVisible(false);
    }
  });

  return (
    <div className={styles.container}>
      <FilterIcon ref={dropdownIconRef} onClick={() => setIsVisible(!isVisible)} />
      {isVisible && (
        <div ref={dropdownContainerRef} className={styles.dropdownContainer}>
          {options.map((option, i) => (
            <Option
              key={option.key}
              id={option.id}
              index={i}
              checked={option.selected}
              onChange={onChange}
            >
              {option.key}
            </Option>
          ))}
        </div>
      )}
    </div>
  );
};

MultipleSelect.Option = Option;
export default MultipleSelect;
