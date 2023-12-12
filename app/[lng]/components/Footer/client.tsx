'use client';

import { useTranslation } from '@i18n/client';
import { FooterBase } from './FooterBase';

type Props = {
  lng : string;
  path? : string;
}
export function Footer({ lng, path }:Props) {
  const { i18n } = useTranslation(lng, 'footer');
  return <FooterBase i18n={i18n} lng={lng} path={path} />;
}
