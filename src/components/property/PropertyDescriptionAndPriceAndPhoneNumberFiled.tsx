import ErrorMessage from "../shared/ErrorMessage";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

type PropertyDescriptionAndPriceAndPhoneNumberFiledProps = {
  descriptionError?: string;
  priceError?: string;
  phoneNumberError?: string;
};

export default function PropertyDescriptionAndPriceAndPhoneNumberFiled({
  descriptionError,
  priceError,
  phoneNumberError,
}: PropertyDescriptionAndPriceAndPhoneNumberFiledProps) {
  return (
    <div className="flex flex-col gap-2 mt-3">
      <Label className="text-lg">Small description</Label>
      <Textarea
        name="description"
        placeholder="Please, describe your property shortly here..."
      />
      {descriptionError && <ErrorMessage message={descriptionError} />}
      <Label className="text-lg">Price</Label>
      <Input type="number" name="price" placeholder="$" />
      {priceError && <ErrorMessage message={priceError} />}
      <Label className="text-lg">Phone number</Label>
      <Input type="number" name="phoneNumber" min={1} />
      {phoneNumberError && <ErrorMessage message={phoneNumberError} />}
    </div>
  );
}
