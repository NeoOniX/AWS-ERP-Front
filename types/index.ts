import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Product = {
  id: number;
  name: string;
  description: string;
  pricePerCubicMeter: number;
  orders: Order[];
};

export type Order = {
  id: number;
  orderDate: string;
  deliveryDate: string;
  status: "PENDING" | "DELIVERED" | "CANCELED";
  quantity: number;
  price: number;
  customer: Customer;
  product: Product;
};

export type Customer = {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  orders: Order[];
};
