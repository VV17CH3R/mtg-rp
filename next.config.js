/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    experimental: {
      serverActions: true,
    },
    images: {
        domains: ['res.cloudinary.com', "ncovgggrjiogvnverryj.supabase.co"],
        remotePatterns: [
          {
            protocol: "https",
            hostname: 'mtgtrade.net',
          },
        ],
      }
  }
  