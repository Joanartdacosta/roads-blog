import LOCATIONS_COORD from "@/components/enums/locations_coord";
import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react";

export default function Map() {
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
            lat: LOCATIONS_COORD.mondego_lat,
            lng: LOCATIONS_COORD.mondego_long,
          },
          map: MAP,
          title: "Passadicos do Mondego",
        });

        new GOOGLE.maps.Marker({
          position: {
            lat: LOCATIONS_COORD.gema_lat,
            lng: LOCATIONS_COORD.gema_long,
          },
          map: MAP,
          title: "Minas de Sal Gema",
        });
      } catch (error) {
        console.error("Error loading Google Maps:", error);
      }
    };

    initMap();
  }, []);

  return (
    <div className="flex flex-col justify justify-center items-center">
      <div style={{ height: "400px", width: "700px" }} ref={mapRef} />
    </div>
  );
}
