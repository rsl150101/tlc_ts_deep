import { Color } from "../types";

const myColor = Color.Red;
console.log("myColor : ", myColor);

const yourColor = Color.Blue;
console.log("yourColor : ", yourColor);

console.log(Color);

const favColor = Color.Red;
console.log("favColor : ", favColor);

const chorock: Color = Color.Green;
console.log(chorock);

// const colorOfSky: Color.Blue = Color.Green;
//- 타입이 일치하지 않아서 에러 발생

// const faveColor : Color = "Red";
//- enum 타입으로 선언한 상수에는 문자열을 할당할 수 없음

//* 타입캐스트

//? 하지만 as 를 사용해 타입캐스트를 해줄 수 있음
const faverColor: Color = "Red" as Color;
//- "Red" 가 Color 타입으로 변장 되어 에러 없이 컴파일됨

//! 문제점
const potatoColor: Color = "Potato" as Color;
//- Color enum 에 Potato 가 없어도 문제 없이 컴파일이 되는 문제가 생긴다.
