"use client";
import Page2 from "./component/Card";
import { useState, useEffect } from "react";
import { Parent } from "./providers/Header";

const Home = () => {
  const [data, setData] = useState([]);
  const [num, setNum] = useState(1);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    const api = async () => {
      const fetchData = await fetch(
        `https://dev.to/api/articles?per_page=9&page=${num}`
      );
      const jsonData = await fetchData.json();
      console.log(jsonData);
      setData(jsonData);
    };
    api();
  }, [num]);

  const filteredItems = data.filter((key, index) => {
    const low1 = key.title.toLowerCase();
    const low2 = searchItem.toLowerCase();
    return low1.includes(low2);
  });

  const next = () => {
    const next = num + 1;
    setNum(next);
  };

  const previous = () => {
    if (num <= 1) {
    } else {
      const previous = num - 1;
      setNum(previous);
    }
  };
  return (
    <Parent>
      <div>
        <h1 style={{ marginLeft: "15px" }}>All Blog Test</h1>
        <div className="ui-input-container">
          <input
            onChange={(e) => setSearchItem(e.target.value)}
            placeholder="Search..."
            className="ui-input"
            type="text"
          />
          <div className="ui-input-underline"></div>
          <div className="ui-input-highlight"></div>
          <div className="ui-input-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24">
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                stroke="currentColor"
                d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"></path>
            </svg>
          </div>
        </div>
        <div className="body">
          {filteredItems.length === 0 ? (
            <p>Result not found.</p>
          ) : (
            filteredItems.map((ok, index) => <Page2 key={index} ok={ok} />)
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "1390px",
            }}>
            <button onClick={() => previous()} className="buttons2">
              Previous
            </button>
            <div>{num}</div>
            <button onClick={() => next()} className="buttons2">
              Next
            </button>
          </div>
        </div>
      </div>
    </Parent>
  );
};

export default Home;
