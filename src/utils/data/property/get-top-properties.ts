"server only";

import prisma from "@/lib/db";

export const getTopProperies = async (propertyType: string) => {
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
