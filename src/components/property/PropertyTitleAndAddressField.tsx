import ErrorMessage from "../shared/ErrorMessage";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type PropertyTitleAndAddresFieldProps = {
  titleError?: string;
  addressError?: string;
  title?: string;
  address?: string;
};

export default function PropertyTitleAndAddresFiled({
  titleError,
  addressError,
  title,
  address,
}: PropertyTitleAndAddresFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label className="text-lg">Title</Label>
      <Input
        type="text"
        name="title"
        placeholder="Enter a descriptive title for your property"
        defaultValue={title}
      />
      {titleError && <ErrorMessage message={titleError} />}
      <Label className="text-lg">Full address</Label>
      <Input
        type="text"
        name="address"
        placeholder="Enter the address of your property"
        defaultValue={address}
      />
      {addressError && <ErrorMessage message={addressError} />}
    </div>
  );
}
