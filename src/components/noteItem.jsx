import React from "react";

const NoteItem = (props) => {
  return (
    <li className="py-6 px-4 cursor-pointer font-primary">
      <h1>{props.title}</h1>
      <p>Lorem ipsum dolor sit, amet consectetur</p>
    </li>
  );
};

export default NoteItem;
