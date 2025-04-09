import React, { useState } from 'react';
import './App.css';
import Table from './components/Table';
import { articles } from './data';

function App() {
  const [data, setData] = useState(articles);

  const sortByDate = () => {
    const sorted = [...data].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (dateB - dateA !== 0) return dateB - dateA;
      return b.views - a.views;
    });
    setData(sorted);
  };

  const sortByViews = () => {
    const sorted = [...data].sort((a, b) => {
      if (b.views - a.views !== 0) return b.views - a.views;
      return new Date(b.date) - new Date(a.date);
    });
    setData(sorted);
  };

  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <div className="button-group">
        <button onClick={sortByDate}>Sort by Date</button>
        <button onClick={sortByViews}>Sort by Views</button>
      </div>
      <Table data={data} />
    </div>
  );
}

export default App;
