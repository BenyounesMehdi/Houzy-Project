export type State = {
  status: "error" | "success" | undefined;
  errors?: {
    [key: string]: string[];
  };
  message?: string | null;
};

export type Property = {
  title: string;
  address: string;
  propertyType: string;
  transactionType: string;
  bedroomsNumber: number;
  bathroomsNumber: number;
  squareFootage: number;
  city: string;
  description: string;
  price: number;
  phoneNumber: string;
  images: string[];
  id?: string | undefined;
  userId?: string | undefined;
};

export type Conditions = {
  transactionType: string;
  propertyType?: string;
  city?: string;
};
