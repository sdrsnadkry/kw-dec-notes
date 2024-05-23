import React from "react";
import NoteItem from "./noteItem";

const Sidebar = () => {
  return (
    <div>
      <h1 className="text-3xl px-4">Notes</h1>

      <div className="px-4 mt-10">
        <input type="text" placeholder="Search" className="w-full py-4 px-4 outline-none border-none rounded-lg" />
      </div>

      <ul>
        <NoteItem title="Kripa" />
        <NoteItem title="Dipin" />
        <NoteItem title="David" />
        <NoteItem title="Prabin" />
        <NoteItem title="Pawan" />
        <NoteItem title="Dipu" />
        <NoteItem title="Pradim" />
        <NoteItem title="Reena" />
        <NoteItem title="Roshan" />
      </ul>
    </div>
  );
};

export default Sidebar;
