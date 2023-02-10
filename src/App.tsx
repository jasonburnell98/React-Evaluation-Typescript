import React, { useState, useMemo, useEffect } from "react";
import Form from "./components/Form";
import Result from "./components/Result";
import { SunriseSunset } from "../src/models/sunlight.model";
import { getLocationService, fetchLocation } from "./services/sunlightService";
import "./App.css";

interface Props {}

const App: React.FC<Props> = () => {
  const [ip, setIp] = useState<string>(""); // State to store the entered IP address
  const [location, setLocation] = useState<any>({}); // State to store the location information
  const [sunlightInfo, setSunlightInfo] = useState<SunriseSunset>(); // State to store the sunrise and sunset information
  const [locationInfo, setLocationInfo] = useState<any>([]); // State to store the information about the sun

  // useMemo hook to fetch the location information
  const fetchLocationFun = useMemo(
    () => async () => {
      await fetchLocation(ip).then((res) => {
        setLocationInfo(res); // Set the sun information
        setLocation({
          latitude: res.location.latitude,
          longitude: res.location.longitude,
        }); // Set the location information
      });
    },
    [ip]
  );

  // useEffect hook to trigger the location fetch function
  useEffect(() => {
    if (ip) {
      fetchLocationFun();
    }
  }, [ip, fetchLocationFun]);

  // useMemo hook used cache the result between re-renders
  const fetchSunSetData = useMemo(
    () => () => {
      if (!location.latitude || !location.longitude) return;
      try {
        getLocationService(location.latitude, location.longitude).then(
          (res) => {
            setSunlightInfo(res); // Set the sunrise and sunset information
          }
        );
      } catch (error) {
        console.error(error);
      }
    },
    [location.latitude, location.longitude]
  );

  // useEffect hook to trigger the sunrise and sunset fetch function
  useEffect(() => {
    if (location.latitude && location.longitude) {
      fetchSunSetData();
    }
  }, [location.latitude, location.longitude, fetchSunSetData]);

  return (
    <div className="App">
      <div className="border container mx-auto mt-5">
        <h2 className="text-center ">Sunlight timings</h2>
        <Form onSubmit={setIp} />
        {/* Conditionally render the result based on whether sunrise and sunset information is available */}
        {sunlightInfo?.sunrise && sunlightInfo.sunset ? (
          <Result
          sunlightInfo={sunlightInfo}
          locationInfo={locationInfo}
          />
        ) : (
          <p>Enter an IP address to get the sunrise and sunset timings.</p>
        )}
      </div>
    </div>
  );
};

export default App;
