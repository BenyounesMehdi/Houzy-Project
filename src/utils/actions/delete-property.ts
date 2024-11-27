"use server";

import prisma from "@/lib/db";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { State } from "../types/types";

export const deleteProperty = async (propertyId: string) => {
  const { userId } = await auth();
  const response = await (await clerkClient()).users.getUser(userId as string);

  if (!response.id) return null;

  try {
    await prisma.property.delete({
      where: {
        id: propertyId,
        userId: userId,
      },
    });
    revalidatePath("/my-properties");
    const state: State = {
      status: "success",
      message: "The property has been deleted successfully.",
    };
    return state;
  } catch (error) {
    const state: State = {
      status: "error",
      message: "Failed to delete the property.",
    };
    return state;
  }
};
