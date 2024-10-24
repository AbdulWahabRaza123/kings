"use client";
import { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  DirectionsRenderer,
  Marker,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "99vh",
};

const center = {
  lat: 32.0,
  lng: 73.5,
};

const GoogleMapComponent: React.FC = () => {
  const [directionsResponse, setDirectionsResponse] =
    useState<google.maps.DirectionsResult | null>(null);
  const [originCoords, setOriginCoords] =
    useState<google.maps.LatLngLiteral | null>(null);
  const [destinationCoords, setDestinationCoords] =
    useState<google.maps.LatLngLiteral | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const onLoad = () => {
    setIsLoaded(true);
  };

  const getCoordinates = async (address: string) => {
    try {
      const geocoder = new google.maps.Geocoder();
      const response = await geocoder.geocode({ address });

      if (response.results && response.results[0]) {
        const location = response.results[0].geometry.location;
        return { lat: location.lat(), lng: location.lng() };
      }
    } catch (error) {
      console.error("Error fetching geocode:", error);
    }
    return null;
  };

  const calculateRoute = async () => {
    if (!originCoords || !destinationCoords || !isLoaded) return;

    try {
      const directionsService = new google.maps.DirectionsService();
      const result = await directionsService.route({
        origin: originCoords,
        destination: destinationCoords,
        travelMode: google.maps.TravelMode.DRIVING,
      });

      setDirectionsResponse(result);
    } catch (error) {
      console.error("Error fetching directions:", error);
    }
  };

  useEffect(() => {
    if (isLoaded) {
      const fetchCoords = async () => {
        const origin = await getCoordinates("Lahore, Pakistan");
        const destination = await getCoordinates("Islamabad, Pakistan");

        if (origin && destination) {
          setOriginCoords(origin);
          setDestinationCoords(destination);
        }
      };

      fetchCoords();
    }
  }, [isLoaded]);

  useEffect(() => {
    if (originCoords && destinationCoords) {
      calculateRoute();
    }
  }, [originCoords, destinationCoords]);

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
      onLoad={onLoad}
    >
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={6}>
        {originCoords && <Marker position={originCoords} label="Lahore" />}
        {destinationCoords && (
          <Marker position={destinationCoords} label="Islamabad" />
        )}

        {directionsResponse && (
          <DirectionsRenderer
            directions={directionsResponse}
            options={{
              polylineOptions: {
                strokeColor: "#2196f3",
                strokeOpacity: 1.0,
                strokeWeight: 4,
              },
            }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
