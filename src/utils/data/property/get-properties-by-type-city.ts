"use server";

import prisma from "@/lib/db";
import { Conditions } from "@/utils/types/types";
import { unstable_cache as nextCache } from "next/cache";

const PAGE_SIZE = 8;

export const getPropertiesByTypeAndCity = nextCache(
  async (
    transactionType: string,
    propertyType: string,
    city: string,
    pageParam: number
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

    try {
      const data = await prisma.property.findMany({
        where: conditions,
        take: PAGE_SIZE,
        skip: pageParam * PAGE_SIZE,
      });

      return data;
    } catch {
      throw new Error("Failed to get the properties");
    }
  },
  ["properties"],
  { revalidate: 86400, tags: ["properties"] }
);
