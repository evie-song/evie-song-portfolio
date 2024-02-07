/** @type {import('next').NextConfig} */
const nextConfig = process.env.NODE_ENV === 'production' ? {
  basePath: "/evie-song-portfolio",
  output: "export",
  // reactStrictMode: true,
  images: { unoptimized: true}
} :
{
  basePath: "",
  // output: "export",
  // reactStrictMode: true,
  images: { unoptimized: true}
};

export default nextConfig;
