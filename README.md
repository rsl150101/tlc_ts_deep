# 내배캠 타입스크립트 심화 과정

## Ⅰ. enum (열거형)

> enumerated type<br>
> 관련된 상수 값들을 그룹핑 즉 집합하는 것<br>
> 문자형과 숫자형 기반의 열거형을 지원함<br>
> 속성을 선언해서 타입으로도 쓸 수 있고 배열로 전환해서도 쓸수 있고 그 외의 기능들로 사용 가능

- ### 숫자형 enum
  실습파일 : [num_enum.ts](https://github.com/rsl150101/tlc_ts_deep/blob/master/src/enums/num_enum.ts)
- ### 문자형 enum
  실습파일 : [str_enum.ts](https://github.com/rsl150101/tlc_ts_deep/blob/master/src/enums/str_enum.ts)
- ### 실습
  - #### 파일 분리
    실습파일 : [index.ts](https://github.com/rsl150101/tlc_ts_deep/blob/master/src/types/index.ts)
  - #### 타입 캐스트
    실습파일 : [str_enum.ts](https://github.com/rsl150101/tlc_ts_deep/blob/master/src/enums/str_enum.ts)
  - #### 인자로 받아보기
    실습파일 : [functions.ts](https://github.com/rsl150101/tlc_ts_deep/blob/master/src/enums/functions.ts)
  - #### 인터페이스의 타입으로 부여하기
    실습파일 : [functions.ts](https://github.com/rsl150101/tlc_ts_deep/blob/master/src/enums/functions.ts)
  - #### 오브젝트 메서드와 함께 써보기
    실습파일 : [objects.ts](https://github.com/rsl150101/tlc_ts_deep/blob/master/src/enums/objects.ts)
  - #### 객체키값을 enum 으로 설정하기
    실습파일 : [objects.ts](https://github.com/rsl150101/tlc_ts_deep/blob/master/src/enums/objects.ts)
  - #### enum tree-shaking
    실습파일 : [enum_tips.ts](https://github.com/rsl150101/tlc_ts_deep/blob/master/src/enums/enum_tips.ts)
  - #### enum Tip
    실습파일 : [enum_tips.ts](https://github.com/rsl150101/tlc_ts_deep/blob/master/src/enums/enum_tips.ts)

## Ⅱ. Generic Type (제네릭 타입)

> 선언 시점이 아닌 생성 시점에 타입을 명시하여 하나의 타입만이 아닌 다양한 타입을 사용할 수 있도록 하는 기법<br>
> 관용적으로는 T를 대표적으로 사용하고 그 외에 U, V 가 있다.<br>
> 다양한 타입을 사용할 수 있다는 점에서 any와 차이를 못느낄 수 있지만 any 는 타입체크를 하지 않으며 전달 받은 데이터의 타입을 알 수 없고, 반환할 때 타입의 정보를 반환하지 않지만 제네릭은 전달받은 타입을 확인 및 반환을 할 수 있으며 타입을 제한할 수도 있다.

- ### 형태
  실습파일 : [index.ts](https://github.com/rsl150101/tlc_ts_deep/blob/master/src/types/index.ts)
- ### 제네릭 타입을 쓰지 않은 인터페이스와 차이점
  실습파일 : [objects.ts](https://github.com/rsl150101/tlc_ts_deep/blob/master/src/generics/objects.ts)
- ### 실습
  - #### 객체에서 제네릭 타입
    실습파일 : [objects.ts](https://github.com/rsl150101/tlc_ts_deep/blob/master/src/generics/objects.ts)
  - #### 함수에서 제네릭 타입
    실습파일 : [functions.ts](https://github.com/rsl150101/tlc_ts_deep/blob/master/src/generics/functions.ts)
  - #### 클래스에서 제네릭 타입
    실습파일 : [classes.ts](https://github.com/rsl150101/tlc_ts_deep/blob/master/src/generics/classes.ts)

## Ⅳ. Others

> 접근제한자

- Access Modifier (접근 제한자)
  실습파일 : [access_modifier.ts](https://github.com/rsl150101/tlc_ts_deep/blob/master/src/others/access_modifier.ts)
