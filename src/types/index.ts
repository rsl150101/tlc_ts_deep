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
