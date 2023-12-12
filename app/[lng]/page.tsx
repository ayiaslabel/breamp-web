import Link from 'next/link';
import { Trans } from 'react-i18next/TransWithoutContext';
import { languages, fallbackLng } from '@i18n/settings';
import { useTranslation } from '@i18n';
import MainMobile from '@[lng]/components/Main/MainMobile';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export default async function Page({ params: { lng } }: LanguageProps) {
  const { t } = await useTranslation(
    languages.indexOf(lng) < 0 ? fallbackLng : lng,
  );

  return (
    <>
      <main>
        <MainMobile lng={lng} />
      </main>
    </>
  );
}
