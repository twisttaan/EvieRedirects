/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      /*
       * TeamEvie Link Shortcuts
       */

      {
        source: "/discord",
        destination: "https://discord.gg/VKaNS86wEN",
        permanent: true,
      },
      {
        source: "/invite",
        destination: "https://discord.com/api/oauth2/authorize?client_id=807543126424158238&permissions=1461257808918&scope=bot%20applications.commands",
        permanent: true,
      },
      {
        source: "/bot",
        destination: "https://eviebot.rocks",
        permanent: false, // Migrating eviebot.rocks soon to this repo
      },
      {
        source: "/botgh",
        destination: "https://github.com/twisttaan/Evie",
        permanent: false,
      },
      {
        source: "/jwrld",
        destination: "https://discord.com/api/oauth2/authorize?client_id=961142622636871781&permissions=3146752&scope=bot%20applications.commands",
        permanent: false,
      },
      {
        source: "/jwrld-privacy",
        destination: "https://gist.github.com/twisttaan/5299919a4f760b71df87ec15c3beb85b",
        permanent: false,
      },

      /*
       * Personal Link Shortcuts
       */

      {
        source: "/tristan",
        destination: "https://github.com/twisttaan",
        permanent: false, // Once https://tristancamejo.com/ is finished, this will be permanent
      },
      {
        source: "/tsmp",
        destination: "https://tristansmp.com",
        permanent: true, // Once https://tristancamejo.com/ is finished, this will be permanent
      },
    ];
  },
};

module.exports = nextConfig;
