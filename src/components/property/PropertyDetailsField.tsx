import ErrorMessage from "../shared/ErrorMessage";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type PropertyDetailsFieldProps = {
  bedroomsNumberError?: string;
  bathroomsNumberError?: string;
  squareFootageError?: string;
};

export default function PropertyDetailsField({
  bedroomsNumberError,
  bathroomsNumberError,
  squareFootageError,
}: PropertyDetailsFieldProps) {
  return (
    <div className="flex justify-center items-center flex-wrap lg:flex-nowrap gap-2 w-full mt-3">
      <div className="w-full flex flex-col gap-2">
        <Label className="text-lg">Number of bedrooms</Label>
        <Input type="number" name="bedroomsNumber" min={1} />
        {bedroomsNumberError && <ErrorMessage message={bedroomsNumberError} />}
      </div>
      <div className="w-full flex flex-col gap-2">
        <Label className="text-lg">Number of bathrooms</Label>
        <Input type="number" name="bathroomsNumber" min={1} />
        {bathroomsNumberError && (
          <ErrorMessage message={bathroomsNumberError} />
        )}
      </div>
      <div className="w-full flex flex-col gap-2">
        <Label className="text-lg">Square footage</Label>
        <Input type="number" name="squareFootage" min={1} />
        {squareFootageError && <ErrorMessage message={squareFootageError} />}
      </div>
    </div>
  );
}
