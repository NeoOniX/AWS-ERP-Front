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
  const data = await fetch(`http://localhost:8080/api/customers/${id}`);
  const customer = await data.json();

  return (
    <Card shadow="sm">
      <CardHeader className="flex gap-2">
        <Button
          as="a"
          color="primary"
          href="/customers"
          startContent={<FaArrowLeft />}
        >
          Retour
        </Button>
        <h2 className="text-lg font-semibold">Client n°{customer.id}</h2>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>Nom : {customer.name}</p>
        <p>Mail : {customer.email}</p>
        <p>Téléphone : {customer.phoneNumber}</p>
        <p>Adresse : {customer.address}</p>
      </CardBody>
    </Card>
  );
}
