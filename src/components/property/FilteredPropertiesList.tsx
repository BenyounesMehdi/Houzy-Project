import { useFilterdProperties } from "@/utils/hooks/useFilteredProperties";
import LoadingSpinner from "../shared/LoadingSpinner";
import { toast } from "sonner";
import { Property } from "@/utils/types/types";
import NoData from "../shared/NoData";
import PropertyCard from "./PropertyCard";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

type FilteredPropertiesListProps = {
  transactionType: string;
  propertyType: string;
  city: string;
};

export default function FilteredPropertiesList({
  transactionType,
  propertyType,
  city,
}: FilteredPropertiesListProps) {
  const { data, status, error, fetchNextPage, isFetchingNextPage } =
    useFilterdProperties(transactionType, propertyType, city);

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [fetchNextPage, inView]);

  if (status === "pending") {
    return (
      <div className="flex flex-col justify-center items-center h-[calc(100vh-70px)]">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) toast.error("Failed to get the data, try again.");

  const properties = data?.pages.flat() as Property[];

  if (properties.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-[calc(100vh-70px)]">
        <NoData title="There are no properties for rent" />
      </div>
    );
  }
  return (
    <div>
      <div className="container mx-auto my-5 p-5">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {properties.map((property) => {
            return <PropertyCard key={property.id} property={property} />;
          })}
        </div>
        <div ref={ref} className="w-full flex justify-center items-center mt-5">
          {isFetchingNextPage && <LoadingSpinner />}
        </div>
      </div>
    </div>
  );
}
