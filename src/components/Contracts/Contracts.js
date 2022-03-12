import styles from './Contracts.module.scss';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContractsKeysThunk,
  fetchContractsThunk,
  setSelectedContractKey,
  setInitialSelectedColumns,
  setSelectedColumns,
} from 'store/slices/contracts';

const Contracts = () => {
  const dispatch = useDispatch();
  const { data, selectedContract, contractsKeys, selectedColumns } = useSelector(
    (state) => state.contractsReducer
  );

  useEffect(() => {
    dispatch(fetchContractsKeysThunk());
  }, [dispatch]);

  useEffect(() => {
    if (selectedContract) {
      dispatch(fetchContractsThunk(selectedContract));
    }
  }, [dispatch, selectedContract]);

  useEffect(() => {
    if (data && data.length) {
      dispatch(setInitialSelectedColumns());
    }
  }, [dispatch, data]);

  const onContractChange = (e) => {
    const { value } = e.target;
    dispatch(setSelectedContractKey(value));
  };

  const onColumnFiltersChange = (e) => {
    const { value } = e.target;
    const newColumnFilters = selectedColumns.includes(value)
      ? selectedColumns.filter((column) => column !== value)
      : [...selectedColumns, value];
    dispatch(setSelectedColumns(newColumnFilters));
  };

  console.log(data, contractsKeys, selectedContract, selectedColumns);
  return (
    <div className={styles.container}>
      {contractsKeys.length > 0 && (
        <>
          <select name="contractsList" onChange={onContractChange}>
            {contractsKeys.map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
          {data.length > 0 ? (
            <div>
              <table>
                <thead>
                  <tr>
                    {selectedColumns.map((column) => (
                      <th key={column}>{column}</th>
                    ))}
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
              <select multiple name="columnFilters" onChange={onColumnFiltersChange}>
                {selectedColumns.map((key) => (
                  <option key={key} value={key}>
                    {key}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <div>Please wait, loading</div>
          )}
        </>
      )}
    </div>
  );
};

export default Contracts;
