import Hero from "@/components/hero/HeroSection";
import { Footer } from "@/components/landing/Footer";
import WhyChooseHouzy from "@/components/landing/WhyChooseHouzySection";
import FeaturedProperties from "@/components/property/FeaturedProperties";

export default async function Page() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <WhyChooseHouzy />
      <Footer />
    </>
  );
}
