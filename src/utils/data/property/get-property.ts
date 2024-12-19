"server-only";

import prisma from "@/lib/db";

export const getProperty = async (propertyId: string) => {
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
};
