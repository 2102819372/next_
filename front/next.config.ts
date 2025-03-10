import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["picsum.photos"], // 添加你的域名
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/explore",
  //       locale: false,
  //     },
  //   ];
  // },
};

export default nextConfig;
