import GeneralBanner from "@/components/common/general_banner/GeneralBanner";
import MenuDetailsId from "@/components/common/menu_id/MenuDetailsId";
import NAVBAR_LINKS from "@/components/lists/navbar_links_map";
import { getByIdTrips, getFeaturedTrips } from "@/helpers/api-util";

export default function TripDetailsPage(props) {
  return (
    <div>
      <GeneralBanner
        section={NAVBAR_LINKS["trips"]["section"]}
        imgUrl={NAVBAR_LINKS["trips"]["imgUrl"]}
        description={NAVBAR_LINKS["trips"]["description"]}
      />
      <div className="roboto max-w-5xl m-auto pt-20 pb-20">
        {props.selectedTrip ? (
          <MenuDetailsId
            accessOption1={props.selectedTrip?.accessOption1}
            accessOption2={props.selectedTrip?.accessOption2}
            accessOption3={props.selectedTrip?.accessOption3}
            bullet1={props.selectedTrip?.bullet1}
            bullet2={props.selectedTrip?.bullet2}
            bullet3={props.selectedTrip?.bullet3}
            bullet4={props.selectedTrip?.bullet4}
            bullet5={props.selectedTrip?.bullet5}
            price1={props.selectedTrip?.price1}
            price2={props.selectedTrip?.price2}
            price3={props.selectedTrip?.price3}
            description1={props.selectedTrip?.description1}
            difficulty={props.selectedTrip?.difficulty}
            distance={props.selectedTrip?.distance}
            duration={props.selectedTrip?.duration}
            evaluation={props.selectedTrip?.evaluation}
            labelOption1Description={
              props.selectedTrip?.labelOption1Description
            }
            labelOption2Description={
              props.selectedTrip?.labelOption2Description
            }
            source={props.selectedTrip?.source}
            percentageAcessibility={props.selectedTrip?.percentageAcessibility}
            percentageDifficulty={props.selectedTrip?.percentageDifficulty}
            percentageEmergency={props.selectedTrip?.percentageEmergency}
            percentageNature={props.selectedTrip?.percentageNature}
            percentageSafety={props.selectedTrip?.percentageSafety}
            percentageShadow={props.selectedTrip?.percentageShadow}
            percentageSupport={props.selectedTrip?.percentageSupport}
            point1={props.selectedTrip?.point1}
            point2={props.selectedTrip?.point2}
            point3={props.selectedTrip?.point3}
            point4={props.selectedTrip?.point4}
            point5={props.selectedTrip?.point5}
            point6={props.selectedTrip?.point6}
          />
        ) : (
          <p>Nao existem passeios.</p>
        )}
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const tripId = context.params.tripId;

  const trip = await getByIdTrips(tripId);

  return {
    props: {
      selectedTrip: trip,
    },
    revalidate: 1800,
  };
}

export async function getStaticPaths() {
  const trips = await getFeaturedTrips();
  const paths = trips.map((trip) => ({ params: { tripId: trip.id } }));

  return {
    paths: paths,
    fallback: true,
  };
}
