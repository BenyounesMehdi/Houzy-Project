import { UploadButton, UploadDropzone } from "@/lib/uploadthing";
import { Label } from "../ui/label";

export default function PropertyImagesUploader() {
  return (
    <div className="flex flex-col gap-2 mt-3">
      <Label className="text-lg">Images</Label>
      <UploadDropzone endpoint="imageUploader" />
    </div>
  );
}
