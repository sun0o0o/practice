function isEven(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

isEven([1, 2, 3, 4, 5]);

//Run and Debug 누르고
//Node.js 선택
//함수의 작동을 확인하고 싶은 라인의 숫자를 클릭해서 중단점 설정

// local, global 변수 확인 가능

//Watch에서 +버튼을 누르고 result 입력해서 값을 확인해볼 수 있음
//예를들어 result === 3 이런 식으로 문장도 써서 확인해볼 수 있음

//첫번째 버튼 누르면 바로 breakpoint 실행됌
//2번쨰는 코드를 한줄한줄 실행

//3번째는 내가 호출한 함수 안에서 실행하고 싶을 때
//4번째는 이 함수 실행 그만하고 다음꺼 넘어가고 싶을 때

//breakpoint 우클릭해서 edit누르고 i === 5 이런식으로 조건 걸어서 시작할 수 있음
