import { getTopProperies } from "@/utils/data/property/get-top-properties";
import { Property } from "@/utils/types/types";
import PropertyCard from "./PropertyCard";
import Link from "next/link";

type TopPropertiesProps = {
  title: string;
  type: string;
  link: string;
};

export default async function TopProperties({
  title,
  type,
  link,
}: TopPropertiesProps) {
  const data = await getTopProperies(type);
  const topProperties = data as Property[];
  return (
    <div>
      <div className="flex justify-between items-center mt-16">
        <p className="font-semibold text-lg sm:text-3xl">{title}</p>
        <Link
          href={link}
          className="text-primary text-sm sm:text-base font-semibold"
        >
          Discover more &#8594;
        </Link>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {topProperties.map((prop) => {
          return <PropertyCard key={prop.id} property={prop} />;
        })}
      </div>
    </div>
  );
}
