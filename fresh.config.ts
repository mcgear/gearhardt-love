import { curIconSetGenerateConfig } from "./fathym-atomic-icons.config.ts";
import { iconSetPlugin } from "@fathym/atomic-icons";

export default defineConfig({
  plugins: [
    ...
    await iconSetPlugin(curIconSetGenerateConfig),
    ...
  ],
});