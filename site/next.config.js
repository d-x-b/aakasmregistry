/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'A Kasm Registry',
    description: 'Some Kasm workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://d-x-b.github.io/aakasmregistry/',
    contactUrl: 'https://d-x-b.github.io/aakasmregistry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/aakasmregistry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
