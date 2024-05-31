import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { Container, Text, VStack } from "@chakra-ui/react";
import 'leaflet/dist/leaflet.css';

// Custom icon for bike pump stations
const bikePumpIcon = new Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png', // Example icon URL
  iconSize: [25, 25]
});

// Sample data for bike pump stations in Stockholm
const bikePumpStations = [
  { id: 1, name: 'Pump Station 1', position: [59.3293, 18.0686] },
  { id: 2, name: 'Pump Station 2', position: [59.3326, 18.0649] },
  { id: 3, name: 'Pump Station 3', position: [59.3340, 18.0700] }
];

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Bike Pump Stations in Stockholm</Text>
        <MapContainer center={[59.3293, 18.0686]} zoom={13} style={{ height: "500px", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {bikePumpStations.map(station => (
            <Marker key={station.id} position={station.position} icon={bikePumpIcon}>
              <Popup>{station.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </VStack>
    </Container>
  );
};

export default Index;