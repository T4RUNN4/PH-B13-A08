/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ecdn.dhakatribune.net',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
