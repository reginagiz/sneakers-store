export type Sneakers = {
  [x: string]: any;
  sneakers: Sneaker[];
};

export type Sneaker = {
  [x: string]: any;
  id: number;
  title: string;
  price: number;
  gender: string;
  size: number[];
  brand: string;
  color: string;
  description: string;
  image: string;
  images: string[];
  0: any;
  quantity: number;
};
