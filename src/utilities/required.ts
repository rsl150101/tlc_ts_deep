//* interfaces
import type { IBubbleTeaOrder } from "../types";

//* Required 유틸리티 사용
const myBubbleTeaOrder: Required<IBubbleTeaOrder> = {
  tea: true,
  straw: true,
};
//- 선택적 속성도 속성이 필수가 된다
