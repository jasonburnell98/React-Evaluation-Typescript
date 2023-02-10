import axios from "axios";
import { IPBASE_API_KEY } from "../environment";

const getLocationService = async (latitude: number, longitude: number) => {
  try {
    const res = await axios.get(
      `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}`
    );
    return res.data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const fetchLocation = async (ip: string) => {
  try {
    const res = await axios.get(
      `https://api.ipbase.com/v2/info?apikey=${IPBASE_API_KEY}&/${ip}`
    );
    return res.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { getLocationService, fetchLocation };
