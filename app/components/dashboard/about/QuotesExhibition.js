import ArrowsLeftAndRight from "@/components/common/icons/arrows/ArrowsLeftAndRight";
import Image from "next/image";

export default function QuotesExhibition() {
  return (
    <div>
      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item="active"
          >
            <Image
              alt=""
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
              class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              height={384}
              width={384}
              unoptimized
            />
          </div>
        </div>

        <ArrowsLeftAndRight />
      </div>
    </div>
  );
}
