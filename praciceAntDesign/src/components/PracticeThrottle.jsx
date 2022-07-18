import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

const PracticeThrottle = () => {
  const [pages, setPages] = useState(10);
  const [items, setItems] = useState([]);
  const [throttle, setThrottle] = useState(false);

  useEffect(() => {
    let res = [];
    for (let i = 1; i <= pages; i++) {
      res.push(i);
    }
    setItems(res);
  }, [pages]);

  const onScroll = () => {
    if (throttle) return;
    else if (!throttle) {
      setThrottle(true);
      setTimeout(async () => {
        if (pages < 50) {
          setPages(pages + 5);
          setThrottle(false);
        }
      }, 500);
    }
  };

  return (
    <Container onScroll={onScroll}>
      <p>throttle 연습</p>
      <div>
        {items.map((page, idx) => (
          <Box key={idx}>{page}</Box>
        ))}
      </div>
    </Container>
  );
};

export default PracticeThrottle;

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 500px;
  background-color: yellowgreen;
  margin-left: 280px;
  overflow-y: scroll;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100px;
  height: 100px;
  background-color: yellow;
  margin-bottom: 10px;
`;
