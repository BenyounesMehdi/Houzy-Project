import { z } from "zod";

export const propertySchema = z.object({
  id: z.string().optional(),
  title: z
    .string()
    .trim()
    .min(10, { message: "Title must at least 10 chracters long" }),
  address: z
    .string()
    .trim()
    .min(10, { message: "Address must be at least 10 characters long" }),
  propertyType: z
    .string()
    .min(1, { message: "Please, select a property type" }),
  transactionType: z
    .string()
    .min(1, { message: "Please, select a transaction type" }),
  bedroomsNumber: z
    .number()
    .min(1, { message: "Please, set the number of the bedrooms" }),
  bathroomsNumber: z
    .number()
    .min(1, { message: "Please, set the number of the bathrooms" }),
  squareFootage: z
    .number()
    .min(1, { message: "Please, set the square footage" }),
  city: z.string().min(1, { message: "Please, select the city" }),
  description: z
    .string()
    .trim()
    .min(10, { message: "Please, add a small description" }),
  price: z.number().min(1, { message: "Please, set the price" }),
  phoneNumber: z
    .string()
    .length(10, { message: "Phone number must be 10 digits long" })
    .regex(/^(05|06|07)\d{8}$/, {
      message:
        "Phone number must start with 05, 06, or 07 and be followed by 8 digits",
    }),
  images: z.array(z.string()).min(1, "Please upload some images"),
});
