import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function PropertyTitleAndAddresFiled() {
  return (
    <div className="flex flex-col gap-2">
      <Label className="text-lg">Title</Label>
      <Input
        type="text"
        name="title"
        placeholder="Enter a descriptive title for your property"
      />
      <Label className="text-lg">Full address</Label>
      <Input
        type="text"
        name="address"
        placeholder="Enter the address of your property"
      />
    </div>
  );
}
