export declare interface IPayloadRegister {
  name: string | null;
  email: string | null;
  password: string | null;
}

export declare type IPayloadLogin = Omit<IPayloadRegister, `name`>;

export declare interface IResponseAuth {
  expiresIn: string;
  accessToken: string;
}

export declare interface IProfile {
  email: string;
  id: string;
  name: string;
  role: string;
  status: string;
  image: string;
}
