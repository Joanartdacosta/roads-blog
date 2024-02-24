import BannerGallery from "@/components/dashboard/tour/banner_gallery/BannerGallery";
import BannerDescription from "@/components/dashboard/tour/banner/FreeTourDescription";

export default function Banner() {
  return (
    <div className="flex justify-center m-auto pl-8 pr-8">
      <BannerDescription />
      <BannerGallery />
    </div>
  );
}
