export declare interface IPayloadRegister {
  readonly email: string | null;
  readonly name: string | null;
  readonly password: string | null;
}

export declare type IPayloadLogin = Omit<IPayloadRegister, `name`>;

export declare interface IResponseAuth {
  readonly accessToken: string;
  readonly expiresIn: string; // TODO: exact
}

export declare type ProfileId = string;
export declare type ItemId = string;
export declare type ProductId = string;

export declare interface IProfile {
  readonly email: string;
  readonly id: ProfileId;
  readonly image: string;
  readonly name: string;
  readonly role: string; // TODO: exact
  readonly status: string; // TODO: exact
  readonly createdAt: string;
  readonly updatedAt: string;
}

export declare interface IItem {
  readonly categories: Categories;
  readonly condition: string;
  readonly createdAt: string;
  readonly description: string;
  readonly id: ItemId;
  readonly images: string[];
  readonly status: string; // TODO: exact
  readonly updatedAt: string;
  readonly seller: IProfile;
}

export declare type Category = {
  readonly createdAt: string;
  readonly description: string;
  readonly id: string;
  readonly updatedAt: string;
}

// Exact strings
export declare type ServerHealth = {
  readonly status: string;
}

export declare interface IProduct {
  readonly categories: Categories;
  readonly condition: string;
  readonly createdAt: string;
  readonly description: string;
  readonly id: ProductId;
  readonly images: string[];
  readonly price: number;
  readonly status: string;
  readonly title: string;
  readonly updatedAt: string;
}

export declare type Categories = Category[];

export declare type PaginationMeta = {
  readonly totalItems: number;
  readonly itemCount: number;
  readonly itemsPerPage: number;
  readonly totalPages: number;
  readonly currentPage: number;
}

export declare interface IPaginatedProducts {
  readonly items: IProduct[];
  readonly meta: PaginationMeta;
}

export declare type MyProducts = {
  readonly items: IItem[];
  readonly meta: PaginationMeta;
};

export declare type MyOrders = {
  readonly items: ProductId[];
  readonly meta: PaginationMeta;
};

export declare type MyOrdersPayload = {
  readonly productId: string;
};