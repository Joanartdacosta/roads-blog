import BannerImageCol from "./BannerImageCol";
import PLACES from "./places";

export default function BannerGallery() {
  return (
    <div className="mt-10">
      <div
        aria-hidden="true"
        className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
      >
        <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
          <div className="flex items-center space-x-6 lg:space-x-8">
            {PLACES.map((col) => (
              <BannerImageCol images={col} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
