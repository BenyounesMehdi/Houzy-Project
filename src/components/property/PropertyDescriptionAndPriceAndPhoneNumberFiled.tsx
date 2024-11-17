import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export default function PropertyDescriptionAndPriceAndPhoneNumberFiled() {
  return (
    <div className="flex flex-col gap-2 mt-3">
      <Label className="text-lg">Small description</Label>
      <Textarea
        name="description"
        placeholder="Please, describe your property shortly here..."
      />
      <Label className="text-lg">Price</Label>
      <Input type="number" name="price" placeholder="$" />
      <Label className="text-lg">Phone number</Label>
      <Input type="number" name="phoneNumber" min={1} />
    </div>
  );
}
