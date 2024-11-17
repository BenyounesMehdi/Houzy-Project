"use client";

import CitySelector from "@/components/property/CitySelector";
import PropertyDescriptionAndPriceAndPhoneNumberFiled from "@/components/property/PropertyDescriptionAndPriceAndPhoneNumberFiled";
import PropertyDetailsField from "@/components/property/PropertyDetailsField";
import PropertyImagesUploader from "@/components/property/PropertyImagesUploader";
import PropertyTitleAndAddresFiled from "@/components/property/PropertyTitleAndAddressField";
import PropertyTypeSelector from "@/components/property/PropertyTypeSelector";
import TransactionTypeSelector from "@/components/property/TransactionTypeSelector";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <div className="container mx-auto my-10 px-2">
      <form action="">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">
              Sell or rent you property with ease
            </CardTitle>
            <CardDescription>
              Please decribe your property here in detail, so it can be sold.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <PropertyTitleAndAddresFiled />
            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-3 mt-3">
              <PropertyTypeSelector />
              <TransactionTypeSelector />
            </div>
            <PropertyDetailsField />
            <CitySelector />
            <PropertyDescriptionAndPriceAndPhoneNumberFiled />
            <PropertyImagesUploader />
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
