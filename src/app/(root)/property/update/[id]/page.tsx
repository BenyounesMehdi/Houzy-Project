import PropertyForm from "@/components/property/PropertyForm";
import { getProperty } from "@/utils/data/property/get-property";
import { Property } from "@/utils/types/types";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const data = await getProperty(id);
  const property = data as Property;
  return (
    <PropertyForm
      property={property}
      submitButtonLabel="Update property"
      actionName="update"
    />
  );
}
