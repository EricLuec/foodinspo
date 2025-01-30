import { MapContainer, Marker, Popup } from "react-leaflet";
import { TileLayer } from "react-leaflet/TileLayer";

export function Map() {
    const position = [51.505, -0.09];

    return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}