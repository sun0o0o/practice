import React from "react";
import "./App.css";
import LayoutComponent from "./pages/Layout";
import SearchBar from "./components/SearchBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav2 from "./pages/Nav2";

const datas = [
  { value: "삼성전자" },
  { value: "삼성바이오로직스" },
  { value: "LG전자" },
  { value: "LG화학" },
  { value: "DL" },
];

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <SearchBar datas={datas} /> */}
        <Routes>
          <Route path="/" element={<LayoutComponent />} />
          <Route path="/nav2" element={<Nav2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
