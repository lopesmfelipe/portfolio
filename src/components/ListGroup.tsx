import { useState } from "react";

function ListGroup() {
  let items = ["Tokyo Ghoul", "Full Metal Alchemist", "Jujutsu Kaisen","Bleach", "HunterxHunter", "One Punch Man"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>The Anime List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
          className={
            selectedIndex === index
            ? "list-group-item"
            : "list-group-item"}
          key={item} 
          onClick={() => {setSelectedIndex(index); }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
