import styles from './Contracts.module.scss';

import React from 'react';
import { Select, MultipleSelect, Table } from 'components';

const ContractsView = (props) => {
  const {
    selectedJson,
    jsonKeys,
    contractsKeys,
    jsonDataLoading,
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
            <div className={styles.contentSelectors}>
              <Select
                isDefaultOptionDisabled
                value={selectedJson}
                defaultOption="Choose Json"
                options={jsonKeys}
                onChange={onJsonChange}
              />

              {contractsKeys && (
                <>
                  <Select
                    value={selectedContractYear}
                    defaultOption="Choose Contract"
                    options={contractsKeys}
                    onChange={onContractChange}
                  />
                </>
              )}
            </div>
            <MultipleSelect options={columnFilter} onChange={onColumnFiltersChange} />
          </div>

          {!jsonDataLoading && visibleData.length > 0 ? (
            <div>
              <Table data={visibleData} columns={visibleColumns} />
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
