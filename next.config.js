/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '',
  assetPrefix:'',
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig;
