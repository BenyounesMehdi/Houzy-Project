import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

import { Check, ChevronsUpDown, Search } from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import cities from "../../lib/AlgeriaCities.json";
import { Dispatch, SetStateAction, useState } from "react";

type SearchSectionProps = {
  setCity: Dispatch<SetStateAction<string>>;
  setPropertyType: Dispatch<SetStateAction<string>>;
};

export default function SearchSection({
  setCity,
  setPropertyType,
}: SearchSectionProps) {
  const [open, setOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const allCities = [{ id: 59, label: "All", value: "all" }, ...cities];

  return (
    <div className="container mx-auto mt-10 flex justify-center items-center gap-2 px-4">
      <div className="w-full">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between font-normal"
            >
              {selectedCity
                ? allCities.find((city) => city.value === selectedCity)?.label
                : "City"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0">
            <Command>
              <CommandInput placeholder="Search city..." />
              <CommandList>
                <CommandEmpty>No city found.</CommandEmpty>
                <CommandGroup>
                  {allCities.map((city) => (
                    <CommandItem
                      key={city.value}
                      value={city.value}
                      onSelect={(currentValue) => {
                        setSelectedCity(
                          currentValue === selectedCity ? "" : currentValue
                        );
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          selectedCity === city.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {city.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      <div className="w-full">
        <Select onValueChange={(value) => setSelectedPropertyType(value)}>
          <SelectTrigger className="">
            <SelectValue placeholder="Property type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="house">House</SelectItem>
            <SelectItem value="apartment">Apartment</SelectItem>
            <SelectItem value="villa">Villa</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button className="block sm:hidden p-2 rounded-full text-white">
        <Search />
      </Button>
      <Button
        onClick={() => {
          setCity(selectedCity);
          setPropertyType(selectedPropertyType);
        }}
        className="hidden sm:block"
      >
        Search
      </Button>
    </div>
  );
}
