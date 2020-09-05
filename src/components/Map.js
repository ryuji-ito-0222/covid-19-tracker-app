import React from "react";
import "../styles/Map.css";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import { showDateOnMap } from "../util";

function Map({ countries, caseType, center, zoom }) {
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        />
        {showDateOnMap(countries, caseType)}
      </LeafletMap>
    </div>
  );
}

export default Map;
