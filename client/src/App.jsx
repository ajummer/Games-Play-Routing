import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import Catalog from "./components/Catalog/Catalog.jsx";
import Create from "./components/Create/Create.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
function App() {
  return (
    <div id="box">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/games" element={<Catalog/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}
export default App;
