import BannerGallery from "../banner_gallery/BannerGallery";
import BannerDescription from "./FreeTourDescription";

export default function Banner() {
  return (
    <div className="flex justify-center m-auto">
      <BannerDescription />
      <BannerGallery />
    </div>
  );
}
