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
          center: { lat: 43.642693, lng: -79.3871189 },
          zoom: 17,
          mapId: "MY_NEXTJS_MAPID",
        });

        // Add a marker to the map
        new google.maps.Marker({
          position: { lat: 43.642693, lng: -79.3871189 },
          map: Map,
          title: "Marker Title",
        });

        // Add additional map customization or event handling here
      } catch (error) {
        console.error("Error loading Google Maps:", error);
      }
    };

    initMap();
  }, []);

  return (
    <div>
      <h1>Google Maps</h1>
      <div style={{ height: "600px" }} ref={mapRef} />
    </div>
  );
}
