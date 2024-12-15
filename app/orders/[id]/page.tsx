import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";

export default async function Order({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await fetch(`http://localhost:8080/api/orders/${id}`);
  const order = await data.json();

  return (
    <Card shadow="sm">
      <CardHeader className="flex gap-2">
        <Button
          as="a"
          color="primary"
          href="/orders"
          startContent={<FaArrowLeft />}
        >
          Retour
        </Button>
        <h2 className="text-lg font-semibold">Commande n°{order.id}</h2>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="flex gap-1">
          <p>De :</p>
          <a className="underline" href={`/customers/${order.customer.id}`}>
            {order.customer.name}
          </a>
        </div>
        <div className="flex gap-1">
          <p>Produit :</p>
          <a className="underline" href={`/products/${order.product.id}`}>
            {order.product.name}
          </a>
        </div>
        <p>Status : {order.status}</p>
        <p>
          Date de commande : {new Date(order.orderDate).toLocaleDateString()}
        </p>
        <p>
          Date de livraison :{" "}
          {new Date(order.deliveryDate).toLocaleDateString()}
        </p>
        <p>Prix total : {order.price}€</p>
        <p>Quantité : {order.quantity}m³</p>
      </CardBody>
    </Card>
  );
}
