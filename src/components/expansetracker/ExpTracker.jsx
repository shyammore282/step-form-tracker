import { useState } from "react";
import "./style.css";

const ExpTracker = () => {
  const [allDetails, setAllDetails] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleOnClick = () => {
    const newData = { name, price };
    setAllDetails([...allDetails, newData]);
    setName("");
    setPrice("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="formWrapper">
        <form className="formBox" action="" onSubmit={handleSubmit}>
          <div className="inputf">
            <label htmlFor="itemsName">Name If Items</label>
            <input
              className="input"
              type="text"
              placeholder="name of items..."
              onChange={(event) => setName(event.target.value)}
              value={name}
            />
          </div>
          <div className="inputf">
            <label htmlFor="price">Price Of Items</label>
            <input
              className="input"
              type="text"
              placeholder="Price of items..."
              onChange={(event) => setPrice(event.target.value)}
              value={price}
            />
          </div>
          <div className="buttonBox">
            <button type="submit" onClick={handleOnClick}>
              submit
            </button>
            <button type="reset" onClick={() => setAllDetails("")}>
              clear all
            </button>
          </div>
        </form>
        <div className="listBox">
          {allDetails && allDetails.length > 0
            ? allDetails.map((list, index) => {
                return (
                  <li className="listedItems" key={index}>
                    <p>{list.name}:</p>
                    <p>{list.price}</p>
                  </li>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default ExpTracker;
