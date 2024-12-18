import Hero from "@/components/hero/HeroSection";
import WhyChooseHouzy from "@/components/landing/WhyChooseHouzySection";
import FeaturedProperties from "@/components/property/FeaturedProperties";

export default async function Page() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <WhyChooseHouzy />
    </>
  );
}
