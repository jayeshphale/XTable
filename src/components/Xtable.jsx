import React, { useState } from "react";

const XTable = () => {
  const initialData = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ];

  const [data, setData] = useState(initialData);

  const sortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      if (b.date === a.date) return b.views - a.views; // Sort by views if dates are same
      return new Date(b.date) - new Date(a.date); // Sort by latest date first
    });
    setData(sortedData);
  };

  const sortByViews = () => {
    const sortedData = [...data].sort((a, b) => {
      if (b.views === a.views) return new Date(b.date) - new Date(a.date); // Sort by date if views are same
      return b.views - a.views; // Sort by highest views first
    });
    setData(sortedData);
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h1>Date and Views Table</h1>
      <button onClick={sortByDate} style={{ margin: "5px", padding: "10px" }}>
        Sort by Date
      </button>
      <button onClick={sortByViews} style={{ margin: "5px", padding: "10px" }}>
        Sort by Views
      </button>
      <table border="1" style={{ margin: "auto", marginTop: "20px", width: "50%" }}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default XTable;
