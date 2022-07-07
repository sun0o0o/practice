import React from "react";

//useEffect(()=>{},[]) 이렇게할 때 상태가 변경되면
// 콘솔이 여기도 2번 찍히나?

const Child = ({ name }) => {
  return <div>내 이름은 {name}</div>;
};

export default Child;
