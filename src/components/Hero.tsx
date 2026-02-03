import { ChevronDown } from "lucide-react";
import heroCover from "@/assets/hero-cover.png";
import { siteConfig } from "@/config/site";

const Hero = () => {

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center section-dark px-6 pt-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img 
          src={heroCover} 
          alt={`${siteConfig.name} storefront`}
          className="w-full h-full object-cover opacity-70"
        />
      </div>
      
      <div className="text-center max-w-4xl mx-auto z-10">
        <h1 className="heading-hero mb-4 animate-fade-in">{siteConfig.name}</h1>
        <p className="body-large text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
          {siteConfig.tagline}
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8" strokeWidth={3} />
      </div>
    </section>
  );
};

export default Hero;
