import { Label } from "../ui/label";
import { useState } from "react";
import { toast } from "sonner";
import ErrorMessage from "../shared/ErrorMessage";
import { UploadButton } from "@/utils/uploadthing";

type PropertyImagesUploaderProps = {
  error?: string;
};

export default function PropertyImagesUploader({
  error,
}: PropertyImagesUploaderProps) {
  const [images, setImages] = useState<string[] | null>([]);

  return (
    <div className="flex flex-col gap-2 mt-3">
      <input type="hidden" name="images" value={JSON.stringify(images)} />
      <Label className="text-lg">Images</Label>
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          console.log("Upload completed:", res);
          setImages(res.map((image) => image.url));
          toast.success("Images uploaded successfully!");
        }}
        onUploadError={(e) => {
          toast.error("Something went wrong, try again.");
          console.log(e);
        }}
      />
      {error && <ErrorMessage message={error} />}
    </div>
  );
}
