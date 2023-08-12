export interface IProduct {
  image: string;
  title: string;
  rating: IRating;
  price: number;
  id: number;
}

interface IRating {
  rate: number;
}
