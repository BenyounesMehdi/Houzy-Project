import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

type PropertyImagesCarouselProps = {
  images: string[];
};

export default function PropertyImagesCarousel({
  images,
}: PropertyImagesCarouselProps) {
  return (
    <Carousel>
      <CarouselContent>
        {images.map((image, key) => {
          return (
            <CarouselItem key={key}>
              <div className="aspect-w-3 aspect-h-2">
                <Image
                  src={image}
                  alt="property image"
                  fill
                  priority
                  className="rounded-md"
                />
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="ml-16" />
      <CarouselNext className="mr-16" />
    </Carousel>
  );
}
