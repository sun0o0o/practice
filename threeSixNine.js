//3 6 9 가 들어가면 짝 출력 //아니면 숫자 출력
// -> 1의자리 % 3 === 0 이면 짝

13;
function threeSixNine(num) {
  let tendigit;
  let onedigit;

  if (num > 10) {
    // num이 두자리수
    // 아.. Math.floor를 안해서 tendigit이 3.3이었구나..
    tendigit = Math.floor(num / 10); // 3
    onedigit = num - tendigit * 10; // 3
    if (onedigit === 3 || onedigit === 6 || onedigit === 9) {
      console.log("짝");
    } else {
      console.log(num);
    }
  } else {
    // num이 한자리수
    if (num === 3 || num === 6 || num === 9) {
      console.log("짝");
    } else {
      console.log(num);
    }
  }
}

threeSixNine(3);
threeSixNine(6);
threeSixNine(14);
threeSixNine(88);
threeSixNine(33);
