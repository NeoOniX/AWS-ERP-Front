import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";

export default async function Product({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await fetch(`http://localhost:8080/api/products/${id}`);
  const product = await data.json();

  return (
    <Card shadow="sm">
      <CardHeader className="flex gap-2">
        <Button
          as="a"
          color="primary"
          href="/products"
          startContent={<FaArrowLeft />}
        >
          Retour
        </Button>
        <h2 className="text-lg font-semibold">{product.name}</h2>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>Description : {product.description}</p>
        <p>Prix par m³ : {product.pricePerCubicMeter}€</p>
      </CardBody>
    </Card>
  );
}
