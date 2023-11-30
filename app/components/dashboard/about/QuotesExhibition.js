import ArrowsLeftAndRight from "@/components/common/icons/arrows/ArrowsLeftAndRight";
import QUOTES from "@/components/lists/quotes";

export default function QuotesExhibition() {
  return (
    <div>
      <div id="default-carousel" class="relative w-full" data-carousel="slide">
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div
            class="hidden duration-700 ease-in-out"
            data-carousel-item="active"
          >
            <img
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
              class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>

          {QUOTES.map((quote) => {
            return (
              <div class=" duration-700 ease-in-out" data-carousel-item>
                <img
                  src={quote.imgUrl}
                  class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt={quote.id}
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
