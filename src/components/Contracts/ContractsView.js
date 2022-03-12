import styles from './Contracts.module.scss';

import React from 'react';
import MultipleSelect from 'components/MultipleSelect/MultipleSelect';

const ContractsView = (props) => {
  const {
    jsonKeys,
    contractsKeys,
    jsonDataLoading,
    jsonKeysLoading,
    visibleData,
    visibleColumns,
    selectedContractYear,
    columnFilter,
    onJsonChange,
    onContractChange,
    onColumnFiltersChange,
  } = props;

  return (
    <div className={styles.container}>
      {jsonKeys.length > 0 && (
        <>
          <div className={styles.header}>
            <select name="jsonsList" onChange={onJsonChange}>
              {jsonKeys.map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>
            {contractsKeys && (
              <>
                <select
                  name="contractsList"
                  value={selectedContractYear}
                  onChange={onContractChange}
                >
                  <option value="">Choose Contract</option>
                  {contractsKeys.map((key) => (
                    <option key={key} value={key}>
                      {key}
                    </option>
                  ))}
                </select>
                <MultipleSelect options={columnFilter} onChange={onColumnFiltersChange} />
              </>
            )}
          </div>

          {!jsonDataLoading && visibleData.length > 0 ? (
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
                  {visibleData.map((contract) => (
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

export default ContractsView;
