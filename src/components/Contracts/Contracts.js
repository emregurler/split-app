import styles from './Contracts.module.scss';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContractsKeysThunk,
  fetchContractsThunk,
  setSelectedContractKey,
  setInitialColumnFilter,
  setColumnFilter,
} from 'store/slices/contracts';
import MultipleSelect from 'components/MultipleSelect/MultipleSelect';

const { Option } = MultipleSelect;

const Contracts = () => {
  const dispatch = useDispatch();
  const { data, selectedContract, contractsKeys, columnFilter } = useSelector(
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
      dispatch(setInitialColumnFilter());
    }
  }, [dispatch, data]);

  const onContractChange = (e) => {
    const { value } = e.target;
    dispatch(setSelectedContractKey(value));
  };

  const onColumnFiltersChange = (id) => {
    const foundIndex = columnFilter.findIndex((col) => col.id === id);
    if (foundIndex !== undefined && foundIndex > -1) {
      const newColumnFilters = columnFilter.map((colFilter) =>
        colFilter.id === id ? { ...colFilter, selected: !colFilter.selected } : colFilter
      );
      const isChangeable = newColumnFilters.filter((f) => f.selected).length > 0;
      if (isChangeable) {
        dispatch(setColumnFilter(newColumnFilters));
      }
    }
  };

  const visibleColumns = columnFilter.filter((cf) => cf.selected).map((cf) => cf.key);
  console.log(data, contractsKeys, selectedContract, columnFilter);
  return (
    <div className={styles.container}>
      {contractsKeys.length > 0 && (
        <>
          <div className={styles.header}>
            <select name="contractsList" onChange={onContractChange}>
              {contractsKeys.map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>
            <MultipleSelect options={columnFilter} onChange={onColumnFiltersChange} />
          </div>

          {data.length > 0 ? (
            <div>
              <table>
                <thead>
                  <tr>
                    {visibleColumns.map((column) => (
                      <th key={column} name={column}>
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map((contract) => (
                    <tr key={contract.id}>
                      {Object.entries(contract).map(
                        ([key, value]) =>
                          visibleColumns.includes(key) && (
                            <td key={contract.id + '_' + value + '_' + key}>{value}</td>
                          )
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
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
