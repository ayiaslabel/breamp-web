'use client';

import React from 'react';
import Icon from '@[lng]/components/Icon';
import Link from 'next/link';
import { useTranslation } from '@i18n/client';
import { Trans } from 'react-i18next/TransWithoutContext';
import FloatingMenu from '@[lng]/components/FloatingMenu';

const list = ['one', 'two', 'three', 'four'];
function PrivacyMobile({ lng }: LanguageCompProps) {
  const { t } = useTranslation(lng, 'translation');
  return (
    <>
      <div className="flex flex-col justify-center items-center font-robotoMono">
        <div className=" max-w-3xl w-full relative bg-[#1B1C1C] pb-10 custom-scrollbar min-h-screen">
          <div className="p-5 text-main ">
            <Link
              className="font-audiowide uppercase flex flex-row items-center gap-x-3 text-sm"
              href={`/${lng}`}
            >
              <Icon.BackArrow />
              {'back>privacy policy'}
            </Link>
            <div className="mt-10">
              <h1 className="text-lg font-audiowide text-center uppercase">
                <Trans t={t} i18nKey="privacy.title" />
              </h1>
              {list.map((order) => (
                <div key={order}>
                  <h2 className="text-base uppercase mt-5">
                    <Trans t={t} i18nKey={`privacy.${order}.title`} />
                  </h2>
                  <p className="text-sm uppercase mt-5">
                    <Trans t={t} i18nKey={`privacy.${order}.desc`} />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <FloatingMenu lng={lng} />
    </>
  );
}

export default PrivacyMobile;
