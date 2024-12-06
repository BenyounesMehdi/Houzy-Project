"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";
import { State } from "../types/types";
import { revalidatePath } from "next/cache";
import { propertySchema } from "../zod/zodSchema";
import prisma from "@/lib/db";

export const updateProperty = async (
  prevState: any,
  formData: FormData
): Promise<State | null> => {
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
    bedroomsNumber: Number(formData.get("bedroomsNumber")),
    bathroomsNumber: Number(formData.get("bathroomsNumber")),
    squareFootage: Number(formData.get("squareFootage")),
    city: formData.get("city"),
    description: formData.get("description"),
    price: Number(formData.get("price")),
    phoneNumber: formData.get("phoneNumber"),
    images: parsedImages,
  });

  const propertyId = formData.get("propertyId") as string;

  if (!validatedForm.success) {
    const state: State = {
      status: "error",
      errors: validatedForm.error.flatten().fieldErrors,
      message: "Oops, you missed some fields",
    };
    return state;
  }

  const updatePayload = {
    title: validatedForm.data.title,
    address: validatedForm.data.address,
    propertyType: validatedForm.data.propertyType,
    transactionType: validatedForm.data.transactionType,
    bedroomsNumber: validatedForm.data.bedroomsNumber,
    bathroomsNumber: validatedForm.data.bathroomsNumber,
    squareFootage: validatedForm.data.squareFootage,
    city: validatedForm.data.city,
    description: validatedForm.data.description,
    price: validatedForm.data.price,
    phoneNumber: validatedForm.data.phoneNumber,
    images: validatedForm.data.images,
  };

  try {
    await prisma.property.update({
      where: {
        id: propertyId,
      },
      data: updatePayload,
    });

    const state: State = {
      status: "success",
      message: "Your property has been updated successfully",
    };

    revalidatePath("/my-properties");
    return state;
  } catch (e) {
    const state: State = {
      status: "error",
      message: "Failed to update your property, please try again",
    };
    return state;
  }
};

// export const updateProperty = async (
//   prevState: unknown,
//   formData: FormData
// ): Promise<State> => {
//   const validatedForm = propertySchema.safeParse({
//     title: formData.get("title"),
//     address: formData.get("address"),
//     propertyType: formData.get("propertyType"),
//     transactionType: formData.get("transactionType"),
//     bedroomsNumber: Number(formData.get("bedroomsNumber")),
//     bathroomsNumber: Number(formData.get("bathroomsNumber")),
//     squareFootage: Number(formData.get("squareFootage")),
//     city: formData.get("city"),
//     description: formData.get("description"),
//     price: Number(formData.get("price")),
//     phoneNumber: formData.get("phoneNumber"),
//     images: JSON.parse(formData.get("images") as string),
//   });

//   const propertyId = formData.get("propertyId") as string;

//   if (!validatedForm.success) {
//     const state: State = {
//       status: "error",
//       errors: validatedForm.error.flatten().fieldErrors,
//       message: "Oops, you missed some fields",
//     };
//     return state;
//   }

//   try {
//     await prisma.property.update({
//       where: {
//         id: propertyId,
//       },
//       data: {
//         title: validatedForm.data.title,
//         address: validatedForm.data.address,
//         propertyType: validatedForm.data.propertyType,
//         transactionType: validatedForm.data.transactionType,
//         bedroomsNumber: Number(validatedForm.data.bedroomsNumber),
//         bathroomsNumber: Number(validatedForm.data.bathroomsNumber),
//         squareFootage: Number(validatedForm.data.squareFootage),
//         city: validatedForm.data.city,
//         description: validatedForm.data.description,
//         price: validatedForm.data.price,
//         phoneNumber: validatedForm.data.phoneNumber,
//         images: validatedForm.data.images,
//       },
//     });
//     const state: State = {
//       status: "success",
//       message: "The property has been updated successfully.",
//     };
//     revalidatePath("/my-properties");
//     return state;
//   } catch (e) {
//     const state: State = {
//       status: "error",
//       message: "Failed to update the property, Please try again.",
//     };
//     return state;
//   }
// };
