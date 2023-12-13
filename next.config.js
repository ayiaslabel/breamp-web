// next.config.js:
const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require("next/constants");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  // 여기에 기존에 있던 다른 설정들을 추가합니다.
};

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
    const withPWA = require("@ducanh2912/next-pwa").default({
      disable: false,
      register: true,
      dest: "public",
      sw: "sw.js",
      cacheStartUrl: true,
      dynamicStartUrl: true,
      dynamicStartUrlRedirect,
      publicExcludes: ["!noprecache/**/*"],
      fallbacks: {},
      cacheOnFrontEndNav: false,
      aggressiveFrontEndNavCaching: false,
      reloadOnOnline: true,
      scope: basePath,
      customWorkerSrc: "worker",
      customWorkerDest: dest,
      customWorkerPrefix: "worker",
      workboxOptions: {},
      extendDefaultRuntimeCaching: false,
    });
    return withPWA(nextConfig);
  }
  return nextConfig;
};
