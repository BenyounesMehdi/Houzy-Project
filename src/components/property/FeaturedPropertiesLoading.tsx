import SekeletonPropertyCard from "./SkeletonPropertyCard";

export default function FeaturedPropertiesLoading() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      <SekeletonPropertyCard />
      <SekeletonPropertyCard />
      <SekeletonPropertyCard />
    </div>
  );
}
