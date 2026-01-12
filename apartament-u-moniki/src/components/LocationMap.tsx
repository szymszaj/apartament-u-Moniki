import { useEffect, useRef, useState } from "react";
import { MapPin, Navigation as NavIcon, ChevronDown } from "lucide-react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { cn } from "@/lib/utils";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const LocationMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (mapRef.current) {
      if ((mapRef.current as any)._leaflet_id) {
        return;
      }

      const map = L.map(mapRef.current, {
        zoomControl: false,
        scrollWheelZoom: false,
        dragging: !L.Browser.mobile,
      }).setView([49.4292, 20.02619], 15);

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 20,
        }
      ).addTo(map);

      const customIcon = L.divIcon({
        className: "bg-transparent",
        html: `<div class="w-8 h-8 bg-primary rounded-full border-4 border-white shadow-lg flex items-center justify-center animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-white"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
               </div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
      });

      L.marker([49.4292, 20.02619], { icon: customIcon })
        .addTo(map)
        .bindPopup(
          `<div class="font-sans text-sm p-1">
            <strong class="text-base text-primary">Apartament u Moniki</strong><br/>
            Zapraszamy!
           </div>`
        )
        .openPopup();

      L.control.zoom({ position: "topright" }).addTo(map);
    }
  }, []);

  return (
    <section className="relative w-full h-[500px] md:h-[600px] flex items-end md:items-center overflow-hidden z-0 bg-beige-light">
      <div
        ref={mapRef}
        className="absolute inset-0 w-full h-full z-0 grayscale-[20%]"
        style={{ zIndex: 0 }}
      />

      <div className="container relative z-10 pointer-events-none px-4 mb-4 md:mb-0">
        <div
          className={cn(
            "bg-white/90 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-3xl shadow-2xl max-w-md pointer-events-auto transition-all duration-300",
            !isExpanded ? "md:scale-[1.02]" : ""
          )}
        >
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between md:cursor-default"
          >
            <div className="text-left">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Lokalizacja
              </h2>
              {!isExpanded && (
                <p className="text-muted-foreground text-sm md:hidden mt-1 line-clamp-1">
                  Augustyna Suskiego 45F, Szaflary
                </p>
              )}
            </div>
            <div
              className={cn(
                "p-2 bg-primary/10 rounded-full md:hidden transition-transform duration-300",
                isExpanded ? "rotate-180" : "rotate-0"
              )}
            >
              <ChevronDown className="h-5 w-5 text-primary" />
            </div>
          </button>

          <p className="text-muted-foreground hidden md:block mt-2">
            Z dala od zgiełku, blisko atrakcji.
          </p>

          <div
            className={cn(
              "grid transition-[grid-template-rows] duration-300 ease-out",
              isExpanded
                ? "grid-rows-[1fr] mt-6"
                : "grid-rows-[0fr] md:grid-rows-[1fr] md:mt-6"
            )}
          >
            <div className="overflow-hidden">
              <p className="text-muted-foreground md:hidden mb-6">
                Z dala od zgiełku, blisko atrakcji.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">
                      Adres
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mt-1">
                      Augustyna Suskiego 45F
                      <br />
                      34-424 Szaflary
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-2 border-t border-border/50">
                  <div className="flex items-center text-sm text-foreground/80">
                    <span className="w-2 h-2 rounded-full bg-primary mr-3" />
                    Nowy Targ - 7 km
                  </div>
                  <div className="flex items-center text-sm text-foreground/80">
                    <span className="w-2 h-2 rounded-full bg-primary mr-3" />
                    Zakopane - 17 km
                  </div>
                  <div className="flex items-center text-sm text-foreground/80">
                    <span className="w-2 h-2 rounded-full bg-primary mr-3" />
                    Termy Gorący Potok - 3,5 km
                  </div>
                </div>

                <a
                  href={import.meta.env.VITE_GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-primary text-white font-medium py-3 px-6 rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 hover:shadow-xl transition-all duration-300 group mt-2"
                >
                  <NavIcon className="w-4 h-4 mr-2 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  Nawiguj
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
