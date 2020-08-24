import { useState, useEffect } from "react";
import { CurrentWeather, Well, TitleBar, ForeCast } from "../";
import { PageLayout, Title } from "./ForeCastPage.styles";

const ForeCastPage = () => {
  interface Location {
    long: number;
    lat: number;
  }

  const [location, setLocation] = useState<Location>();
  const [geoApiExists, setGeoApiExists] = useState(true);
  const [geoPermission, setGeoPermission] = useState(true);

  useEffect(() => {
    // If location is already set, bail
    if (location) return;

    // Check if browser supports Geolocation API
    if (!navigator.geolocation) {
      setGeoApiExists(false);
      return;
    }

    const success = position =>
      setLocation({
        long: position.coords.longitude,
        lat: position.coords.latitude,
      });

    const error = () => setGeoPermission(false);

    // Get User's geolocation
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  if (!geoApiExists) {
    return (
      <PageLayout>
        <Well>
          <Title>Sorry, your browser does not support Geolocation</Title>
        </Well>
      </PageLayout>
    );
  }

  if (!geoPermission) {
    return (
      <PageLayout>
        <Well>
          <Title>
            You have blocked the browser from knowing your location. The app
            can't work without it. Please reload the page in an incognito window
            and give the browser permission.
          </Title>
        </Well>
      </PageLayout>
    );
  }

  if (!location)
    return (
      <PageLayout>
        <Well>
          <Title>
            To use the app, please give the browser permission to retrieve your
            location
          </Title>
        </Well>
      </PageLayout>
    );

  return (
    <PageLayout>
      <TitleBar />
      <ForeCast location={location} />
    </PageLayout>
  );
};

export default ForeCastPage;
