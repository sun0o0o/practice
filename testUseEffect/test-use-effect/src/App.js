import Child from "./components/Child";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");

  //첫 렌더링때 상태가 변경됌 -> 이러면 상태가 변하지만 그래도
  //렌더링은 한번만 되는 줄 알았음
  // useEffect(() => {
  //   setName("선영");
  // }, []);

  useEffect(() => {
    console.log("렌더링");
  });

  return (
    <div className="App">
      <span>내이름은 {name}</span>
    </div>
  );

  //이렇게 props로 주면 props로도 받고 state도 변경되어서 렌더링이 3번일어남
  // return (
  //   <div className="App">
  //     <Child name={name} />
  //   </div>
  // );
}

export default App;
