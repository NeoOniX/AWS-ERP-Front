import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { FaLink } from "react-icons/fa6";

import { Order } from "@/types";

export default async function Orders() {
  const data = await fetch("http://localhost:8080/api/orders");
  const orders = await data.json();

  return (
    <div>
      <h1 className="text-xl font-semibold underline mb-4">Commandes :</h1>
      <ul className="flex flex-col gap-4">
        {orders.map((order: Order) => (
          <Card key={order.id} shadow="sm">
            <CardHeader>
              <h2 className="text-lg font-semibold">Commande n°{order.id}</h2>
            </CardHeader>
            <Divider />
            <CardBody>
              <div className="flex gap-1">
                <p>De :</p>
                <a
                  className="underline"
                  href={`/customers/${order.customer.id}`}
                >
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
                Date de commande :{" "}
                {new Date(order.orderDate).toLocaleDateString()}
              </p>
              <p>
                Date de livraison :{" "}
                {new Date(order.deliveryDate).toLocaleDateString()}
              </p>
              <p>Prix total : {order.price}€</p>
              <p>Quantité : {order.quantity}m³</p>
            </CardBody>
            <Divider />
            <CardFooter>
              <Button
                as="a"
                color="primary"
                href={`/orders/${order.id}`}
                startContent={<FaLink size={16} stroke="white" />}
              >
                Accéder aux détails
              </Button>
            </CardFooter>
          </Card>
        ))}
      </ul>
    </div>
  );
}
