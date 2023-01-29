//* Pick 유틸리티 사용
//- 타입의 특정 속성들만 뽑아 쓸수 있다.

interface IUser {
  firstName: string;
  lastName: string;
}

interface IStudent {
  user: IUser;
  isGraduated: boolean;
  school: string;
}
type TStudentName = Pick<IStudent, "user">;

const studentName: TStudentName = {
  user: {
    firstName: "winnie",
    lastName: "pooh",
  },
};

//* Pick 으로 인터페이스 오버라이드
interface IPickOverride extends Pick<IStudent, "user"> {
  school: number;
}

const pickOverrideStudent: IPickOverride = {
  user: {
    firstName: "winnie",
    lastName: "pooh",
  },
  school: 1,
};
