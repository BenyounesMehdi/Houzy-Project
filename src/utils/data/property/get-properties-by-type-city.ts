"use server";

import prisma from "@/lib/db";
import { Conditions } from "@/utils/types/types";

export const getPropertiesByTypeAndCity = async (
  transactionType: string,
  propertyType: string,
  city: string
) => {
  city = city === "" ? "all" : city;
  propertyType = propertyType === "" ? "all" : propertyType;

  const conditions: Conditions = {
    transactionType: transactionType,
  };

  if (city !== "all") {
    conditions.city = city;
  }

  if (propertyType !== "all") {
    conditions.propertyType = propertyType;
  }

  console.log(propertyType, transactionType, city);

  try {
    const data = await prisma.property.findMany({
      where: conditions,
    });

    return data;
  } catch (e: any) {
    throw new Error("Failed to get the properties", e);
  }
};
