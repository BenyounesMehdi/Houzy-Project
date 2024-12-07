"use client";

import SearchSection from "@/components/property/SearchSection";
import { useState } from "react";

export default function Page() {
  const [city, setCity] = useState("all");
  const [propertyType, setPropertyType] = useState("all");

  return (
    <>
      <SearchSection setCity={setCity} setPropertyType={setPropertyType} />
    </>
  );
}
