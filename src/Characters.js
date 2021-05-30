import React from "react";
import Item from "./Item";
import './Characters.css'
import Spinner from "./Spinner";


function Characters({ isLoading, items }) {
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="cards">
      {items.map((item) => (
        <Item key={item.char_id} item = {item}></Item>
      ))}
    </div>
  );
}

export default Characters;
