/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: "creazilla-store.fra1.digitaloceanspaces.com",
          },
        ],
      },
}

module.exports = nextConfig
