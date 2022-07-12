import React from "react";
import "./App.css";
import LayoutComponent from "./pages/Layout";
import SearchBar from "./components/SearchBar";

const datas = [
  { value: "삼성전자" },
  { value: "삼성바이오로직스" },
  { value: "LG전자" },
  { value: "LG화학" },
  { value: "DL" },
];

const App = () => {
  return (
    <div className="App">
      <SearchBar datas={datas} />
    </div>
  );
};

export default App;
