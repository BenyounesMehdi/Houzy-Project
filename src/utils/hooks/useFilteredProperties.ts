import { useInfiniteQuery } from "@tanstack/react-query";
import { getPropertiesByTypeAndCity } from "../data/property/get-properties-by-type-city";

const PAGE_SIZE = 8;

export const useFilterdProperties = (
  transactionType: string,
  propertyType: string,
  city: string
) => {
  const { data, status, error, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["properties", transactionType, propertyType, city],
      queryFn: ({ pageParam = 0 }) =>
        getPropertiesByTypeAndCity(
          transactionType,
          propertyType,
          city,
          pageParam
        ),
      initialPageParam: 0,
      getNextPageParam: (lastPage, allPages) =>
        lastPage.length === PAGE_SIZE ? allPages.length : undefined,
    });

  return {
    data,
    status,
    error,
    fetchNextPage,
    isFetchingNextPage,
  };
};
