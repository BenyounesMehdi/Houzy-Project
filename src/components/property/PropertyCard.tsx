import { Property } from "@/utils/types/types";
import { Button } from "../ui/button";
import Link from "next/link";
import PropertyImagesCarousel from "./PropertyImagesCarousel";

type propertyCardProps = {
  property: Property;
};

export default function PropertyCard({ property }: propertyCardProps) {
  return (
    <div className="mt-5 w-full">
      <PropertyImagesCarousel images={property.images} />
      <div className="flex items-center justify-between mt-2">
        <p className="font-semibold text-lg line-clamp-1">{property.title}</p>
        <div className="bg-primary/10 text-primary py-1 px-2 ring-2 ring-inset ring-primary/10 font-semibold rounded-md">
          {property.transactionType}
        </div>
      </div>
      <p className="text-muted-foreground mt-1 font-semibold text-base">
        ${property.price}
      </p>
      <Button className="w-full mt-2" asChild>
        <Link href={`/property/${property.id}`}>Learn more</Link>
      </Button>
    </div>
  );
}
