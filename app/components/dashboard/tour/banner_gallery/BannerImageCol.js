import BannerImage from "@/components/dashboard/tour/banner_gallery/BannerImage";

export default function BannerImageCol(props) {
  const IMG_URLS = [];

  for (let i = 0; i < props.images.length; i++) {
    IMG_URLS.push(props.images[i]);
  }

  return (
    <div>
      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
        {IMG_URLS.map((image) => (
          <BannerImage imgUrl={image.imgUrl} />
        ))}
      </div>
    </div>
  );
}
