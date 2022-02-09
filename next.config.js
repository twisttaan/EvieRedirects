/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/VKaNS86wEN",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
