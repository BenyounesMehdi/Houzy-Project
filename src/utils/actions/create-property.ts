"use server";

import prisma from "@/lib/db";
import { State } from "@/utils/types/types";
import { propertySchema } from "@/utils/zod/zodSchema";
import { auth, clerkClient, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createProperty(
  prevState: any,
  formData: FormData
): Promise<State | null> {
  const { userId } = await auth();
  const response = await (await clerkClient()).users.getUser(userId as string);

  if (!response.id) {
    return null;
  }

  let parsedImages;
  const imagesData = formData.get("images");

  try {
    parsedImages = imagesData ? JSON.parse(imagesData as string) : [];
  } catch (error) {
    return {
      status: "error",
      message: "Invalid image format",
    };
  }

  const validatedForm = propertySchema.safeParse({
    title: formData.get("title"),
    address: formData.get("address"),
    propertyType: formData.get("propertyType"),
    transactionType: formData.get("transactionType"),
    bedroomsNumber: formData.get("bedroomsNumber"),
    bathroomsNumber: formData.get("bathroomsNumber"),
    squareFootage: formData.get("squareFootage"),
    city: formData.get("city"),
    description: formData.get("description"),
    price: Number(formData.get("price")),
    phoneNumber: formData.get("phoneNumber"),
    images: parsedImages,
  });

  if (!validatedForm.success) {
    const state: State = {
      status: "error",
      errors: validatedForm.error.flatten().fieldErrors,
      message: "Oops, you missed some fields",
    };
    return state;
  }

  try {
    await prisma.property.create({
      data: {
        title: validatedForm.data.title,
        address: validatedForm.data.address,
        propertyType: validatedForm.data.propertyType,
        transactionType: validatedForm.data.transactionType,
        bedroomsNumber: Number(validatedForm.data.bedroomsNumber),
        bathroomsNumber: Number(validatedForm.data.bathroomsNumber),
        squareFootage: Number(validatedForm.data.squareFootage),
        city: validatedForm.data.city,
        description: validatedForm.data.description,
        price: validatedForm.data.price,
        phoneNumber: validatedForm.data.phoneNumber,
        images: validatedForm.data.images,
        userId: userId,
      },
    });

    const state: State = {
      status: "success",
      message: "Your property has been created successfully",
    };

    revalidatePath("/my-properties");
    return state;
  } catch {
    const state: State = {
      status: "error",
      message: "Failed to create your property, please try again",
    };
    return state;
  }
}