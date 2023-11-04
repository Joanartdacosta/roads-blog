import BannerImageCol from "./BannerImageCol";
import PLACES from "./places";

export default function BannerGallery() {
  return (
    <div>
      <div aria-hidden="true" className="lg:max-w-7xl">
        <div className="float-right">
          <div className="flex items-center space-x-4 lg:space-x-4">
            {PLACES.map((col) => (
              <BannerImageCol images={col} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
