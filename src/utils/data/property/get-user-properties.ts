"server-only";

import prisma from "@/lib/db";
import { unstable_cache as nextCache } from "next/cache";

export const getUserProperties = nextCache(
  async (userID: string) => {
    if (!userID) {
      return null;
    }

    try {
      const data = await prisma.property.findMany({
        where: {
          userId: userID,
        },
        select: {
          id: true,
          title: true,
          propertyType: true,
          transactionType: true,
          price: true,
          description: true,
          images: true,
        },
      });
      return data;
    } catch (error) {
      throw new Error("Failed to get the properties.");
    }
  },
  ["user-properties"],
  { revalidate: 86400, tags: ["user-proeperties"] }
);
