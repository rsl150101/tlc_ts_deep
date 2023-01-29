//* types
import type { TMyPet } from "../types";

//* Extract 유틸리티 사용
//- 타입에서 필요한 유니언만 뽑아온다.

type TExtractedType = Extract<TMyPet, "alpaca" | "cat">;
const onlyAlpacaOrCatAllowed: TExtractedType = "cat";
