import React from 'react';

const Select = ({ options, defaultOption, isDefaultOptionDisabled, value, onChange }) => {
  return (
    <select name="contractsList" value={value} onChange={onChange}>
      <option value="" disabled={isDefaultOptionDisabled}>
        {defaultOption}
      </option>
      {options.map((key) => (
        <option key={key} value={key}>
          {key}
        </option>
      ))}
    </select>
  );
};

export default Select;
