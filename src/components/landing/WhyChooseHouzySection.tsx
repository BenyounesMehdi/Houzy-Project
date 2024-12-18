import HouzyProperties from "./HouzyProperties";

export default function WhyChooseHouzy() {
  return (
    <div className="container mx-auto my-28 p-2">
      <p className="text-center font-bold text-4xl sm:text-5xl">
        Why Choose Houzy?
      </p>
      <p className="text-muted-foreground font-semibold text-sm sm:text-base text-center my-5">
        We provide a complete solution for all your real estate needs with
        powerful features that make finding or listing properties a breeze.
      </p>
      <HouzyProperties />
    </div>
  );
}
