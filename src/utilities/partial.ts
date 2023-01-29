//* interfaces
import type { IToppings } from "../types";

//* 기존의 인터페이스 사용
const myToopings: IToppings = {
  tomatoes: true,
  onion: true,
  lettuce: true,
  ketchup: true,
};

//* Partial 유틸리티 사용
const partialIToppings: Partial<IToppings> = {
  tomatoes: true,
  onion: undefined,
};
//- 속성이 선택적으로 바뀐다.
