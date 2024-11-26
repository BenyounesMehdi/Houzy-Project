import PropertyOverview from "@/components/property/PropertyOverview";
import { getProperty } from "@/utils/data/property/get-property";
import { Property } from "@/utils/types/types";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const data = await getProperty(id);
  const property = data as Property;

  if (!property) notFound();

  return (
    <div className="container mx-auto my-10 px-5">
      <PropertyOverview property={property} />
    </div>
  );
}
