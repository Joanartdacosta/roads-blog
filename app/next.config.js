// /** @type {import('next').NextConfig} */

// module.exports = {
//   images: {
//     nremotePatterns: [
//       {
//         protocol: "https",
//         hostname: "estradas-website.s3.amazonaws.com",
//         port: "",
//         pathname: "s3/buckets/estradas-website/**",
//       },
//     ],
//   },
// };

// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "assets.example.com",
//         port: "",
//         pathname: "/account123/**",
//       },
//     ],
//   },
// };

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ["abc.def.org"],
//   },
// };

// module.exports = nextConfig;

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
