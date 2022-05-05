//3,6,9 게임
//3이나 6이나 9가 숫자에 들어있으면 박수를 치는 게임
//함수 2개 제작
//1. 숫자를 input으로 받아서 3/6/9가 들어있으면 '짝' return
// 3,6,9가 없으면 return 숫자 자체를 문자열로 바꿔서 return

function MakeThreeSixNine(num) {
  //num은 0 이상의 수가 들어온다
  //num을 String()을 이용해서 문자열로 바꾸어준다.
  //String(num)안에 '3','6','9'라는 문자열이 존재하면 '짝'을 return
  //String(num)안에 '3','6','9' 문자열이 존재하지 않는 경우 String(num)을 return한다

  let StringNum = String(num);
  if (
    StringNum.includes('3') ||
    StringNum.includes('6') ||
    StringNum.includes('9')
  ) {
    return '짝';
  } else {
    return StringNum;
  }
}

//string배열 (참여자 이름이 담긴 배열) //arr = ['가가','나나',....]
//참여자들이 돌아가면서 게임을 할거다.10000번정도 게임을 진행한다.
function Game(arr) {
  //MakeThreeSixNine 함수를 이용해서 10000번 게임하기
  //arr함수를 반복한다. 첫번째 사람의 경우 '1',두번째사람의경우 '2', 세번째 사람의 경우 '짝'
  //결과는 console.log 사용
  let result = '';
  for (let i = 1; i < 10001; i++) {
    console.log(arr[i % 3] + MakeThreeSixNine(i));
  }
}
//50%확률로 오답을 출력하게 변경 (Math.random)
//오답이 나온 순간 게임 종료.

function Game2(arr) {
  //Math.random()을 이용해서 50%의 확률로 MakeThreeSixNine함수가 호출이 된다
  //MakeThreeSixNine함수가 호출되지 않는 경우는 break되어서 게임이 멈춘다.

  for (let i = 1; i < 10001; i++) {
    if (Math.random() < 0.5) {
      //정답이 나오는 경우
      console.log(arr[i % 3] + MakeThreeSixNine(i));
    } else {
      //오답이 나오는 경우
      console.log(arr[i % 3] + '오답');
      break;
    }
  }
}
