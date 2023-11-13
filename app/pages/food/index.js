import GeneralBanner from "@/components/common/general_banner/GeneralBanner";
import NAVBAR_LINKS from "@/components/lists/navbar_links_map";

export default function Food() {
  return (
    <div>
      <GeneralBanner
        section={NAVBAR_LINKS["food"]["section"]}
        imgUrl={NAVBAR_LINKS["food"]["imgUrl"]}
        description={NAVBAR_LINKS["food"]["description"]}
      />
    </div>
  );
}
