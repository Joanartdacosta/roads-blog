import NAVBAR_LINKS from "@/components/lists/navbar_links_map";
import GeneralBanner from "@/components/common/general_banner/GeneralBanner";
import MenuDescription from "@/components/dashboard/tour/menus/menu_description/MenuDescription";
import { getByIdTour, getFeaturedTours } from "@/helpers/api-util";

export default function TourDetailPage(props) {
  const tour = props.selectedTour;

  if (!tour) {
    return <p>Loading...</p>;
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

export async function getStaticProps(context) {
  const tourId = context.params.tourId;

  const tour = await getByIdTour(tourId);

  return {
    props: {
      selectedTour: tour,
    },
    revalidate: 1800,
  };
}

export async function getStaticPaths() {
  const tours = await getFeaturedTours();
  const paths = tours.map((tour) => ({ params: { tourId: tour.id } }));

  return {
    paths: paths,
    fallback: true,
  };
}
