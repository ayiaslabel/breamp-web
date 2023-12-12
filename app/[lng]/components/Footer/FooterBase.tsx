import { i18n as I18N } from 'i18next';
import Link from 'next/link';
import { Trans } from 'react-i18next/TransWithoutContext';
import { languages } from '@i18n/settings';

type Props = {
    i18n: I18N;
    lng: string;
    path?: string;
}

export function FooterBase({ i18n, lng, path = '' }: Props) {
  const t = i18n.getFixedT(lng, 'footer');
  return (
    <footer>
      <Trans i18nKey="languageSwitcher" t={t}>
        Switch from
        {' '}
        <strong>{`{ ${lng} }`}</strong>
        {' '}
        to:
        {' '}
      </Trans>
      {languages.filter((l) => lng !== l).map((l, index) => (
        <span key={l}>
          {index > 0 && (' or ')}
          <Link href={`/${l}${path}`}>
            {l}
          </Link>
        </span>
        ))}
      <p>{t('description')}</p>
      <p
        style={{
          fontSize: 'smaller',
          fontStyle: 'italic',
          marginTop: 20,
        }}
      >
        <Trans i18nKey="helpLocize" t={t}>
          With using
          <a href="https://locize.com" target="_new">
            locize
          </a>
          you directly support the future of
          <a href="https://www.i18next.com" target="_new">
            i18next
          </a>
          .
        </Trans>
      </p>
    </footer>
  );
}
