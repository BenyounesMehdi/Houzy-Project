import { useQuery } from "@tanstack/react-query";
import { getPropertiesByTypeAndCity } from "../data/property/get-properties-by-type-city";

export const useFilterdProperties = (
  transactionType: string,
  propertyType: string,
  city: string
) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["properties", city, propertyType],
    queryFn: () =>
      getPropertiesByTypeAndCity(transactionType, propertyType, city),
  });

  return { data, isLoading, error };
};
