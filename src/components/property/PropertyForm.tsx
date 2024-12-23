"use client";

import CitySelector from "@/components/property/CitySelector";
import PropertyDescriptionAndPriceAndPhoneNumberFiled from "@/components/property/PropertyDescriptionAndPriceAndPhoneNumberFiled";
import PropertyDetailsField from "@/components/property/PropertyDetailsField";
import PropertyImagesUploader from "@/components/property/PropertyImagesUploader";
import PropertyTitleAndAddresFiled from "@/components/property/PropertyTitleAndAddressField";
import PropertyTypeSelector from "@/components/property/PropertyTypeSelector";
import TransactionTypeSelector from "@/components/property/TransactionTypeSelector";
import SubmitButton from "@/components/shared/SubmitButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Property, State } from "@/utils/types/types";
import { createProperty } from "@/utils/actions/create-property";
import { useEffect, useRef } from "react";
import { useActionState } from "react";
import { toast } from "sonner";
import { updateProperty } from "@/utils/actions/update-property";
import { useRouter } from "next/navigation";

type PropertyFormProps = {
  property?: Property;
  submitButtonLabel: string;
  actionName: "create" | "update";
};
export default function PropertyForm({
  property,
  submitButtonLabel,
  actionName,
}: PropertyFormProps) {
  const initialState: State = {
    status: undefined,
    message: "",
  };

  const action = actionName === "create" ? createProperty : updateProperty;
  const router = useRouter();

  const [state, formAction] = useActionState(action, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.status === "success") {
      toast.success(state.message);
      router.push(`/property/${property?.id}`);
    } else if (state?.status === "error") {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <div className="container mx-auto my-10 px-2">
      <form ref={formRef} action={formAction}>
        <input type="hidden" name="propertyId" value={property?.id} />
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
            <PropertyTitleAndAddresFiled
              titleError={state?.errors?.["title"]?.[0] as string}
              addressError={state?.errors?.["address"]?.[0] as string}
              title={property?.title}
              address={property?.address}
            />
            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-3 mt-3">
              <PropertyTypeSelector
                error={state?.errors?.["propertyType"]?.[0] as string}
                propertyType={property?.propertyType}
              />
              <TransactionTypeSelector
                error={state?.errors?.["transactionType"]?.[0] as string}
                transactionType={property?.transactionType}
              />
            </div>
            <PropertyDetailsField
              bedroomsNumberError={
                state?.errors?.["bedroomsNumber"]?.[0] as string
              }
              bathroomsNumberError={
                state?.errors?.["bathroomsNumber"]?.[0] as string
              }
              squareFootageError={
                state?.errors?.["squareFootage"]?.[0] as string
              }
              bedroomsNumber={property?.bedroomsNumber}
              bathroomsNumber={property?.bathroomsNumber}
              squareFootage={property?.squareFootage}
            />
            <CitySelector
              error={state?.errors?.["city"]?.[0] as string}
              city={property?.city}
            />
            <PropertyDescriptionAndPriceAndPhoneNumberFiled
              descriptionError={state?.errors?.["description"]?.[0] as string}
              priceError={state?.errors?.["price"]?.[0] as string}
              phoneNumberError={state?.errors?.["phoneNumber"]?.[0] as string}
              description={property?.description}
              price={property?.price}
              phoneNumber={property?.phoneNumber}
            />
            <PropertyImagesUploader
              error={state?.errors?.["images"]?.[0] as string}
              images={property?.images}
            />
          </CardContent>
          <CardFooter className="flex justify-end">
            <SubmitButton label={submitButtonLabel} />
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
