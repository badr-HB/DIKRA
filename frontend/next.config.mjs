import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images : {
    domains:["images.unsplash.com"]
  }
};

export default withNextVideo(nextConfig);