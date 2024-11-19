import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

type SubmitButtonProps = {
  label: string;
};

export default function SubmitButton({ label }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <>
      {!pending ? (
        <Button type="submit">{label}</Button>
      ) : (
        <Button disabled className="flex items-center gap-x-2">
          <Loader2 className="animate-spin" /> <span>Please wait</span>
        </Button>
      )}
    </>
  );
}