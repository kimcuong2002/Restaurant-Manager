export type ProducOdertType = {
  id: string | number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  totalPrice: number;
};

export type ProductType = {
  id: string | number;
  name: string;
  price: number;
  image: string;
};

export type iProduct = {
  quantity?: number;
  totalPrice?: number;
  id: string | number;
  image: string;
  name: string;
  price: number;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
