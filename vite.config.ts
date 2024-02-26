import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { name } from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  base: `/${name}/`,
  plugins: [react()],
});
