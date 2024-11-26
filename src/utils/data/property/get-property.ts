import prisma from "@/lib/db";
import { auth, clerkClient } from "@clerk/nextjs/server";

export const getProperty = async (propertyId: string) => {
  const { userId } = await auth();
  const response = await (await clerkClient()).users.getUser(userId as string);

  if (!response.id) {
    return null;
  }

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
