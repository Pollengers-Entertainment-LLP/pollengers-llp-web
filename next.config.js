/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/',          // pollengers.com
        destination: '/the-band',
        permanent: true,      // SEO-friendly 301 redirect
      },
    ];
  },
};

module.exports = nextConfig;
