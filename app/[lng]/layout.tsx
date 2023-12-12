import './global.css';

import { dir } from 'i18next';
import { Metadata } from 'next';
import { useTranslation } from '@i18n';
import { fallbackLng, languages } from '@i18n/settings';

import { Roboto_Mono, Audiowide, Roboto, Timmana } from 'next/font/google';

import localFont from 'next/font/local';

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
  return {
    title: t('title'),
    description:
      'A playground to explore new Next.js 13 app directory features such as nested layouts, instant loading states, streaming, and component level data fetching.',
  };
}
export default function RootLayout({ children, params: { lng } }: Props) {
  return (
    <html
      lang={lng}
      dir={dir(lng)}
      className={`${roboto.variable} ${timmana.variable} ${robotoMono.variable} ${audiowide.variable} ${dsDigital.variable}`}
    >
      <body className="custom-scroll">{children}</body>
    </html>
  );
}
