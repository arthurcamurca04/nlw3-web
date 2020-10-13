import React from "react";
import mapMarkerImg from "../../images/map-marker.svg";
import "../../styles/pages/orphanages-map.css";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Map, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

export default function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Marcador" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita</p>
        </header>

        <footer>
          <strong>Piancó</strong>
          <span>Paraíba</span>
        </footer>
      </aside>

      <Map
        center={[-7.1981541, -37.9185494]}
        zoom={16}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
        {/* <TileLayer url="mapbox"></TileLayer> */}
      </Map>
      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}
