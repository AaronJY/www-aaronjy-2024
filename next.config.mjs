/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true // ensure pages get their own directory in output
}

export default nextConfig
