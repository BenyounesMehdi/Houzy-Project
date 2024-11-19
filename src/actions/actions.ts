"use server";

import { State } from "@/types/types";
import { propertySchema } from "@/zod/zodSchema";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function createProperty(prevState: any, formData: FormData) {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
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
    images: formData.get("images"),
  });

  console.log("the form", formData.get("images"));

  if (!validatedForm.success) {
    const state: State = {
      status: "error",
      erros: validatedForm.error.flatten().fieldErrors,
      message: "Oops, you missed some fields",
    };
    return state;
  }
}
