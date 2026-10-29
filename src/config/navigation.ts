export const NAVIGATION_CONFIG = [] as ReadonlyArray<{
  key: keyof (typeof import("@/locales/en.json"))["nav"];
  path: string;
  isContentType: boolean;
}>;

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
