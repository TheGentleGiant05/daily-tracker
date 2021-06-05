import React, { useState, useEffect } from "react";
import firebase from "firebase/app";

const App = () => {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);
  const database = firebase.database();
  const itemsRef = database.ref("items");

  // dbRef.on("value", (snapshot) => {
  //   setItems({ items: Object.values(snapshot.val().name) });
  //   console.log(items);
  // });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    itemsRef.on("value", (snap) => {
      let data = snap.val();
      let dataList = [];
      for (let d in data) {
        dataList.push({
          id: data[d].id,
          item: data[d].name,
        });
      }
      setItems(dataList);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item) {
      const newItem = { id: new Date().getTime().toString(), item: item };
      database
        .ref("items/" + newItem.item)
        .set({ id: newItem.id, name: newItem.item });
      setItems((items) => {
        return [...items, newItem];
      });
      setItem("");
    } else {
      window.alert("please insert an item");
    }
  };

  const handleRemove = (name) => {
    console.log(name);
  };

  return (
    <div className="main-div">
      <h1 className="title">Daily Tracker</h1>
      <div className="line-div"></div>
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          type="text"
          placeholder="Enter new item here..."
          id="item"
          name="item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button type="submit" value="Submit" id="submit">
          Add New
        </button>
      </form>
      {items.map((newItem) => {
        const { id, item } = newItem;
        return (
          <div key={id} className="item">
            <h3>Item : {item}</h3>
            <button onClick={() => handleRemove(item)}>remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
