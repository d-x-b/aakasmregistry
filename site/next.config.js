/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'A Kasm Registry',
    description: 'Some Kasm workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/d-x-b/aakasmregistry/',
    contactUrl: 'https://github.com/d-x-b/aakasmregistry/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/tree/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
