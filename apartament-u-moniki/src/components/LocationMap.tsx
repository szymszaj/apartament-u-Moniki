import { useEffect, useRef } from "react";
import { MapPin } from "lucide-react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const LocationMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (mapRef.current) {
      const map = L.map(mapRef.current).setView([49.4292, 20.02619], 17);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker([49.4292, 20.02619])
        .addTo(map)
        .bindPopup("tu jesteśmy!")
        .openPopup();
    }
  }, []);

  return (
    <section className="py-16 bg-beige-light">
      <div className="container">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl font-bold">Lokalizacja</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="bg-beige p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-3 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Adres</h3>
                  <p className="text-muted-foreground">
                    Augustyna Suskiego 45F, 34-424 Szaflary
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">W pobliżu</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                  <span>Nowy Targ - 7 km. </span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                  <span>Zakopane - 17 km.</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                  <span>Termy Gorący Potok - 3,5 km.</span>
                </li>
              </ul>
            </div>
          </div>

          <div
            ref={mapRef}
            className="h-[400px] bg-beige border border-beige-dark/20 rounded-lg overflow-hidden shadow-md"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
