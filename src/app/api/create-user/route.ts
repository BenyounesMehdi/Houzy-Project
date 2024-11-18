import prisma from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { userId } = await auth();
  const user = await currentUser();

  if (!user || !userId) {
    throw new Error("Something went wrong.");
  }

  let userExist = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!userExist) {
    await prisma.user.create({
      data: {
        id: userId,
        email: user.emailAddresses[0].emailAddress ?? "",
        firstName: user.firstName ?? "",
        lastName: user.lastName ?? "",
        profileImageUrl:
          user.imageUrl ?? `https://avatar.vercel.sh/${user.firstName}`,
      },
    });
  }

  return NextResponse.redirect("http://localhost:3000");
}
