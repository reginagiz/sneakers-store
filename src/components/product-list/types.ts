export type Sneakers = {
  [x: string]: any; sneakers: Sneaker[] 
}

export type Sneaker = {
    id: number;
    title: string;
    price: string;
    gender: string;
    size: number[];
    brand: string;
    color: string;
    description: string;
    image: string;
    images: string[];
    0: any;
}