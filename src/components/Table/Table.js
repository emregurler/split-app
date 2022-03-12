import React from 'react';

const Table = ({ columns, data }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
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
                columns.includes(key) && (
                  <td key={contract.id + '_' + value + '_' + key}>{value}</td>
                )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
