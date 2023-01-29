//* 접근 제한자 (public, private,protected)

//? public (default)
//- 제한 없음, 누구나 access 가능
//? private
//- class 내부 안에서만 access 가능
//? protected
//- class 내부 안에서 access 가능, 상속 받는 class 안에서 access 가능

class Base {
  first = "";
  public second = "";
  protected third = "";
  private fourth = "";

  baseFunction() {
    this.fourth;
  }
}

class Inherited extends Base {
  myFunction() {
    this.first;
    this.second;
    this.third;
    // this.fourth
    //- private 이기 때문에 접근 불가
  }
}

const inherited = new Inherited();

inherited.first;
inherited.second;
// inherited.third;
//- protected 이기 때문에 접근 불가
// inherited.fourth;
//- private 이기 때문에 접근 불가
