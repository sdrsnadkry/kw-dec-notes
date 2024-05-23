import Notes from "./components/notes";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3 bg-slate-300">
        <Sidebar />
      </div>
      <div className="col-span-9 bg-slate-400">
        <Notes />
      </div>
    </div>
  );
}

export default App;
