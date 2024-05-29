import { useEffect, useState } from "react";
import Notes from "../components/notes";
import Sidebar from "../components/sidebar";
import { notes } from "../components/data";
import Header from "../components/header";

function Home() {
  const [searchText, setSearchText] = useState("");

  const [listOfNotes, setListOfNotes] = useState(notes);

  useEffect(() => {
    const newData = notes?.filter((item) => {
      return (
        item.title.toLowerCase().includes(searchText.toLowerCase()) ||
        item.description.toLowerCase().includes(searchText.toLowerCase())
      );
    });

    setListOfNotes(newData);
  }, [searchText]);

  const handleAddToNotes = (formData) => {
    const newArray = [formData, ...listOfNotes];

    setListOfNotes(newArray);

    console.log(newArray);
  };

  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-3 bg-slate-300">
          <Sidebar
            listOfNotes={listOfNotes}
            searchText={searchText}
            setSearchText={setSearchText}
          />
        </div>
        <div className="col-span-9 bg-slate-400">
          <Notes handleAddToNotes={handleAddToNotes} />
        </div>
      </div>
    </>
  );
}

export default Home;
