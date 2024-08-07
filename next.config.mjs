/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    AWS_ACCESS_KEY_ID: "AKIA47CR2TB6TBWQR4PB",
    AWS_SECRET_ACCESS_KEY: "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",
    AWS_REGION: "us-east-2",
    AWS_S3_BUCKET: "tec-buck",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tec-buck.s3.us-east-2.amazonaws.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
