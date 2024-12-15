import React from "react";

import { Order } from "@/types";

export default async function Orders() {
  const data = await fetch("http://localhost:8080/api/orders");
  const orders = await data.json();

  return (
    <div>
      <h1>Commandes</h1>
      <ul>
        {orders.map((order: Order) => (
          <li key={order.id}>{order.customer.name}</li>
        ))}
      </ul>
    </div>
  );
}
