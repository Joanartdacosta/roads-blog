import GeneralBanner from "@/components/common/general_banner/GeneralBanner";
import Introduction from "@/components/dashboard/about/Introduction";
import NAVBAR_LINKS from "@/components/lists/navbar_links_map";

export default function AboutMe() {
  return (
    <div>
      <GeneralBanner
        section={NAVBAR_LINKS["about"]["section"]}
        imgUrl={NAVBAR_LINKS["about"]["imgUrl"]}
        description={NAVBAR_LINKS["about"]["description"]}
      />
      <div className="max-w-5xl m-auto pt-20 pb-20">
        <Introduction />
      </div>
    </div>
  );
}
