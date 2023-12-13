// next.config.js:
const withPWA = require('next-pwa');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = withPWA({
  ...nextConfig,
  pwa: {
    dest: 'public', // PWA 파일이 저장될 폴더
    register: true, // 서비스 워커 등록 여부
    skipWaiting: true, // 서비스 워커가 즉시 활성화되도록 설정
    swSrc: 'service-worker.js', // 커스텀 Service Worker 파일 경로
    // 필요한 경우 추가 설정을 할 수 있습니다.
  },
});
