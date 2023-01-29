//* types
import type { TMyPet } from "../types";

//* Exclude 유틸리티 사용
//- 유니언 타입에 속해있는 속성들을 생략할때 쓰임

type TLessMyType = Exclude<TMyPet, "alpaca">;

const catOrDogAllowed: TLessMyType = "cat";

type TOnChange = (isDone: boolean) => void;
type TGruopOfTypes = string | undefined | TOnChange;
type TFunctionType = Exclude<TGruopOfTypes, string | undefined>;

const onChangeHandler: TFunctionType = (isDone) => console.log("isDone");
