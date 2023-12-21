/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.estradas-website.s3.amazonaws.com",
        port: "",
        pathname: "/Estradas/**",
      },
    ],
  },
};

module.exports = nextConfig;
