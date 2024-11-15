import Hero from "@/components/hero/HeroSection";
import { auth } from "@clerk/nextjs/server";

export default async function Page() {
  const userId = await auth();
  console.log("user id: ", userId);
  return (
    <>
      <Hero />
    </>
  );
}
