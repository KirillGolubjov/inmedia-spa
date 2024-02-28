import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';

function Map() {
  return (
    <MapContainer center={[59.437606562195754, 24.76355087996663]} zoom={16} style={{ height: '400px', width: '700px' }} zoomControl={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <ZoomControl position="bottomright" />
      <Marker position={[59.437606562195754, 24.76355087996663]}>
        <Popup>
          We are here.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map
