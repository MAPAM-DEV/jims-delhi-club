import { MapPin, ExternalLink, Instagram } from "lucide-react";
import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { siteConfig } from "@/config/site";
import { TikTokIcon } from "./Footer";

const customIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const LocationSection = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const { lat, lng } = siteConfig.coordinates;

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: [lat, lng],
      zoom: 16,
      scrollWheelZoom: false,
    });
    mapRef.current = map;

    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      subdomains: "abcd",
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      maxZoom: 20,
    }).addTo(map);

    L.marker([lat, lng], { icon: customIcon })
      .addTo(map)
      .bindPopup(`<div style="text-align:center;padding:8px 10px;"><strong style="display:block;margin-bottom:4px;letter-spacing:0.06em;">${siteConfig.name}</strong><span style="font-size:12px;opacity:0.85;">${siteConfig.description}</span></div>`);

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [lat, lng]);

  return (
    <section id="location" className="section-dark py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <p className="label-small text-muted-foreground mb-4">Visit</p>
          <h2 className="heading-section">Find Us</h2>
        </div>

        <div className="flex flex-col items-center text-center mb-8">
          <div className="flex items-center gap-3 mb-2">
            <MapPin className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
            <span className="body-regular font-medium">{siteConfig.name}</span>
          </div>
          <p className="body-regular text-muted-foreground mb-3">{siteConfig.address}</p>
          <p className="text-sm text-muted-foreground">{siteConfig.hours}</p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-12">
          <a
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border-2 border-foreground/40 hover:bg-foreground hover:text-background transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" strokeWidth={1.5} />
          </a>
          <a
            href={siteConfig.links.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border-2 border-foreground/40 hover:bg-foreground hover:text-background transition-all duration-300"
            aria-label="TikTok"
          >
            <TikTokIcon className="w-5 h-5" />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a href={siteConfig.links.googleMaps} target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center gap-2">
            <ExternalLink className="w-4 h-4" />
            Open in Google Maps
          </a>
          <a href={siteConfig.links.appleMaps} target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center gap-2">
            <ExternalLink className="w-4 h-4" />
            Open in Apple Maps
          </a>
        </div>

        <div className="max-w-4xl mx-auto border-2 border-foreground/40">
          <div ref={mapContainerRef} className="h-[400px] md:h-[500px] w-full" aria-label={`Map showing ${siteConfig.name} location`} />
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
