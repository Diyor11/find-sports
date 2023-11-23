import { useEffect, useRef, useMemo } from "react";
import { Loader } from "@googlemaps/js-api-loader";

interface MapProps {
  address: string;
}

const Map: React.FC<MapProps> = ({ address }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
      version: "weekly",
    });

    loader.load().then(() => {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode(
        { address: address },
        (
          results: google.maps.GeocoderResult[],
          status: google.maps.GeocoderStatus
        ) => {
          if (status === "OK") {
            const map = new google.maps.Map(mapRef.current!, {
              center: results[0].geometry.location,
              zoom: 8,
            });

            const marker = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location,
            });
          } else {
            console.error(
              `Geocode was not successful for the following reason: ${status}`
            );
          }
        }
      );
    });
  }, [address]);

  return <div style={{ height: "400px" }} ref={mapRef} />;
};

export default Map;
