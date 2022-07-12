import React from "react";
import { useState } from "react";
import { AutoComplete } from "antd";
import styled from "styled-components";

const { Option } = AutoComplete;

const SearchBar = ({ datas }) => {
  const [result, setResult] = useState([]);

  const handleSearch = (inputValue) => {
    let res = [];
    if (!inputValue) {
      res = [];
    } else {
      res = datas.filter((item) => true === matchName(item.value, inputValue));
    }
    console.log("setResult", res);
    if (res.length > 0) {
      setResult(res);
    }
  };

  const matchName = (name, keyword) => {
    //console.log('matchName', name, keyword);
    if (name.toUpperCase().indexOf(keyword.toUpperCase()) !== -1) {
      console.log("matchName true");
      return true;
    } else {
      console.log("matchName false");
      return false;
    }
  };

  return (
    <Bar
      onSearch={handleSearch}
      placeholder="input here"
      filterOption={(inputValue, option) =>
        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
    >
      {result.map((item) => (
        <Option key={item.value}>{item.value}</Option>
      ))}
    </Bar>
  );
};

export default SearchBar;

const Bar = styled(AutoComplete)`
  width: 200px;
`;
