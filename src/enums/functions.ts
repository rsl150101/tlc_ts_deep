//* enum
import { Color, Direction } from "../types";
//* interface
import type { ThingsInLife } from "../types";
//- 위에서 한번에 import 해와도 되지만 좀 더 명시적으로 작성

//* 인자로 받아보기

function printRGB(color: Color) {
  return color;
}
// 반환 타입을 지정해주 읺아도 타입추론을 통해서 자동으로 설정된다.

console.log(printRGB(Color.Red));
console.log(printRGB(Color.Green));
// console.log(printRGB(Color.Purple));
//- Color 에 없으면 에러가 발생

//* 인터페이스의 타입으로 부여

function printThingsInLife(things: ThingsInLife) {
  return `color of pen: ${things.colorOfPen} keyboard arrow: ${things.keyboardArrow}`;
}

console.log(
  printThingsInLife({ colorOfPen: Color.Blue, keyboardArrow: Direction.Up })
);
