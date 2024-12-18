import { Skeleton } from "../ui/skeleton";

export default function SekeletonPropertyCard() {
  return (
    <div className="space-y-2 my-5">
      <Skeleton className="h-52 w-full md:w-[350px] lg:w-[320px] xl:w-[370px]" />
      <Skeleton className="h-4 w-full md:w-[350px] lg:w-[320px] xl:w-[370px]" />
    </div>
  );
}
