// eslint-disable-next-line no-unused-vars
import styles from './Table.module.scss';

import React, { useState } from 'react';

const Table = ({ columns, data, addable, onAddItem, onDeleteItem }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newItemValues, setNewItemValues] = useState({});

  const simpleValidation = () => {
    const columnsWithoutId = columns.filter((c) => c !== 'id');

    let valid = true;
    columnsWithoutId.forEach((col) => {
      if (newItemValues[col] === undefined) {
        valid = false;
      }
    });
    return valid;
  };

  const toggleAdd = () => {
    setIsAdding((prev) => !prev);
  };

  const handleChangeInput = (value, column) => {
    const newItem = { ...newItemValues, [column]: value };
    setNewItemValues(newItem);
  };

  const handleAddClick = () => {
    if (simpleValidation()) {
      onAddItem(newItemValues);
      setIsAdding(false);
      setNewItemValues({});
    }
  };

  const handleDeleteItem = (id) => {
    onDeleteItem(id);
  };

  const handleCancelItem = () => {
    setIsAdding(false);
    setNewItemValues({});
  };

  return (
    <table>
      {columns && (
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column} name={column}>
                {column}
              </th>
            ))}
            {addable && <th>Actions</th>}
          </tr>
        </thead>
      )}
      {data && (
        <tbody>
          {data.map((datum) => (
            <tr key={datum.id}>
              {Object.entries(datum).map(([key, value]) =>
                columns ? (
                  columns.includes(key) && <td key={datum.id + '_' + value + '_' + key}>{value}</td>
                ) : (
                  <td key={datum.id + '_' + value + '_' + key}>{value}</td>
                )
              )}
              {addable && (
                <td
                  className={styles.removeButton}
                  onClick={() => {
                    handleDeleteItem(datum.id);
                  }}
                >
                  Delete
                </td>
              )}
            </tr>
          ))}
          {addable && (
            <tr style={{ height: 33 }}>
              {!isAdding ? (
                <td className={styles.addStarterButton} colSpan={5} style={{}} onClick={toggleAdd}>
                  Add New Item
                </td>
              ) : (
                <>
                  {columns.map((col) => (
                    <td key={col}>
                      <input
                        disabled={col === 'id'}
                        onChange={(e) => handleChangeInput(e.target.value, col)}
                      />
                    </td>
                  ))}
                  <td>
                    <button className={styles.addButton} onClick={handleAddClick}>
                      EKLE
                    </button>
                    <button onClick={handleCancelItem}>Cancel</button>
                  </td>
                </>
              )}
            </tr>
          )}
        </tbody>
      )}
    </table>
  );
};

export default Table;
