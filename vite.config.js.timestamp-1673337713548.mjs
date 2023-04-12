// vite.config.js
import { sveltekit } from "file:///D:/projects/misiki-commerce/node_modules/.pnpm/@sveltejs+kit@1.0.0-next.567_svelte@3.55.0+vite@3.2.5/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import { defineConfig, loadEnv } from "file:///D:/projects/misiki-commerce/node_modules/.pnpm/vite@3.2.5/node_modules/vite/dist/node/index.js";
var vite_config_default = defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const HTTP_ENDPOINT = env.PUBLIC_HTTP_ENDPOINT || "https://api.litekart.in";
  return {
    plugins: [sveltekit()],
    server: {
      host: true,
      port: 3e3,
      proxy: {
        "/api": HTTP_ENDPOINT
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9qZWN0c1xcXFxtaXNpa2ktY29tbWVyY2VcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHByb2plY3RzXFxcXG1pc2lraS1jb21tZXJjZVxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovcHJvamVjdHMvbWlzaWtpLWNvbW1lcmNlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgc3ZlbHRla2l0IH0gZnJvbSAnQHN2ZWx0ZWpzL2tpdC92aXRlJztcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSAndml0ZSc7XHJcbi8qKiBAdHlwZSB7aW1wb3J0KCd2aXRlJykuVXNlckNvbmZpZ30gKi9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IGNvbW1hbmQsIG1vZGUgfSkgPT4ge1xyXG5cdGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSwgJycpO1xyXG5cdGNvbnN0IEhUVFBfRU5EUE9JTlQgPSBlbnYuUFVCTElDX0hUVFBfRU5EUE9JTlQgfHwgJ2h0dHBzOi8vYXBpLmxpdGVrYXJ0LmluJztcclxuXHRyZXR1cm4ge1xyXG5cdFx0cGx1Z2luczogW3N2ZWx0ZWtpdCgpXSxcclxuXHRcdHNlcnZlcjoge1xyXG5cdFx0XHRob3N0OiB0cnVlLFxyXG5cdFx0XHRwb3J0OiAzMDAwLFxyXG5cdFx0XHRwcm94eToge1xyXG5cdFx0XHRcdCcvYXBpJzogSFRUUF9FTkRQT0lOVFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeVEsU0FBUyxpQkFBaUI7QUFDblMsU0FBUyxjQUFjLGVBQWU7QUFFdEMsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxTQUFTLEtBQUssTUFBTTtBQUNsRCxRQUFNLE1BQU0sUUFBUSxNQUFNLFFBQVEsSUFBSSxHQUFHLEVBQUU7QUFDM0MsUUFBTSxnQkFBZ0IsSUFBSSx3QkFBd0I7QUFDbEQsU0FBTztBQUFBLElBQ04sU0FBUyxDQUFDLFVBQVUsQ0FBQztBQUFBLElBQ3JCLFFBQVE7QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxRQUNOLFFBQVE7QUFBQSxNQUNUO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
