/// <reference types="typescript" />

declare module 'types' {
  interface IPayloadRegister {
    name: string | null;
    email: string | null;
    password: string | null;
  }

  type IPayloadLogin = Omit<IPayloadRegister, `name`>;

  interface IResponseAuth {
    expiresIn: string;
    accessToken: string;
  }
}
