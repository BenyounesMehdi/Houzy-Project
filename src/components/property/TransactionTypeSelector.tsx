import ErrorMessage from "../shared/ErrorMessage";
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

type TransactionTypeSelectorProps = {
  error?: string;
};

export default function TransactionTypeSelector({
  error,
}: TransactionTypeSelectorProps) {
  return (
    <div className="w-full md:w-1/2 flex flex-col gap-2">
      <Label className="text-lg">Transaction type</Label>
      <Select name="transactionType">
        <SelectTrigger>
          <SelectValue placeholder="Select a transaction type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="sell">I want to sell my property</SelectItem>
            <SelectItem value="rent">I want to rent my property</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      {error && <ErrorMessage message={error} />}
    </div>
  );
}
