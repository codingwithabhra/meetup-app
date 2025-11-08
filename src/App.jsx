import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/header";
import MeetupList from "./components/MeetupList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <hr />
      <main>
        <MeetupList />
      </main>
    </>
  );
}

export default App;
