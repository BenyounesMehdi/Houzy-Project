import { UploadDropzone } from "@/lib/uploadthing";
import { Label } from "../ui/label";
import { useState } from "react";
import { ClientUploadedFileData } from "uploadthing/types";
import { toast } from "sonner";
import ErrorMessage from "../shared/ErrorMessage";

type PropertyImagesUploaderProps = {
  error?: string;
};

export default function PropertyImagesUploader({
  error,
}: PropertyImagesUploaderProps) {
  const [images, setImages] = useState<string[] | null>([]);

  const getImages = (
    res: ClientUploadedFileData<{
      uploadedBy: string;
    }>[]
  ) => {
    setImages(res.map((image) => image.url));
  };

  return (
    <div className="flex flex-col gap-2 mt-3">
      <input type="hidden" name="images" value={JSON.stringify(images)} />
      <Label className="text-lg">Images</Label>
      <UploadDropzone
        endpoint="imageUploader"
        onClientUploadComplete={(res) => getImages(res)}
        onUploadError={() => {
          toast.error("Something went wrong, try again.");
        }}
      />
      {error && <ErrorMessage message={error} />}
    </div>
  );
}
