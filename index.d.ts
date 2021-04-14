export declare interface IPayloadRegister {
  email: string | null;
  name: string | null;
  password: string | null;
}

export declare type IPayloadLogin = Omit<IPayloadRegister, `name`>;

export declare interface IResponseAuth {
  accessToken: string;
  expiresIn: string;
}

export declare interface IProfile {
  email: string;
  id: string;
  image: string;
  name: string;
  role: string;
  status: string;
}

export declare type Category = {
  createdAt: string;
  description: string;
  id: string;
  updatedAt: string;
}

export declare type Categories = Array<Category>;
