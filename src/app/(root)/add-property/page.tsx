"use client";

import { createProperty } from "@/actions/actions";
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
import { State } from "@/types/types";
import { useEffect, useRef } from "react";
import { useActionState } from "react";
import { toast } from "sonner";

export default function Page() {
  const initialState: State = {
    status: undefined,
    message: "",
  };
  const [state, formAction] = useActionState(createProperty, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.status === "success") {
      toast.success(state.message);
      formRef.current?.reset();
    } else if (state?.status === "error") {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <div className="container mx-auto my-10 px-2">
      <form ref={formRef} action={formAction}>
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
              titleError={state?.erros?.["title"]?.[0] as string}
              addressError={state?.erros?.["address"]?.[0] as string}
            />
            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-3 mt-3">
              <PropertyTypeSelector
                error={state?.erros?.["propertyType"]?.[0] as string}
              />
              <TransactionTypeSelector
                error={state?.erros?.["transactionType"]?.[0] as string}
              />
            </div>
            <PropertyDetailsField
              bedroomsNumberError={
                state?.erros?.["bedroomsNumber"]?.[0] as string
              }
              bathroomsNumberError={
                state?.erros?.["bathroomsNumber"]?.[0] as string
              }
              squareFootageError={
                state?.erros?.["squareFootage"]?.[0] as string
              }
            />
            <CitySelector error={state?.erros?.["city"]?.[0] as string} />
            <PropertyDescriptionAndPriceAndPhoneNumberFiled
              descriptionError={state?.erros?.["description"]?.[0] as string}
              priceError={state?.erros?.["price"]?.[0] as string}
              phoneNumberError={state?.erros?.["phoneNumber"]?.[0] as string}
            />
            <PropertyImagesUploader
              error={state?.erros?.["images"]?.[0] as string}
            />
          </CardContent>
          <CardFooter className="flex justify-end">
            <SubmitButton label="Create a property" />
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
