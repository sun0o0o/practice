// 반복문 안에서 비동기코드 동기적으로 작성하기
//콘솔 돌리는 방법: 컨트롤 옵션 n
const delay = () => {
  const randomDelay = Math.floor(Math.random() * 4) * 100;
  return new Promise((resolve) => setTimeout(resolve, randomDelay));
};

const list = [1, 2, 3];
// list.forEach(async (data) => {
//   console.log(data + "요청 시작");
//   await delay().then(() => console.log(data));
//   console.log(data + "요청 끝");
// });
//  console.log(list) 해보면 123 순서대로 나올 것 같지만 231 이렇게 비동기적으로 작동한다
// 요청 자체는 리스트 요소 순서대로 이루어지지만 각 요소의 요청 처리속도가 다르기 때문에 delay()는 순서대로 끝나지 않는다
// 즉 async await은 forEach안에서 사용할 수 없다

// forEach - 반복문이 아니라 함수다. 콜백함수를 뿌린다, 비동기방식으로 진행된다
// for of - iterable객체를 모두 순회할 수 있는 반복문

//해결 방법은 for...of문 또는 일반적인 for문을 사용하는 것이다
const result = async (list) => {
  for (data of list) {
    await delay().then(() => console.log(data));
  }
};

const list2 = [1, 2, 3, 4, 5, 6, 7];
// result(list2)
//for문은 각 요소(data)에 대해 delay()의 결과를 기라뎌준 다음에야 다음 요소에 대한 delay()를 실행해
//요청이 순서대로 출력된다 하지만 리스트의 데이터가 많아지면 더 많은 시간이 걸린다
const loop = async (list) => {
  console.log("시작");
  const promises = list.map(async (data) => {
    return await delay().then(() => data);
  });

  const results = await Promise.all(promises);
  //map은 promise 배열을 반환하기 때문에 배열의 모든 promise가 통과할 때까지 기다려주는 Promise.all()을 사용!
  results.forEach((data) => console.log(data));
  console.log("끝");
};
loop(list2);

//상황에 맞게 사용하기
// 1. 비동기적으로 처리되어도 상관없을 때: forEach 함수 사용
// 2. 각각의 요청에 대해 모두 await해야한다: 기다려야 하기때문에 느리지만 for loop 사용
// 3. 요청이 끝나는 순서는 상관없다: map함수를 통해 promise 반환
