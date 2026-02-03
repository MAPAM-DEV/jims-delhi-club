import { useState } from "react";
import menuJanuary from "@/assets/menu-january-2026.png";
import ImageLightbox from "./ImageLightbox";

const MenuSection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <section id="menu" className="section-light py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8">
          <p className="label-small text-white/70 mb-4">Fresh Every Month</p>
          <h2 className="heading-section text-white mb-6">The Menu</h2>
          <p className="body-regular text-white/80 max-w-xl mx-auto">
            Our menu changes monthly, featuring fresh seasonal ingredients and creative new dishes. 
            Check back each month to see what's cooking!
          </p>
        </div>

        {/* Current Month Badge */}
        <div className="text-center mb-8">
          <span className="inline-block bg-white/20 border-2 border-white text-white px-6 py-2 text-sm uppercase tracking-[0.15em] font-medium">
            January 2026
          </span>
        </div>

        {/* Menu Image */}
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => setLightboxOpen(true)}
            className="w-full border-[3px] border-white bg-white/10 p-6 md:p-8 cursor-pointer hover:bg-white/20 transition-colors group"
          >
            <img
              src={menuJanuary}
              alt="Loom Deli January 2026 menu featuring Keema Chacos, Spiced Haggis Naanwich, Smashed Pakora Butty, Chicken Tikka Masala Soup, and Mango Sticky Rice"
              className="w-full h-auto group-hover:opacity-90 transition-opacity"
            />
          </button>
        </div>

        {/* Note */}
        <p className="text-center text-white/70 text-sm mt-8 max-w-lg mx-auto">
          Please inform staff of any allergens. Menu items and prices may vary.
          Follow our socials for daily specials!
        </p>
      </div>

      {/* Lightbox */}
      <ImageLightbox
        src={menuJanuary}
        alt="Loom Deli January 2026 menu"
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
};

export default MenuSection;
