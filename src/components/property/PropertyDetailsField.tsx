import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function PropertyDetailsField() {
  return (
    <div className="flex justify-center items-center flex-wrap lg:flex-nowrap gap-2 w-full mt-3">
      <div className="w-full flex flex-col gap-2">
        <Label className="text-lg">Number of bedrooms</Label>
        <Input type="number" name="bedroomsNumber" min={1} />
      </div>
      <div className="w-full flex flex-col gap-2">
        <Label className="text-lg">Number of bathrooms</Label>
        <Input type="number" name="bathroomsNumber" min={1} />
      </div>
      <div className="w-full flex flex-col gap-2">
        <Label className="text-lg">Square footage</Label>
        <Input type="number" name="squareFootage" min={1} />
      </div>
    </div>
  );
}
