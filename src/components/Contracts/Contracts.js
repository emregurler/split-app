import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchJsonKeysThunk,
  setInitialColumnFilter,
  setColumnFilter,
  setSelectedJsonKey,
  fetchJsonThunk,
} from 'store/slices/contracts';
import View from './ContractsView';

const Contracts = () => {
  const dispatch = useDispatch();
  const { data, jsonKeys, selectedJson, columnFilter, jsonDataLoading, jsonKeysLoading } =
    useSelector((state) => state.contractsReducer);
  const [selectedContractYear, setSelectedContractYear] = useState('');
  const [visibleData, setVisibleData] = useState([]);

  const contractsKeys = useMemo(() => {
    if (data.length > 0) {
      const uniqueContractKeys = Array.from(
        new Set(data.map((datum) => datum.contract.toString()))
      );
      return uniqueContractKeys;
    }
  }, [data]);

  useEffect(() => {
    dispatch(fetchJsonKeysThunk());
  }, [dispatch]);

  useEffect(() => {
    if (selectedJson) {
      dispatch(fetchJsonThunk(selectedJson));
      setSelectedContractYear('');
    }
  }, [dispatch, selectedJson]);

  useEffect(() => {
    if (data && data.length) {
      dispatch(setInitialColumnFilter());
      setVisibleData(data);
    }
  }, [dispatch, data]);

  useEffect(() => {
    if (contractsKeys && contractsKeys.includes(selectedContractYear)) {
      const newVisibleData = data.filter(
        (datum) => datum.contract.toString() === selectedContractYear
      );
      setVisibleData(newVisibleData);
    } else {
      setVisibleData(data);
    }
  }, [selectedContractYear, contractsKeys, data]);

  const onJsonChange = (e) => {
    const { value } = e.target;
    dispatch(setSelectedJsonKey(value));
  };

  const onContractChange = (e) => {
    const { value } = e.target;
    setSelectedContractYear(value);
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
  console.log(
    'selectedJson:',
    selectedJson,
    'data:',
    data,
    'visibleData:',
    visibleData,
    'selectedContractYear:',
    selectedContractYear,
    'columnFilter:',
    columnFilter
  );
  return (
    <View
      jsonDataLoading={jsonDataLoading}
      jsonKeysLoading={jsonKeysLoading}
      jsonKeys={jsonKeys}
      contractsKeys={contractsKeys}
      visibleData={visibleData}
      visibleColumns={visibleColumns}
      selectedContractYear={selectedContractYear}
      columnFilter={columnFilter}
      onJsonChange={onJsonChange}
      onContractChange={onContractChange}
      onColumnFiltersChange={onColumnFiltersChange}
    />
  );
};

export default Contracts;
