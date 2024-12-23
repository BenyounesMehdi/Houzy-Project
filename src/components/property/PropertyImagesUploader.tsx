import { Label } from "../ui/label";
import { useState } from "react";
import { toast } from "sonner";
import ErrorMessage from "../shared/ErrorMessage";
import { UploadButton } from "@/utils/uploadthing";

type PropertyImagesUploaderProps = {
  error?: string;
  images?: string[];
};

export default function PropertyImagesUploader({
  error,
  images,
}: PropertyImagesUploaderProps) {
  const [propertyImages, setPropertyImages] = useState<string[] | []>(
    images ? images : []
  );

  return (
    <div className="flex flex-col gap-2 mt-3">
      <input
        type="hidden"
        name="images"
        value={JSON.stringify(propertyImages)}
      />
      <Label className="text-lg">Images</Label>
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          setPropertyImages(res.map((image) => image.url));
          toast.success("Images uploaded successfully!");
        }}
        onUploadError={(e) => {
          toast.error("Something went wrong, try again.");
        }}
      />
      {error && <ErrorMessage message={error} />}
    </div>
  );
}
