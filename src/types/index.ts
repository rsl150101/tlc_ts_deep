export enum Color {
  Red = "Red",
  Green = "Green",
  Blue = "Blue",
}

export enum Direction {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

//* 인터페이스로 선언
export interface ThingsInLife {
  colorOfPen: Color;
  keyboardArrow: Direction;
}

//* 타입으로 선언
export type TThingInLife = {
  colorOfPen: Color;
  keyboardArrow: Direction;
};

//* 기존의 인터페이스
export interface MyInterface {
  value: string | number | string[];
}

//* 제너릭 인터페이스
export interface MyInterfaceG<T> {
  value: T;
}

export interface User {
  username: string;
  password: string;
}

export enum Status {
  Initiated = "Initiated",
  Pending = "Pending",
  Shipped = "Shipped",
  Delivered = "Delivered",
}

export interface Order {
  buyer: string;
  orderStatus: Status;
}

export interface IToppings {
  tomatoes: boolean;
  onion: boolean;
  lettuce: boolean;
  ketchup: boolean;
}

export interface IBubbleTeaOrder {
  tea: boolean;
  straw?: boolean;
}

export interface IBankAccount {
  accountNumber: string;
  balance: bigint;
}

export type TMyPet = "dog" | "cat" | "alpaca";
