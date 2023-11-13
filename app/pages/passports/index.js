import GeneralBanner from "@/components/common/general_banner/GeneralBanner";
import NAVBAR_LINKS from "@/components/lists/navbar_links_map";

export default function Passports() {
  return (
    <div>
      <GeneralBanner
        section={NAVBAR_LINKS["passports"]["section"]}
        imgUrl={NAVBAR_LINKS["passports"]["imgUrl"]}
        description={NAVBAR_LINKS["passports"]["description"]}
      />
      <div className="max-w-5xl m-auto pt-20 pb-20">
        <p>Em atualizacao.</p>
      </div>
    </div>
  );
}
