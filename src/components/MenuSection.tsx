import { useState } from "react";
import menuJanuary from "@/assets/menu-january-2026.png";
import ImageLightbox from "./ImageLightbox";
import { siteConfig } from "@/config/site";

const MenuSection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <section id="menu" className="section-light py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-8">
          <p className="label-small text-white/70 mb-4">Fresh Every Month</p>
          <h2 className="heading-section text-white mb-6">The Menu</h2>
          <p className="body-regular text-white/80 max-w-xl mx-auto">
            Our menu changes monthly, featuring fresh seasonal ingredients and creative new dishes. 
            Check back each month to see what's cooking!
          </p>
        </div>

        <div className="text-center mb-8">
          <span className="inline-block bg-white/20 border-2 border-white text-white px-6 py-2 text-sm uppercase tracking-[0.15em] font-medium">
            {siteConfig.currentMenu.month}
          </span>
        </div>

        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => setLightboxOpen(true)}
            className="w-full border-[3px] border-white bg-white/10 p-6 md:p-8 cursor-pointer hover:bg-white/20 transition-colors group"
          >
            <img
              src={menuJanuary}
              alt={`${siteConfig.name} ${siteConfig.currentMenu.month} menu`}
              className="w-full h-auto group-hover:opacity-90 transition-opacity"
            />
          </button>
        </div>

        <p className="text-center text-white/70 text-sm mt-8 max-w-lg mx-auto">
          Please inform staff of any allergens. Menu items and prices may vary.
          Follow our socials for daily specials!
        </p>
      </div>

      <ImageLightbox
        src={menuJanuary}
        alt={`${siteConfig.name} ${siteConfig.currentMenu.month} menu`}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
};

export default MenuSection;
