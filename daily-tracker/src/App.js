import React, { useState, useEffect } from "react";
import firebase from "firebase";

const App = () => {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item) {
      const newItem = { id: new Date().getTime().toString(), item: item };
      setItems((items) => {
        return [...items, newItem];
      });
      setItem("");
    } else {
      window.alert("please insert an item");
    }
  };

  return (
    <div>
      <h1 className="title">Daily Tracker</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter new item here..."
          id="item"
          name="item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button type="submit" value="Submit">
          Add New
        </button>
      </form>
      {items.map((newItem) => {
        const { id, item } = newItem;
        return (
          <div key={id}>
            <h3>{item}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default App;
