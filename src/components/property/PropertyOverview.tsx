"use client";

import { useState } from "react";
import PropertyImagesCarousel from "./PropertyImagesCarousel";
import { Bath, Bed, MapPin, Pencil, Phone, Square } from "lucide-react";
import Link from "next/link";
import { Property } from "@/utils/types/types";
import { useAuth } from "@clerk/nextjs";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import AlertDialogCard from "../shared/AlertDialogCard";

type PropertyOverviewProps = {
  property: Property;
};

export default function PropertyOverview({ property }: PropertyOverviewProps) {
  const { userId } = useAuth();
  const [showFullDescription, setShowFullDescription] = useState<boolean>(true);
  const router = useRouter();

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const handleDeleteComplete = (status: string, message: string) => {
    if (status === "error") {
      toast.error(message);
    } else {
      toast.success(message);
      setTimeout(() => {
        router.push("/my-properties");
      }, 1000);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center gap-1">
        <p className="text-xl sm:text-3xl font-semibold tracking-tighter">
          {property.title}
        </p>
        {userId === property.userId && (
          <div className="flex justify-center items-center gap-1 ">
            <Link href={`update/${property.id}`}>
              <div className="bg-primary/20 p-1.5 mb-1.5 rounded-md ring-1 ring-primary/55 cursor-pointer">
                <Pencil className="text-primary" />
              </div>
            </Link>
            <AlertDialogCard
              propertyId={property.id as string}
              onDeleteComplete={handleDeleteComplete}
            />
          </div>
        )}
      </div>
      <div className="mt-5 flex flex-col md:flex-row justify-center items-center gap-3">
        <div className="w-full md:w-1/2">
          <PropertyImagesCarousel images={property.images} />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-2 lg:gap-4 xl:gap-6">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-1 font-semibold text-sm lg:text-lg">
              <div>
                <MapPin />
              </div>
              <div>
                <p>{property.address}</p>
                <p className="capitalize">{property.city}</p>
              </div>
            </div>
            <div className="w-fit bg-primary/10 text-primary py-1 px-2 ring-2 ring-inset ring-primary/10 font-semibold rounded-md">
              {property.transactionType}
            </div>
          </div>
          <div className="text-muted-foreground font-semibold text-sm lg:text-base">
            {!showFullDescription
              ? property.description
              : `${property.description.slice(0, 200)}`}
            {!showFullDescription && property.description.length > 200 && (
              <button
                className="text-primary underline ml-2 mb-2 cursor-pointer"
                onClick={toggleDescription}
              >
                show less
              </button>
            )}
            {showFullDescription && property.description.length > 200 && (
              <button
                className="text-primary underline ml-2 mb-2 cursor-pointer"
                onClick={toggleDescription}
              >
                Read more
              </button>
            )}
          </div>

          {showFullDescription && (
            <>
              <div className="flex justify-evenly items-center">
                <div className="flex justify-center items-center gap-2">
                  <p className="font-semibold text-base lg:text-2xl">
                    {property.bedroomsNumber}
                  </p>
                  <Bed />
                </div>
                <div className="flex justify-center items-center gap-2">
                  <p className="font-semibold text-base lg:text-2xl">
                    {property.bathroomsNumber}
                  </p>
                  <Bath />
                </div>
                <div className="flex justify-center items-center gap-2">
                  <p className="font-semibold text-base lg:text-2xl">
                    {property.squareFootage}
                  </p>
                  <Square /> sqft
                </div>
              </div>
              <div className="flex justify-evenly items-center ">
                <div className="text-base lg:text-3xl font-semibold">
                  ${property.price}
                </div>
                <div className="flex justify-center items-center gap-1">
                  <span>
                    <Phone className="size-4 lg:size-7" />
                  </span>
                  <p className="text-base lg:text-3xl font-semibold">
                    {property.phoneNumber}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
