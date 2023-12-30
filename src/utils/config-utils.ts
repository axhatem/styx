const IS_DEV = process.env.NODE_ENV === "development";

export const SITE_CONFIG = "https://axhatem.github.io";
export const BASE_CONFIG = IS_DEV ? "" : "/styx";

export function withBase(url: string): string {
  return BASE_CONFIG ? `${BASE_CONFIG}${url}` : url;
}
