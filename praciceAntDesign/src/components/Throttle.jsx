import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function App() {
  const [page, setPage] = useState(10);
  const [books, setBook] = useState([]);
  const [throttle, setThrottle] = useState(false);

  const handleScroll = () => {
    if (throttle) return;
    if (!throttle) {
      setThrottle(true);
      setTimeout(async () => {
        if (page >= 50) setPage(page);
        else setPage((page) => page + 5);
        setThrottle(false);
      }, 500);
    }
  };

  useEffect(() => {
    setBook(Array.from({ length: page }, (_, idx) => idx + 1));
    //console.log(books); //books에 담긴 배열이 page가 늘어갈 때 마다 [1,2,3,4,5] 이렇게 5단위로 커짐
  }, [page]);

  return (
    <Background onScroll={handleScroll}>
      <div>
        {books.map((page, idx) => (
          <Page key={idx}>{page}</Page>
        ))}
      </div>
    </Background>
  );
}

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 400px;
  width: 200px;
  background-color: mediumaquamarine;
  overflow-y: scroll;
`;
const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightpink;
  height: 100px;
  width: 100px;
  margin-bottom: 10px;
`;
