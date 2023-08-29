"use client";

import GoogleMapComponent from "@/components/GoogleMapComponent";
import React from "react";

const HomePage: React.FC = () => {
  const apiKey = "AIzaSyBmSzzqDIrG3iLBTGs7tyZC4sVq4VJrWJY"; // Replace with your actual API key

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Google Map Example</h1>
      <GoogleMapComponent apiKey={apiKey} />
    </div>
  );
};

export default HomePage;
