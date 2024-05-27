import React from "react";

const NoteItem = (props) => {
  return (
    <li
      className={`py-3 my-3 mx-4 rounded-lg cursor-pointer font-roboto ${
        props.active && "bg-slate-700"
      }`}
    >
      <div className={`px-2 ${props.active && "text-white"}`}>
        <h1>{props.title}</h1>
        <p className="mt-1">{props.description}</p>
        <p className="text-sm mt-1">{props.date}</p>
      </div>
    </li>
  );
};

export default NoteItem;
