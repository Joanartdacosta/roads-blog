import LOCATIONS_COORD from "@/components/enums/locations_coord";
import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

export default function Map(props) {
  let current = null;
  if (props.page === "trip") {
    current = useSelector((state) => state.trip.selectedTrip);
  } else if (props.page === "tour") {
    current = useSelector((state) => state.tour.selectedTour);
  }

  const mapRef = useRef(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        version: "weekly",
      });

      try {
        const GOOGLE = await loader.load();
        const MAP = new google.maps.Map(mapRef.current, {
          center: {
            lat: LOCATIONS_COORD.pt_lat,
            lng: LOCATIONS_COORD.pt_long,
          },
          zoom: 6,
          mapId: "MY_NEXTJS_MAPID",
        });

        new GOOGLE.maps.Marker({
          position: {
            lat: current.coordinates1.lat,
            lng: current.coordinates1.long,
          },
          map: MAP,
          title: current.titleCoordinates1,
        });
        new GOOGLE.maps.Marker({
          position: {
            lat: current.coordinates2.lat,
            lng: current.coordinates2.long,
          },
          map: MAP,
          title: current.titleCoordinates2,
        });
      } catch (error) {
        console.error("Error loading Google Maps:", error);
      }
    };

    initMap();
  }, []);

  return (
    <div id="location">
      {current ? (
        <div className="flex flex-col justify justify-center items-center">
          <div style={{ height: "400px", width: "700px" }} ref={mapRef} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
