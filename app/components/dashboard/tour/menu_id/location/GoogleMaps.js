import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export default function GoogleMaps() {
  const mapRef = useRef(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        version: "weekly",
      });

      try {
        const google = await loader.load();
        const Map = new google.maps.Map(mapRef.current, {
          center: { lat: 34.4905458, lng: -90.3871189 },
          zoom: 10,
          mapId: "MY_NEXTJS_MAPID",
        });

        new google.maps.Marker({
          position: { lat: 34.4905458, lng: -90.3871189 },
          map: Map,
          title: "Marker Title",
        });

        new google.maps.Marker({
          position: { lat: 34.5005458, lng: -90.3871189 },
          map: Map,
          title: "Marker Title",
        });
      } catch (hover) {
        console.log("Error loading Google Maps:", hover);
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
