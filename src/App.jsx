import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header";
import Footers from "./components/Footers";
import MeetupList from "./components/MeetupList";

function App() {
  const [searchItem, setSearchItem] = useState("");

  return (
    <>
      <Header searchItem = {searchItem} setSearchItem = {setSearchItem} />
      
      <main className="container">
        <hr />
        <MeetupList searchItem = {searchItem} />
      </main>

      <Footers />
    </>
  );
}

export default App;
