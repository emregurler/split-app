import styles from './AddableForm.module.scss';

import React, { useState } from 'react';
import { Table } from 'components';

const initialState = [
  {
    id: 1,
    contract: 2019,
    offer: 2131,
    data: 'Alış',
  },
  {
    id: 2,
    contract: 2019,
    offer: 2131,
    data: 'Alış',
  },
  {
    id: 3,
    contract: 2019,
    offer: 2131,
    data: 'Alış',
  },
  {
    id: 4,
    contract: 2019,
    offer: 2131,
    data: 'Alış',
  },
  {
    id: 5,
    contract: 2019,
    offer: 2131,
    data: 'Alış',
  },
  {
    id: 6,
    contract: 2019,
    offer: 2131,
    data: 'Alış',
  },
  {
    id: 7,
    contract: 2019,
    offer: 2131,
    data: 'Alış',
  },
  {
    id: 8,
    contract: 2019,
    offer: 2131,
    data: 'Alış',
  },
  {
    id: 9,
    contract: 2019,
    offer: 2131,
    data: 'Alış',
  },
  {
    id: 10,
    contract: 2019,
    offer: 2131,
    data: 'Alış',
  },
  {
    id: 11,
    contract: 2019,
    offer: 2131,
    data: 'Alış',
  },
  {
    id: 12,
    contract: 'DEF12345',
    offer: 1255552,
    data: 'Alış',
  },
  {
    id: 13,
    contract: 'XYZ12345',
    offer: 8754,
    data: 'Satış',
  },
];

const AddableForm = () => {
  const [list, setList] = useState(initialState);

  const handleAddItem = (item) => {
    const id = Math.floor(Math.random() * 100000);
    const newItem = { id, ...item };
    setList([...list, newItem]);
  };

  const handleDeleteItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const columns = ['id', 'contract', 'offer', 'data'];

  return (
    <div className={styles.container}>
      <Table
        data={list}
        columns={columns}
        addable
        onAddItem={handleAddItem}
        onDeleteItem={handleDeleteItem}
      />
    </div>
  );
};

export default AddableForm;
