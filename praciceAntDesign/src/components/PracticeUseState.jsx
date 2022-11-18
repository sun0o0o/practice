import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const PracticeUseState = () => {
  const [something, setSomething] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function isTypeErr() {
    try {
      let res = await axios.get("http://localhost:4000/data");
      if (res) {
        setSomething(res.data);
        setIsLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    isTypeErr();
  }, []);

  return (
    <div>{isLoading ? <div>로딩중</div> : <div>{something[0].id}</div>}</div>
  );
};

export default PracticeUseState;
