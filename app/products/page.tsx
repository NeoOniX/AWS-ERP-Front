import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { FaLink } from "react-icons/fa6";

import { Product } from "@/types";

export default async function Products() {
  const data = await fetch("http://localhost:8080/api/products");
  const products = await data.json();

  return (
    <div>
      <h1 className="text-xl font-semibold underline mb-4">Produits :</h1>
      <ul className="flex flex-col gap-4">
        {products.map((product: Product) => (
          <Card key={product.id} shadow="sm">
            <CardHeader>
              <h2 className="text-lg font-semibold">{product.name}</h2>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>Description : {product.description}</p>
              <p>Prix par m³ : {product.pricePerCubicMeter}€</p>
            </CardBody>
            <Divider />
            <CardFooter>
              <Button
                as="a"
                color="primary"
                href={`/products/${product.id}`}
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
