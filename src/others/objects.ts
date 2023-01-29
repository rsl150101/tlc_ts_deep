import { Color } from "../types";

//* keys 메서드
const keys = Object.keys(Color);
console.log(keys);
//- 반환 타입이 string[]
console.log("----------");

//* values 메서드
const values = Object.values(Color);
console.log(values);
//- 반환 타입이 enum[]
console.log("----------");

// interface ObjectInterface {
//   [key in Color]: string;
// }
//- enum 이 키가 되게 할려면 type 을 사용해야한다

type ObjectType = {
  [key in Color]?: string;
};

const myObject: ObjectType = {};

// keys.forEach((key) => (myObject[key] = "hello"));
//- myObject 의 키는 Color 여야하는데 변수 key 는 string[] 이기 때문에 에러
//? 타입캐스트로 해결할 수 있지만 권장되지 않는다.
keys.forEach((key) => (myObject[key as Color] = "hello"));

//? 위 문제는 Color[] 인 values 로 만들면 된다
values.forEach((key) => (myObject[key] = "Hello"));

console.log(myObject);
console.log("----------");

//* entries 메서드
const keyValues = Object.entries(Color);
console.log(keyValues);
//- 반환 타입이 [string, enum][]

//* 객체 키값을 enum 으로 설정하기

type TTableData = { [x: string]: string };
//- x 키 타입은 string 값 타입은 string 지정

interface ITableData {
  [x: string]: string;
}
//? object.ts 에서는 에러가 발생했는데 왜 여기선 에러가 없나?
//- object.ts 에서는 in 이라는 계산이 필요하기 때문에 type 으로 지정해줘야하지만
//- 타입을 정의할때는 계산이 필요하지 않기 때문에 가능

const myTableData: TTableData = {
  ID: "1",
  firstName: "jane",
  lastName: "doe",
  score: "100",
  age: "99",
};

const enum TableKey {
  ID = "ID",
  FirstName = "firstName",
  LastName = "lastName",
  Score = "score",
}

type StrictTableData = { [key in TableKey]: string };

const strictTableData: StrictTableData = {
  ID: "1",
  firstName: "jane",
  lastName: "doe",
  score: "100",
  //   age: "99",
};
//- 알려지지 않은 속성(age)은 지정할 수 없기 때문에 에러
