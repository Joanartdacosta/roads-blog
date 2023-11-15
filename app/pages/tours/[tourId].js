import NAVBAR_LINKS from "@/components/lists/navbar_links_map";
import GeneralBanner from "@/components/common/general_banner/GeneralBanner";
import { useRouter } from "next/router";
import { getEventById } from "@/components/lists/tours";
import MenuDescription from "@/components/dashboard/tour/menus/menu_description/MenuDescription";

export default function TourDetailPage() {
  const router = useRouter();

  const tourId = router.query.tourId;
  const tour = getEventById(tourId);

  if (!tour) {
    return <p>Nao existem tours disponiveis.</p>;
  }

  return (
    <div>
      <GeneralBanner
        section={NAVBAR_LINKS["tours"]["section"]}
        imgUrl={NAVBAR_LINKS["tours"]["imgUrl"]}
        description={NAVBAR_LINKS["tours"]["description"]}
      />
      <MenuDescription />
    </div>
  );
}
