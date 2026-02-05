import { ExternalLink } from "lucide-react";
import interiorImg from "@/assets/interior.png";
import { siteConfig } from "@/config/site";
import DecorativeDivider from "./DecorativeDivider";

const AtmosphereSection = () => (
  <section id="atmosphere" className="section-light py-24 md:py-32 relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center mb-16">
        <DecorativeDivider className="mb-6" />
        <h2 className="heading-section text-white mb-8" style={{ WebkitTextStroke: '2px hsl(39 90% 48%)' }}>About Us</h2>
        <p className="body-regular text-white/70 max-w-lg mx-auto">
          We express our love for food and cooking by serving quality fresh delhi meals
          in a friendly, inviting environment. Take Your food to go or stay for a chat;
          regardless, You'll be leaving with good food <strong>and</strong> mood.
        </p>
      </div>

      <div className="max-w-xl mx-auto">
        <div className="overflow-hidden border-[3px] border-white outline outline-[3px] outline-offset-2 outline-orange">
          <img src={interiorImg} alt={`Inside ${siteConfig.name}`} className="w-full h-64 md:h-80 object-cover img-industrial hover:scale-105 transition-transform duration-700" />
        </div>
      </div>

      <div className="mt-16 max-w-2xl mx-auto text-center">
        <p className="label-small text-white/70 mb-6">What People Write About Us</p>
        <div className="flex flex-col gap-4 max-w-lg mx-auto">
          {siteConfig.pressArticles.map((article) => (
            <div key={article.url} className="flex items-center justify-between px-4 py-3 border-[3px] border-white outline outline-[3px] outline-offset-2 outline-orange bg-white/5">
              <span className="text-white text-sm">
                <span className="font-semibold">{article.platform}:</span> {article.title}
              </span>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border-[3px] border-white outline outline-[3px] outline-offset-2 outline-orange text-white hover:bg-white hover:text-background transition-colors flex-shrink-0 ml-3"
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
