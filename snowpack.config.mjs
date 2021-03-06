/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: { url: "/", static: true },
    src: { url: "/dist" },
  },
  plugins: ["@snowpack/plugin-react-refresh", "@snowpack/plugin-dotenv", "@snowpack/plugin-postcss"],
  routes: [
    /* Enable an SPA Fallback in development: */
    { match: "routes", src: ".*", dest: "/index.html" },
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
    tailwindConfig: "./tailwind.config.js",
    port: 3000,
  },
  buildOptions: {
    /* ... */
  },
  env: {
    API_URL: "https://api.github.com/users",
  },
};
