// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import { gltf } from "vite-plugin-gltf";

// export default defineConfig({
//   assetsInclude: ["**/*.glb"],
//   plugins: [react(), gltf()],
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import gltfPlugin from "vite-plugin-gltf";

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ["**/*.glb"],
  plugins: [react(), gltfPlugin()],
});
