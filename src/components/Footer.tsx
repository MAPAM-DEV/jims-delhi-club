import { Instagram } from "lucide-react";
import { siteConfig } from "@/config/site";
import TikTokIcon from "./icons/TikTokIcon";

const Footer = () => (
  <footer className="section-dark border-t-[3px] border-orange py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col items-center text-center">
        <p className="text-lg font-semibold tracking-[0.2em] mb-6">{siteConfig.name}</p>
        <div className="flex items-center gap-4 mb-6">
          <a
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className="social-icon" />
          </a>
          <a
            href={siteConfig.links.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <TikTokIcon className="social-icon" />
          </a>
        </div>
        <p className="text-sm text-muted-foreground">Follow for updates & today's specials.</p>
        <p className="text-xs text-muted-foreground mt-8">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
