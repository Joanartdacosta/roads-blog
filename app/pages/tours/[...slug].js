import NAVBAR_LINKS from "@/components/lists/navbar_links_map";
import GeneralBanner from "@/components/common/general_banner/GeneralBanner";

export default function FilteredTours() {
  return (
    <div>
      <div>
        <GeneralBanner
          section={NAVBAR_LINKS["tours"]["section"]}
          imgUrl={NAVBAR_LINKS["tours"]["imgUrl"]}
          description={NAVBAR_LINKS["tours"]["description"]}
        />
        <h1>Filtered TOur</h1>
      </div>
    </div>
  );
}
