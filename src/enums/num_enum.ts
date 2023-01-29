enum Color {
  Red,
  Green,
  Blue,
}
//- 값을 정의해주지 않으면 0으로 시작해서 자동으로 다음 속성에 1씩 증가해서 부여

console.log("-------------");

const myColor: number = Color.Red;
console.log("myColor : ", myColor);
// > myColor : 0

const yourColor: Color.Blue = Color.Blue;
console.log("yourColor : ", yourColor);
// > yourColor : 2
//- enum 의 속성도 타입으로 지정해줄 수 있다.

console.log("-------------");

console.log(Color["Red"]);
// > 0
console.log(Color["Blue"]);
// > 2

console.log("-------------");

console.log(Color[0]);
// > Red
console.log(Color[1]);
// > Green

console.log("-------------");

console.log(Color);
//- 위 값이 출력되는 이유는 이러한 형태이기 때문

enum Color2 {
  Red = 200,
  Green,
  Blue,
}
//- 값을 지정해주면 지정해준 다음 속성부터 자동으로 1씩 증가해서 부여됨

console.log(Color2);
