//* enums
import { Status } from "../types";
//* interfaces
import type { Order, User } from "../types";

function getData<T>(data: T): T {
  return data;
}

console.log(getData(123));
//- 명시해주지 않으면 타입추론됨
console.log(getData<number>(123));
//- number 로 명시해주어서 제네릭 타입 T 가 모두 number 로 지정
// console.log(getData<string>(123));
//- 명시한 타입과 일치하지 않아서 에러
console.log(getData<User>({ username: "kim", password: "123" }));

const orders: Order[] = Object.values(Status).map((status, index) => {
  return {
    buyer: `buyer #${index}`,
    orderStatus: status,
  };
});
//? Object.keys(Status) 는 주어진 객체의 속성 이름들을 문자열 배열로 반환해준다
//- 그래서 우리가 인자로 보낸 enum 의 타입을 반환해주는 values() 로 해결
//! 키와 값이 같기 때문에 우리가 원하는 값이 나오지만 다르다면 다른 방법으로 해결해야한다.

//* 챌린지
//- entries 메서드로 해결해보기

const challenge: Order[] = Object.entries(Status).map((status, index) => {
  return {
    buyer: `buyer #${index}`,
    orderStatus: status[1],
  };
});

console.log(orders, challenge);
