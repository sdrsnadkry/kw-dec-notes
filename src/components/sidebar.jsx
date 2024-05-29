import React from "react";
import NoteItem from "./noteItem";

import { CgNotes } from "react-icons/cg";

const Sidebar = (props) => {
  return (
    <div className="py-6 h-full">
      <div className="flex items-center px-4">
        <CgNotes className="h-7 w-7 mr-2" />
        <h1 className="text-3xl">Notes</h1>
      </div>

      <div className="px-4 mt-10">
        <input
          type="text"
          value={props.searchText}
          onChange={function (event) {
            props.setSearchText(event.target.value);x
          }}
          placeholder="Search"
          className="w-full py-4 px-4 outline-none border-none rounded-lg"
        />
      </div>

      <div className="max-h-[600px] overflow-scroll">
        <ul>
          {props.listOfNotes.map((item) => (
            <NoteItem
              key={item.id}
              title={item.title}
              description={item.description}
              date={item.date}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
