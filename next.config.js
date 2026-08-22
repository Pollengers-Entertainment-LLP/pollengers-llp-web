/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  //ADD THIS SECTION to allow Google Drive images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        pathname: '**',
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/',          // pollengers.com
        destination: '/services',
        permanent: true,      // SEO-friendly 301 redirect
      },
    ];
  },
};

module.exports = nextConfig;