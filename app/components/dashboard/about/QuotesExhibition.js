import ArrowsLeftAndRight from "@/components/common/icons/arrows/ArrowsLeftAndRight";
import QUOTES from "@/components/lists/quotes";
import Image from "next/image";

export default function QuotesExhibition() {
  return (
    <div>
      <div id="default-carousel" class="relative w-full" data-carousel="slide">
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div
            class="hidden duration-700 ease-in-out"
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

          {QUOTES.map((quote) => {
            return (
              <div class=" duration-700 ease-in-out" data-carousel-item>
                <Image
                  alt={quote.id}
                  class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  max-width={100}
                  height={auto}
                  src={quote.imgUrl}
                  unoptimized
                />

                <h1>{quote.quote}</h1>
                <p>{quote.author}</p>
              </div>
            );
          })}
        </div>

        <ArrowsLeftAndRight />
      </div>
    </div>
  );
}
