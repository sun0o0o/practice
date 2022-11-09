let tcpInfo = [
  { a: 1, b: 2 },
  { a: 2, b: 3 },
  { a: 3, b: 4 },
];

let res = [];
// let func = () => {
//   tcpInfo.forEach((el) => {
//     res.push([{ text: `${el.a}` }, { text: `${el.b}` }]);
//   });
//   return res;
// };

let func = () => {
  tcpInfo.forEach((el) => {
    res.push([{ text: `${el.a}` }, { text: `${el.b}` }]);
  });
  return res;
};

const func2 = () => {
  func();
  res.forEach((el) => {
    return el;
  });
};
console.log(func2());
