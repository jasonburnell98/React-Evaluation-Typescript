export interface SunriseSunset {
  sunrise: string;
  sunset: string;
}


export interface ResultProps {
    sunlightInfo: {
    sunrise: string;
    sunset: string;
  };
  locationInfo: {
    location: {
      country: {
        name: string;
      };
      region: {
        name: string;
      };
      city: {
        name: string;
      };
    };
  };
}

export interface onSubmit {
    onSubmit: (ip: string) => void;
  }

  export interface fetchLocationService{
   ip: string
  }