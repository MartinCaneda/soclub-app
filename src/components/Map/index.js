import * as React from "react";
import Map, { NavigationControl, GeolocateControl } from "react-map-gl";

export default function MyMap() {
  return (
    <Map
      mapboxAccessToken="pk.eyJ1IjoibWFydGluY2FuZWRhIiwiYSI6ImNsdjJjNGFxOTA4cmgyaXBmdmZvNjZjeXIifQ.Rs1_Os26EEYMTMeaGHSPaw"
      initialViewState={{
        longitude: 13.388694,
        latitude: 52.51725,
        zoom: 14,
      }}
      style={{ width: 600, height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    ></Map>
  );
}
