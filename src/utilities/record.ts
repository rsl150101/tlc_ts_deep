//* 기존의 사용법
type ObjectTypeObject = { [x: string]: string };
//* Record 유틸리티 사용
type ObjectTypeRecord = Record<string, string>;
//- 객체 타입을 설립할 때 쓰이며 두 코드는 같다.

type TCountry = "Korea" | "USA" | "Canada" | "UK";
type TCountryCode = 82 | 1 | 44;

type TCountryToCountryCode = Record<TCountry, TCountryCode>;
//- 위 코드는 아래 코드와 같다.
type TCountryToCountryCodeObject = { [countryName in TCountry]: TCountryCode };

const countries: TCountryToCountryCode = {
  Korea: 82,
  USA: 1,
  Canada: 1,
  UK: 44,
};
