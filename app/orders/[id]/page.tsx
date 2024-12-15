import React from "react";

export default async function Order({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await fetch(`http://localhost:8080/api/orders/${id}`);
  const order = await data.json();
  return <div>{order.customer.name}</div>;
}
