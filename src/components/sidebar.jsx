import React from "react";
import NoteItem from "./noteItem";

import { CgNotes } from "react-icons/cg";

const Sidebar = () => {
  return (
    <div className="py-6">
      <div className="flex items-center px-4">
        <CgNotes className="h-7 w-7 mr-2" />
        <h1 className="text-3xl">Notes</h1>
      </div>

      <div className="px-4 mt-10">
        <input
          type="text"
          placeholder="Search"
          className="w-full py-4 px-4 outline-none border-none rounded-lg"
        />
      </div>

      <ul>
        <NoteItem title="Kripa" />
        <NoteItem title="Dipin" active={true}  />
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
