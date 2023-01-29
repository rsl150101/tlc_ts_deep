//* Omit 유틸리티 사용
//- 특정 타입에 구성되어있는 프로퍼티를 생략시킬때 쓰는 타입이며
//- 생략하고 오버라이드하는 용도로도 쓸 수 있다.

interface IUserInfo {
  userName: string;
  favoriteColor: string;
  email: string;
  password: string;
}

type TLessUserInfo = Omit<IUserInfo, "password" | "email">;

const newUser: TLessUserInfo = {
  userName: "pony",
  favoriteColor: "rainbow",
};

//* Omit 으로 인터페이스 오버라이드
interface IOmitOverride extends Omit<IUserInfo, "password" | "email"> {
  userName: string;
  favoriteColor: string;
  password: number;
}

const omitOverrideUser: IOmitOverride = {
  userName: "test",
  favoriteColor: "red",
  password: 123,
};
