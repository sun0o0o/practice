var sleep = time => {
  console.log('sleep:', time);
  while (true); // 무한루프
};
//sleep함수를 0초후에 실행해주세요
setTimeout(() => sleep(10000), 0);
setTimeout(() => sleep(20000), 0);

//Console 출력 값은? -> sleep:10000
//무한루프가 돌아서 sleep:20000은 출력되지 않는다

/*----------------------------------------------------------------------------- */

const solution = (patterns, sources) => {
  const result1 = []; //['ddd']
  const result2 = []; // ['ddd']
  const list = patterns.slice(); // ['aaa', 'bbb', 'ccc']
  const set = new Set(patterns.slice()); // 새로운 ['aaa', 'bbb','ccc']

  sources.forEach(str => {
    if (!list.includes(str)) result1.push(str);
    if (!set.has(str)) result2.push(str);
  });

  console.log(result1.length === result2.length); //1 === 1
};

solution(['aaa', 'bbb', 'ccc'], ['aaa', 'ddd']);

//Console 출력 값은? -> true

/*----------------------------------------------------------------------------- */

//var는 함수 스코프를 따름
var obj = {
  name: 'B',
  print: function () {
    var inner1 = function () {
      console.log(this.name, name);
    };
    inner1();

    var inner2 = () => console.log(this.name, name);
    inner2();

    var name = 'C';
    console.log(window.name, this.name, name);
  },
};

name = 'A'; // 선언되지 않은 변수는 항상 전역변수
obj.print();

// 예상되는 Console 출력 값은?
//A undefined  ->  // 내부함수의 this는 전역 name인 A  //이 지역스코프에는 name이 없음
//B undefined -> // 화살표함수의 this는 아무것도 없어서 위로 this를 찾아다님 obj.name은 B
//                지역스코프에 name이 없음
//A B C -> // window.name 전역이니까 A // obj.name은 B //name변수의 값은 C
