import './global.css';

import { dir } from 'i18next';
import { Metadata } from 'next';
import Head from 'next/head';
import { useTranslation } from '@i18n';
import { fallbackLng, languages } from '@i18n/settings';

import { Roboto_Mono, Audiowide, Roboto, Timmana } from 'next/font/google';

import localFont from 'next/font/local';
import AudioPlayerComp from '@[lng]/components/common/AudioPlayerComp';

const dsDigital = localFont({
  src: [
    {
      path: '../fonts/ds-digi.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/ds-digii.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/ds-digib.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/ds-digit.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  display: 'swap',

  variable: '--digital',
});

const roboto = Roboto({
  // subsets: ['latin', 'vietnamese'],
  preload: false,
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--roboto',
});
const robotoMono = Roboto_Mono({
  // subsets: ['latin', 'vietnamese'],
  preload: false,
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--roboto-mono',
});
const timmana = Timmana({
  // subsets: ['latin', 'vietnamese'],
  preload: false,
  weight: '400',
  variable: '--timmana',
});
const audiowide = Audiowide({
  // subsets: ['latin', 'vietnamese'],
  preload: false,
  weight: '400',
  variable: '--audiowide',
});

export async function generateStaticParams() {
  return languages.map((lng) => ({
    lng,
  }));
}

type Props = {
  children: React.ReactNode;
  params: {
    lng: string;
  };
};

export async function generateMetadata({
  params: { lng },
}: Props): Promise<Metadata> {
  const { t } = await useTranslation(
    languages.indexOf(lng) < 0 ? fallbackLng : lng,
  );

  const APP_NAME = t('앱 네임 브림프'); // 번역 파일에서 앱 이름
  const APP_DEFAULT_TITLE = t('app_default_title'); // 번역 파일에서 기본 타이틀
  const APP_TITLE_TEMPLATE = '%s - ' + APP_NAME;
  const APP_DESCRIPTION = t('app_description'); // 번역 파일에서 앱 설명

  return {
    applicationName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    manifest: '/manifest.json',
    appleWebApp: {
      capable: true,
      statusBarStyle: 'default',
      title: APP_DEFAULT_TITLE,
    },
    formatDetection: {
      telephone: false,
    },
    openGraph: {
      type: 'website',
      siteName: APP_NAME,
      title: {
        default: APP_DEFAULT_TITLE,
        template: APP_TITLE_TEMPLATE,
      },
      description: APP_DESCRIPTION,
    },
    twitter: {
      card: 'summary',
      title: {
        default: APP_DEFAULT_TITLE,
        template: APP_TITLE_TEMPLATE,
      },
      description: APP_DESCRIPTION,
    },
  };
}

export default function RootLayout({ children, params: { lng } }: Props) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        {/* 다른 <head> 요소들이 필요한 경우 여기에 추가 */}
      </Head>
      <body
        className={`custom-scroll ${audiowide.className} ${robotoMono.variable} ${roboto.variable} ${dsDigital.variable}`}
      >
        <AudioPlayerComp />
        {children}
      </body>
    </html>
  );
}

//
