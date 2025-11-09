import React from "react";
import { PhotoGraphyServices } from "./PhotoGraphyServices";
import { OneTinyMoment } from "./oneTinyMoment";

export const PhotographyScreen = (): JSX.Element => {
  return (
    <div>
      {/* Gallery Section */}
      <OneTinyMoment />
      {/* Services Section */}
      <PhotoGraphyServices />
    </div>
  );
};
