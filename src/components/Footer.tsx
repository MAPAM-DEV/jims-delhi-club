import { Instagram } from "lucide-react";
import { siteConfig } from "@/config/site";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export { TikTokIcon };

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
