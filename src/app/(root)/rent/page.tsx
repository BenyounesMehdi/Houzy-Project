"use client";

import FilteredPropertiesList from "@/components/property/FilteredPropertiesList";
import SearchSection from "@/components/property/SearchSection";
import { useState } from "react";

export default function Page() {
  const [city, setCity] = useState("all");
  const [propertyType, setPropertyType] = useState("all");

  return (
    <>
      <SearchSection setCity={setCity} setPropertyType={setPropertyType} />
      <FilteredPropertiesList
        transactionType="rent"
        propertyType={propertyType}
        city={city}
      />
    </>
  );
}
