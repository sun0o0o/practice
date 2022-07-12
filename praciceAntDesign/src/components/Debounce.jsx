import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import React, { useState, useEffect } from "react";
const { Search } = Input;

const Searchbar = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const onSearch1 = (e) => {
    console.log(value1, e.target.value);
    //setValue1(e.target.value);
  };

  const onSearch2 = (e) => {
    console.log(e.target.value);
    // setValue2(e.target.value);
  };

  useEffect(() => {
    console.log("일반 입력:", value1);
  }, [value1]);

  useEffect(() => {
    const debounce = setTimeout(() => {
      console.log("디바운스 입력", value2);
    }, 100);
    return () => clearTimeout(debounce); //->clearTimeout 바로 타이머 제거
  }, [value2]); //->결국 마지막 이벤트에만 setTimeout이 실행됨

  return (
    <Space direction="vertical">
      <p>일반 입력</p>
      <Search
        placeholder="input search text"
        onSearch={(value1, e) => onSearch1(value1, e)}
        style={{
          width: 200,
        }}
      />
      <p>debounce 입력</p>
      <Search
        placeholder="input search text"
        allowClear
        onSearch={onSearch2}
        style={{
          width: 200,
        }}
      />
    </Space>
  );
};

export default Searchbar;
