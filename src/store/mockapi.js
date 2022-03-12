import data2018 from '../data/2018data.json';
import data2019 from '../data/2019data.json';

export const contractsKeys = [2018, 2019];

export const data = {
  2018: data2018,
  2019: data2019,
};

const fetchContractsKeys = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const result = {
        status: '200',
        data: contractsKeys,
      };
      res(result);
    }, 350);
  });
};

const fetchContracts = (year) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const result = {
        status: '200',
        data: data[year],
      };
      res(result);
    }, 350);
  });
};

export { fetchContracts, fetchContractsKeys };
