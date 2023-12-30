import { defineConfig } from "astro/config";
import { BASE_CONFIG, SITE_CONFIG } from "./src/utils/config-utils.ts";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: SITE_CONFIG,
  base: BASE_CONFIG,
});
