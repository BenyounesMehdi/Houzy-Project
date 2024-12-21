"server-only";

import prisma from "@/lib/db";
import { unstable_cache as nextCache } from "next/cache";

export const getProperty = nextCache(
  async (propertyId: string) => {
    try {
      const data = await prisma.property.findUnique({
        where: {
          id: propertyId,
        },
        select: {
          id: true,
          title: true,
          address: true,
          propertyType: true,
          transactionType: true,
          bedroomsNumber: true,
          bathroomsNumber: true,
          squareFootage: true,
          city: true,
          description: true,
          price: true,
          phoneNumber: true,
          images: true,
          userId: true,
        },
      });
      return data;
    } catch (error) {
      throw new Error("Failed to get the property.");
    }
  },
  ["property"],
  { revalidate: 86400, tags: ["property"] }
);
