// TODO: more specific
export declare type AccessToken = string;

// TODO: Exact strings
/* Atoms */
export declare type ServerHealth = {
  readonly status: string;
};

export declare interface IShipping {
  readonly phone: string;
}

export declare type TimeCreation = {
  readonly createdAt: string;
  readonly updatedAt: string;
};

// TODO: more specific strings
/* IDS */
export declare type IdProfile = string;
export declare type IdItem = string;
export declare type IdProduct = string;
export declare type IdOrder = string;
export declare type IdCategory = string;

/* Exact */
export declare type ConditionProduct = `new` | `unboxed` | `used`;
export declare type StatusProduct =
  | `deleted`
  | `draft`
  | `initiated`
  | `published`
  | `sold`;
export declare type StatusOrder = `initiated` | `confirmed` | `canceled`;

export declare interface IUser {
  readonly createdAt: string;
  readonly email: string;
  readonly id: IdProfile;
  readonly image: string;
  readonly name: string;
  readonly role: string;
  readonly status: string;
  readonly updatedAt: string;
}

export declare type UserProfile = Pick<IUser, `email` | `name` | `image`>;

export declare interface IProduct extends TimeCreation {
  readonly categories: ICategory;
  readonly condition: ConditionProduct;
  readonly description: string;
  readonly id: IdProduct;
  readonly images: string[];
  readonly price: number;
  readonly seller: IUser;
  readonly shipping: IShipping;
  readonly status: StatusProduct;
  readonly title: string;
}

export declare interface ICategory {
  readonly createdAt: string;
  readonly description: string;
  readonly id: IdCategory;
  readonly updatedAt: string;
}

export declare interface IOrder extends TimeCreation {
  readonly buyer: IUser;
  readonly id: IdOrder;
  readonly product: IProduct;
  readonly status: StatusOrder;
}

export declare type PaginationMeta = {
  readonly currentPage: number;
  readonly itemCount: number;
  readonly itemsPerPage: number;
  readonly totalItems: number;
  readonly totalPages: number;
};

/* Paginated */
export declare interface IPaginatedProducts {
  readonly items: IProduct[];
  readonly meta: PaginationMeta;
}

export declare type IPaginatedOrders = {
  readonly items: IOrder[];
  readonly meta: PaginationMeta;
};

/* Response */
export declare interface IResponseAuth {
  readonly accessToken: AccessToken;
  readonly expiresIn: string; // TODO: exact
}

/* PAYLOADS */
export declare type PayloadMyOrders = {
  readonly productId: string;
};

export declare interface IPayloadRegister {
  readonly email: string | null;
  readonly name: string | null;
  readonly password: string | null;
}

export declare type IPayloadLogin = Omit<IPayloadRegister, `name`>;
