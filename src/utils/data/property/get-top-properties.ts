"server only";

import prisma from "@/lib/db";
import { auth, clerkClient } from "@clerk/nextjs/server";

export const getTopProperies = async (propertyType: string) => {
  const { userId } = await auth();
  const response = await (await clerkClient()).users.getUser(userId as string);

  if (!response.id) {
    return null;
  }
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
};
