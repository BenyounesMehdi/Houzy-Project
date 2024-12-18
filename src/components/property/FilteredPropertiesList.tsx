import { useFilterdProperties } from "@/utils/hooks/useFilteredProperties";
import LoadingSpinner from "../shared/LoadingSpinner";
import { toast } from "sonner";
import { Property } from "@/utils/types/types";
import NoData from "../shared/NoData";
import PropertyCard from "./PropertyCard";

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
  const { data, isLoading, error } = useFilterdProperties(
    transactionType,
    propertyType,
    city
  );
  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-[calc(100vh-70px)]">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) toast.error("Failed to get the data, try again.");

  const properties = data as Property[];

  if (properties.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-[calc(100vh-70px)]">
        <NoData title="There are no properties for rent" />
      </div>
    );
  }
  return (
    <div className="container mx-auto my-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {properties.map((property) => {
        return <PropertyCard key={property.id} property={property} />;
      })}
    </div>
  );
}
