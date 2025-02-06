import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Custom marker icon
const customIcon = L.icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [30, 45],
  iconAnchor: [15, 45],
  popupAnchor: [0, -40],
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [50, 64],
});

const OfficeMap = () => {
  return (
    <>
    <div className="w-full h-[400px] rounded-lg overflow-hidden relative shadow-md ">
      <MapContainer 
        center={[28.510310139648677, 77.38057470529164]} // office's latitude and longitude
        zoom={15}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={false} //Disable zoom via scroll
        dragging={false} // Disable map dragging
        zoomControl={false} // Remove zoom controls
      >
        {/* Dark-themed tile layer */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        //   attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
        //   //  contributors'
        />
        {/* Marker */}
        <Marker position={[28.510310139648677, 77.38057470529164]} icon={customIcon}>
          <Popup className="bg-black">
            <div className="">
              <h2 className="font-bold text-lg">MarketingEXL</h2>
              <p>Tower-B, ATS BOUQUET, B-013, Block B, Sector 132, Noida, Uttar Pradesh 201304</p>
            </div>
          </Popup>
        </Marker>
       
      </MapContainer>
      
    </div>

    </>
  );
};

export default OfficeMap;
