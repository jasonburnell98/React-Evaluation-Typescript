import React from "react";
import { ResultProps } from "../models/sunlight.model";
const Result: React.FC<ResultProps> = ({sunlightInfo,locationInfo}) => {
  return (
    <div>
      {/* Display the sunlight duration information */}
      <h2>Sunlight duration</h2>
      <p>
        Sunlight duration in {locationInfo.location.country.name},
        {locationInfo.location.region.name}, {locationInfo.location.city.name}{" "}
        is from <b>{sunlightInfo.sunrise}</b> to <b>{sunlightInfo.sunset}</b>
      </p>
    </div>
  );
};

export default Result;
