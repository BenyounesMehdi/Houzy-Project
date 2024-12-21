"server only";

import prisma from "@/lib/db";
import { unstable_cache as nextCache } from "next/cache";

export const getTopProperies = nextCache(
  async (propertyType: string) => {
    try {
      const data = await prisma.property.findMany({
        select: {
          id: true,
          title: true,
          propertyType: true,
          transactionType: true,
          price: true,
          images: true,
        },
        take: 3,
        where: {
          transactionType: propertyType,
        },
      });
      return data;
    } catch {
      throw new Error("Failed to get the properties.");
    }
  },
  ["top-properties"],
  { revalidate: 86400, tags: ["top-properties"] }
);
