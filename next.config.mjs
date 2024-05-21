/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // protocol: "https",
        hostname: "*.googleusercontent.com", // lh3.googleusercontent.com
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
};

export default nextConfig;
