"use clients";

import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

interface GoogleMapProps {
  apiKey: string;
}

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -34.397,
  lng: 150.644,
};

const GoogleMapComponent: React.FC<GoogleMapProps> = ({ apiKey }) => {
  return (
    <div className="w-full h-[400px]">
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={8}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMapComponent;
