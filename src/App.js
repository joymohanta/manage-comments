import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import ActiveComents from "./components/ActiveComents/ActiveComents";
import DeletedComents from "./components/DeletedComents/DeletedComents";
import Navbar from "./components/shared/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <h2>This is manage comments page</h2>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="activecoments"
          element={<ActiveComents></ActiveComents>}
        ></Route>
        <Route
          path="deletedcoments"
          element={<DeletedComents></DeletedComents>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
