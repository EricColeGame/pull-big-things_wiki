export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Pull Big Things Wiki",
  shortName: "Pull Big Things",
  logoText: "P",
  tagline: "Guides, Codes & Gameplay Tips",
  description: "A fan-made guide to Pull Big Things on Roblox, with gameplay tips, updates and code status.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://pull-big-things.wiki",
  supportEmail: "support@pull-big-things.wiki",
  gameUrl: "https://www.roblox.com/games/124502105874366/",
  heroVideoId: "",
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
