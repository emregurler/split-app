import './Split.scss';

import React from 'react';
import { useDispatch } from 'react-redux';
import Split from 'react-split';
import { setSplitSize } from 'store/slices/split-sizes';

const CustomSplit = ({ name, sizes = [70, 30], direction, ...props }) => {
  const dispatch = useDispatch();

  return (
    <Split
      onDragEnd={(sizes) => {
        dispatch(setSplitSize({ sizes, name: name + 'Sizes' }));
      }}
      className={direction}
      direction={direction}
      sizes={sizes}
      {...props}
    ></Split>
  );
};

export default CustomSplit;
