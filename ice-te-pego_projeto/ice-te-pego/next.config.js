/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"], // imagens leves para 3G/4G
  },
};
module.exports = nextConfig;
