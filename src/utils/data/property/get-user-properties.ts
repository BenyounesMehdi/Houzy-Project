"server-only";

import prisma from "@/lib/db";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { useId } from "react";

export const getUserProperties = async (userID: string) => {
  const { userId } = await auth();
  const response = await (await clerkClient()).users.getUser(userId as string);

  if (!response.id) {
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
};
