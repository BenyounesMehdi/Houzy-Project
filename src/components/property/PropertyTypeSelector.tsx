import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function PropertyTypeSelector() {
  return (
    <div className="w-full md:w-1/2 flex flex-col gap-2">
      <Label className="text-lg">Property type</Label>
      <Select name="propertyType">
        <SelectTrigger>
          <SelectValue placeholder="Select a property type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="house">House</SelectItem>
            <SelectItem value="apartment">Apartment</SelectItem>
            <SelectItem value="villa">Villa</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
