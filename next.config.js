/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 🔥 required for GitHub Pages static hosting

  images: {
    unoptimized: true, // 🔥 required because Next Image optimization doesn't work on GitHub Pages
  },

  trailingSlash: true, // 🔥 prevents routing issues on static hosting

  basePath: process.env.NODE_ENV === "production" ? "/Portfolio-website" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/Portfolio-website/" : "",
};

module.exports = nextConfig;