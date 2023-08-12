import React from "react";

export interface IUseMinicart {
  minicart: IMinicart;
  setMinicart: React.Dispatch<React.SetStateAction<IMinicart>>;
}

export interface IMinicart {
  productId: ProductMinicart[];
  quantity: number
}

interface ProductMinicart {
  id: number;
}
