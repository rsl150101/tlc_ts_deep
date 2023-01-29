//* NonNullable 유틸리티 사용
//- 타입안에서 null 또는 undefined 타입을 생략해준다

type TQueryParam = string | string[] | undefined | null;
type TNonNullableQueryParam = NonNullable<TQueryParam>;

const queryParam: TNonNullableQueryParam = "orders";
// const forbiddenQueryParam :TNonNullableQueryParam = undefined
//- undefined 가 생략되어있어서 undefined 를 사용할 수 없다.
