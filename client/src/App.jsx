import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import Catalog from "./components/Catalog/Catalog.jsx";
import Create from "./components/Create/Create.jsx";
function App() {
  return (
    <div id="box">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/games" element={<Catalog/>}></Route>
        <Route path="/create" element={<Create/>}></Route>
      </Routes>
    </div>
  );
}
export default App;
