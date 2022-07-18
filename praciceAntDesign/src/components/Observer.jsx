import React, { useRef, useEffect, useState } from "react";
import "./Observer.css";

const Observer = () => {
  const [datas, setData] = useState([
    { name: "기린", id: 0 },
    { name: "강아지", id: 1 },
    { name: "토끼", id: 2 },
    { name: "호랑이", id: 3 },
    { name: "사자", id: 4 },
  ]);

  //뷰포트(분홍색 background), 타겟(교차할 마지막 카드)
  const viewport = useRef(null);
  const target = useRef(null);

  const loadItems = () => {
    setData((prevState) => {
      const animals = [
        { name: "고양이" }, //5
        { name: "코끼리" }, //6
        { name: "원숭이" },
        { name: "고라니" },
        { name: "기린" },
        { name: "표범" },
      ];
      const id = prevState[prevState.length - 1].id; //4
      const animalId = animals.map((animal, index) => {
        return { ...animal, id: id + index + 1 };
      });
      return [...prevState, ...animalId];
    });
  };

  useEffect(() => {
    //options = 뷰포트 대신 사용할 요소 객체(루트 요소)
    const options = {
      root: viewport.current,
      threshold: 0,
    };

    const handleIntersection = (entries, observer) => {
      //entries= 인스턴스 배열, observer = 해당 인스턴스 참조
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          //가시성의 변화가 있으면 handleIntersection이 실행되므로
          //관찰 대상의 교차상태가 false이면(보이지 않은 경우) 실행x
          return;
        }
        //타겟(마지막 카드)가 보이면
        loadItems();
        observer.unobserve(entry.target); //관찰 중지
        observer.observe(target.current);
      });
    };

    const io = new IntersectionObserver(handleIntersection, options);

    if (target.current) {
      io.observe(target.current); //관찰 대상: target.current
    }

    return () => io && io.disconnect(); //io가 관찰하는 모든 요소 관찰 중지
  }, [viewport, target]);

  return (
    <div className="wrapper">
      <section className="card-grid" id="target-root" ref={viewport}>
        <p>Intersection Observer</p>
        {datas.map((animal, index) => {
          const lastEl = index === datas.length - 1;
          return (
            <div
              key={index}
              className={`card ${lastEl && "last"}`}
              ref={lastEl ? target : null}
            >
              <p>아이디: {animal.id}</p>
              <p>이름:{animal.name}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Observer;
