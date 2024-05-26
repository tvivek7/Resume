/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: isProd ? '/Resume' : '',
  assetPrefix: isProd ? '/Resume/' : '',
  trailingSlash: true,
}

module.exports = nextConfig
