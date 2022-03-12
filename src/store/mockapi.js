import contractsData from '../data/contracts.json';
import moreColumnsData from '../data/moreColumns.json';

export const jsonKeys = ['contractsData', 'moreColumnsData'];

export const data = {
  contractsData: contractsData,
  moreColumnsData: moreColumnsData,
};

const fetchJsonKeys = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const result = {
        status: '200',
        data: jsonKeys,
      };
      res(result);
    }, 150);
  });
};

const fetchJsonByName = (name) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const result = {
        status: '200',
        data: data[name],
      };
      res(result);
    }, 350);
  });
};

export { fetchJsonByName, fetchJsonKeys };
