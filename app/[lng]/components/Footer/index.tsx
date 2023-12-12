import { useTranslation } from '@i18n';
import { FooterBase } from './FooterBase';

type Props = {
  lng : string;
  path? : string;
}
export const Footer = async ({ lng, path }: Props) => {
  const { t, i18n } = await useTranslation(lng, 'footer');
  return <FooterBase i18n={i18n} lng={lng} path={path ?? ''} />;
};
