import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { FaLink } from "react-icons/fa6";

import { Customer } from "@/types";

export default async function Orders() {
  const data = await fetch("http://localhost:8080/api/customers");
  const customers = await data.json();

  return (
    <div>
      <h1 className="text-xl font-semibold underline mb-4">Clients :</h1>
      <ul className="flex flex-col gap-4">
        {customers.map((customer: Customer) => (
          <Card key={customer.id} shadow="sm">
            <CardHeader>
              <h2 className="text-lg font-semibold">Client n°{customer.id}</h2>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>Nom : {customer.name}</p>
              <p>Mail : {customer.email}</p>
              <p>Téléphone : {customer.phoneNumber}</p>
              <p>Adresse : {customer.address}</p>
            </CardBody>
            <Divider />
            <CardFooter>
              <Button
                as="a"
                color="primary"
                href={`/customers/${customer.id}`}
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
