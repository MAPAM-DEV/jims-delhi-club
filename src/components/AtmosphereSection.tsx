import { ExternalLink } from "lucide-react";
import interiorImg from "@/assets/interior.png";
import storefrontImg from "@/assets/storefront.png";
import { siteConfig } from "@/config/site";

const AtmosphereSection = () => (
  <section id="atmosphere" className="section-light py-24 md:py-32 relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center mb-16">
        <h2 className="heading-section text-black mb-8">About Us</h2>
        <p className="body-regular text-black/70 max-w-lg mx-auto">
          Serving quality coffee and fresh deli food from a beautifully restored 
          historic building in the heart of Dundee. Every cup crafted with care, 
          every bite made fresh.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
        <div className="overflow-hidden border-[3px] border-black">
          <img src={interiorImg} alt={`Inside ${siteConfig.name}`} className="w-full h-64 md:h-80 object-cover img-industrial hover:scale-105 transition-transform duration-700" />
        </div>
        <div className="overflow-hidden border-[3px] border-black">
          <img src={storefrontImg} alt={`${siteConfig.name} storefront`} className="w-full h-64 md:h-80 object-cover img-industrial hover:scale-105 transition-transform duration-700" />
        </div>
      </div>

      <div className="mt-16 max-w-2xl mx-auto text-center">
        <p className="label-small text-black/70 mb-6">In The Press</p>
        <p className="body-regular text-black/70 mb-8">
          We've been featured in The Courier — read what they had to say about us.
        </p>
        <div className="flex flex-col gap-3 max-w-md mx-auto">
          {siteConfig.pressArticles.map((article) => (
            <div key={article.url} className="flex items-center justify-between px-4 py-3 border-2 border-black/30 bg-black/5">
              <span className="text-black text-sm">{article.title}</span>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border-2 border-black text-black hover:bg-black hover:text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4" strokeWidth={2} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AtmosphereSection;
