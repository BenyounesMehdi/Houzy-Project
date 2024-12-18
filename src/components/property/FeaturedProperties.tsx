import { Suspense } from "react";
import TopProperties from "./TopProperties";
import FeaturedPropertiesLoading from "./FeaturedPropertiesLoading";

export default function FeaturedProperties() {
  return (
    <div className="container mx-auto my-28 px-5 md:px-2">
      <p className="text-center font-bold text-4xl sm:text-5xl ">
        Featured properties
      </p>
      <Suspense fallback={<FeaturedPropertiesLoading />}>
        <TopProperties title="Propeties for rent" type="rent" link="/rent" />
      </Suspense>
      <Suspense fallback={<FeaturedPropertiesLoading />}>
        <TopProperties title="Propeties for sale" type="sell" link="/sell" />
      </Suspense>
    </div>
  );
}
