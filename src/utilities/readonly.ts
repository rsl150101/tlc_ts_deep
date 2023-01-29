//* interfaces
import type { IBankAccount } from "../types";

//* Readonly 유틸리티 사용

const myAccount: Readonly<IBankAccount> = {
  accountNumber: "1234",
  balance: BigInt(10000000),
};

// myAccount.balance = BigInt(0);
//- 속성을 읽기만 가능하게 해준다.
