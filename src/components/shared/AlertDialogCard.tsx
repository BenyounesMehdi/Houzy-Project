"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deleteProperty } from "@/utils/actions/delete-property";
import { Trash2 } from "lucide-react";

type AlertDialogCardProps = {
  propertyId: string;
  onDeleteComplete: (status: string, message: string) => void;
};

export default function AlertDialogCard({
  propertyId,
  onDeleteComplete,
}: AlertDialogCardProps) {
  const handleDeleteProperty = async (propertyId: string) => {
    const state = await deleteProperty(propertyId);
    if (state) {
      onDeleteComplete(state.status as string, state.message as string);
    }
  };

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger className="px-2 text-start text-base font-semibold">
          <div className="bg-red-200 p-1.5 rounded-md ring-1 ring-destructive/55 cursor-pointer">
            <Trash2 className="text-destructive" />
          </div>
        </AlertDialogTrigger>

        <AlertDialogContent className="rounded-md w-11/12">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription className="font-semibold">
              This action cannot be undone. This will permanently delete your
              property and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive hover:bg-destructive/85"
              onClick={() => handleDeleteProperty(propertyId)}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
