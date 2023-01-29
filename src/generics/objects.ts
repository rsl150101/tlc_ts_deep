//* interfaces
import type { MyInterface, MyInterfaceG } from "../types";

const stringObject: MyInterface = { value: "hello world" };
const numberObject: MyInterface = { value: 1234 };
const stringArrayObject: MyInterface = { value: ["hello", "world"] };

const stringObjectG: MyInterfaceG<string> = { value: "hello world" };
const numberObjectG: MyInterfaceG<number> = { value: 1234 };
const stringArrayObjectG: MyInterfaceG<string[]> = {
  value: ["hello", "world"],
};

//* 기존의 인터페이스와 제네릭 타입 인터페이스 차이점
//- 기존의 인터페이스는 타입의 형태를 추가 하고 싶으면 인터페이스에서 추가를 해주어야한다.
//- 하지만 제네릭은 <T> 에서 T의 타입을 지정해주면 해당 타입 변수(T)들이 지정해준 타입으로 지정된다.
//- 그리고 제네릭은 기본값을 줄 수도 있다.
//- 위 인터페이스를 예시로 들면 MyInterfaceG<T = string>
