import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react";

export default function Map(props) {
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
            lat: {props.lat},
            lng: {props.long},
          },
          zoom: 6,
          mapId: "MY_NEXTJS_MAPID",
        });

        new GOOGLE.maps.Marker({
          position: {
            lat: {props.lat},
            lng: {props.long},
          },
          map: MAP,
          title: "Passadicos do Mondego",
        });

        new GOOGLE.maps.Marker({
          position: {
            lat: {props.lat},
            lng: {props.long},
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
