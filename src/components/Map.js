/* global google */
import { useState, useContext } from "react";
import { CircleContext } from "../contexts/CircleContext";

// Google Maps
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";

//let markers = [];
export default function Map() {
  const groupInfo = useContext(CircleContext);
  const { email, location, selectedGroupLocations } = groupInfo;

  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map) => {
    const bounds = new google.maps.LatLngBounds();
    selectedGroupLocations?.forEach((m) => bounds.extend(m.userID.location));
    map.fitBounds(bounds);
  };

  return (
    <div>
      <GoogleMap
        mapContainerClassName="map-container"
        center={location}
        onLoad={handleOnLoad}
        clickableIcons={false}
        onClick={() => setActiveMarker(null)}
        zoom={10}
      >
        {location && <Marker position={location} />}
        {selectedGroupLocations?.map((m) =>
          email !== m.userID.email ? (
            <Marker
              key={m.userID.email}
              position={m.userID.location}
              icon={{
                url: m.userID.profilePictureURL,
                scaledSize: new google.maps.Size(40, 40),
              }}
              onClick={() => handleActiveMarker(m.userID.email)}
            >
              {activeMarker === m.userID.email ? (
                <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                  <div>{m.userID.nickname}</div>
                </InfoWindow>
              ) : null}
            </Marker>
          ) : null
        )}
      </GoogleMap>
    </div>
  );
}
