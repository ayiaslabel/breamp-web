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
      dest: "public", // PWA 파일이 저장될 폴더
      register: true, // 서비스 워커 등록 여부
      skipWaiting: true, // 서비스 워커가 즉시 활성화되도록 설정
      sw: '/sw.js', // 커스텀 Service Worker 파일 경로
    });
    return withPWA(nextConfig);
  }
  return nextConfig;
};
