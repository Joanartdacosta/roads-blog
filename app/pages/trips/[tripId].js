import GeneralBanner from "@/components/common/general_banner/GeneralBanner";
import NAVBAR_LINKS from "@/components/lists/navbar_links_map";

export default function TripDetailsPage() {
  return (
    <div>
      <GeneralBanner
        section={NAVBAR_LINKS["trips"]["section"]}
        imgUrl={NAVBAR_LINKS["trips"]["imgUrl"]}
        description={NAVBAR_LINKS["trips"]["description"]}
      />
    </div>
  );
}
