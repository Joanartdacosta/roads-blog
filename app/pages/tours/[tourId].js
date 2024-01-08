import GeneralBanner from "@/components/common/general_banner/GeneralBanner";
import MenuDetailsId from "@/components/common/menu_id/MenuDetailsId";
import NAVBAR_LINKS from "@/components/lists/navbar_links_map";
import { getByIdTour, getFeaturedTours } from "@/helpers/api-util";

export default function TourDetailPage(props) {
  return (
    <div>
      <GeneralBanner
        section={NAVBAR_LINKS["tours"]["section"]}
        imgUrl={NAVBAR_LINKS["tours"]["imgUrl"]}
        description={NAVBAR_LINKS["tours"]["description"]}
      />

      {props.selectedTour.distance ? (
        <div className="roboto max-w-5xl m-auto pt-20 pb-20">
          <MenuDetailsId
            accessOption1={props.selectedTour.accessOption1}
            accessOption2={props.selectedTour.accessOption2}
            accessOption3={props.selectedTour.accessOption3}
            bullet1={props.selectedTour.bullet1}
            bullet2={props.selectedTour.bullet2}
            bullet3={props.selectedTour.bullet3}
            bullet4={props.selectedTour.bullet4}
            description1={props.selectedTour.description1}
            description2={props.selectedTour.description2}
            difficulty={props.selectedTour.difficulty}
            distance={props.selectedTour.distance}
            duration={props.selectedTour.duration}
            hotel1={props.selectedTour.hotel1}
            hotel2={props.selectedTour.hotel2}
            hotel3={props.selectedTour.hotel3}
            labelOption1Description={props.selectedTour.labelOption1Description}
            labelOption2Description={props.selectedTour.labelOption2Description}
            restaurant1={props.selectedTour.restaurant1}
            restaurant2={props.selectedTour.restaurant2}
            percentageAcessibility={props.selectedTour.percentageAcessibility}
            percentageDifficulty={props.selectedTour.percentageDifficulty}
            percentageEmergency={props.selectedTour.percentageEmergency}
            percentageNature={props.selectedTour.percentageNature}
            percentageSafety={props.selectedTour.percentageSafety}
            percentageShadow={props.selectedTour.percentageShadow}
            percentageSupport={props.selectedTour.percentageSupport}
          />
        </div>
      ) : (
        <p>Hello</p>
      )}
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
