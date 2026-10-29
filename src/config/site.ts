export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
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
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://pull-big-things.wiki").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/124502105874366/",
  heroVideoId: "R1mKfg4vDUU", // Pull Big Things gameplay
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
