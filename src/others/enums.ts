//* enum tree-shaking
//- 사용하지 않는 코드를 제거하는 기능

const enum treeShaking {
  Red = "Red",
  Green = "Green",
  Blue = "Blue",
}

//- enum 은 타입스크립트에서 지원하는 기능으로 JS 코드로 트랜스파일이 된다
//- 사용하지 않는 enum 은 앞에 const 를 붙임으로써 트랜스파일이 되지 않게 해줄 수 있다.
//- 이렇게 우리는 트랜스파일된 js 파일의 코드 양을 줄일 수 있다.

//* enum Tip
//- enum 도 분해 할당이 가능하며 동시에 이름도 수정 가능
import { Color } from "../types";
const { Red, Green, Blue: ImBlue } = Color;
