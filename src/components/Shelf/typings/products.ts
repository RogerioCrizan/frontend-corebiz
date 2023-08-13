export interface IProduct {
  image: string;
  title: string;
  rating: IRating;
  price: number;
  id: number;
  key: React.Key;
}

interface IRating {
  rate: number;
}
