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

      {props.selectedTour ? (
        <div className="roboto max-w-5xl m-auto pt-20 pb-20">
          <MenuDetailsId
            access={props.selectedTour.access}
            accessOption1={props.selectedTour.accessOption1}
            accessOption2={props.selectedTour.accessOption2}
            accessOption3={props.selectedTour.accessOption3}
            bullet1={props.selectedTour.bullet1}
            bullet2={props.selectedTour.bullet2}
            bullet3={props.selectedTour.bullet3}
            bullet4={props.selectedTour.bullet4}
            bullet5={props.selectedTour.bullet5}
            description1={props.selectedTour.description1}
            description2={props.selectedTour.description2}
            difficulty={props.selectedTour.difficulty}
            distance={props.selectedTour.distance}
            duration={props.selectedTour.duration}
            imagePath1={props.selectedTour.imagePath1}
            imagePath11={props.selectedTour.imagePath11}
            imagePath2={props.selectedTour.imagePath2}
            imagePath21={props.selectedTour.imagePath21}
            imagePath22={props.selectedTour.imagePath22}
            imagePath23={props.selectedTour.imagePath23}
            imagePath24={props.selectedTour.imagePath24}
            imagePath25={props.selectedTour.imagePath25}
            imagePath3={props.selectedTour.imagePath3}
            imagePath4={props.selectedTour.imagePath4}
            hotel1={props.selectedTour.hotel1}
            hotel2={props.selectedTour.hotel2}
            hotel3={props.selectedTour.hotel3}
            hotel4={props.selectedTour.hotel4}
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
            point1={props.selectedTour.point1}
            point2={props.selectedTour.point2}
            point3={props.selectedTour.point3}
            point4={props.selectedTour.point4}
            tourPathDescription1={props.selectedTour.tourPathDescription1}
          />
        </div>
      ) : (
        <p>Nao existem roteiros.</p>
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
