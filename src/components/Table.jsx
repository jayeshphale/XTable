import React from 'react';

const Table = ({ data }) => {
  return (
    <table border="1" cellPadding="8" style={{ marginTop: '20px' }}>
      <thead>
        <tr>
          <th>Article</th>
          <th>Date</th>
          <th>Views</th>
        </tr>
      </thead>
      <tbody>
        {data.map((entry, index) => (
          <tr key={index}>
            <td>{entry.article}</td>
            <td>{entry.date}</td>
            <td>{entry.views}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
