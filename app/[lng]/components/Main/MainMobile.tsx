'use client';

import React from 'react';
import { useTranslation } from '@i18n/client';
import Image from 'next/image';
import { Trans } from 'react-i18next/TransWithoutContext';
import Icon from '@[lng]/components/Icon';
import FloatingMenu from '@[lng]/components/FloatingMenu';
import Link from 'next/link';

type Props = {
  lng: string;
};
function MainMobile({ lng }: Props) {
  const { t, i18n } = useTranslation(lng, 'translation');

  return (
    <>
      <div className="flex flex-col justify-center items-center font-robotoMono">
        <div className="min-h-screen flex justify-start flex-col max-w-3xl w-full relative">
          <div className="absolute h-full w-full p-5">
            <div className="flex justify-center items-center flex-col w-full h-full">
              <div className="relative aspect-[330/80] w-[95%] ">
                <Image
                  src="/assets/img/logo/breamp_shadow.webp"
                  alt="logo"
                  fill
                  sizes="500px"
                  className="shadow-lg"
                  style={{
                    objectFit: 'contain',
                  }}
                />
              </div>
              <div className="relative w-full aspect-[620/330]">
                <div className="absolute h-full w-full  z-10">
                  <div className="flex flex-col justify-center items-center h-full">
                    <div className={`text-center uppercase text-base sm:mb-5 lg:text-3xl ${
                      lng === 'en' ? 'font-robotoMono' :
                      lng === 'kr' ? 'font-robotoMono' :
                      lng === 'ja' ? 'font-ja' :
                      lng === 'vi' ? 'font-vi' :
                      'font-default'
                    }`}>
                      <p className="text-xs sm:text-xl lg:text-2xl">
                        <Trans i18nKey="login.1" t={t}>
                          <div />
                          <span className="text-yellow-400">
                            Discord account
                          </span>
                        </Trans>
                      </p>
                      <p className="text-xs sm:text-xl lg:text-2xl">
                        <Trans i18nKey="login.2" t={t} />
                      </p>
                      <p className="text-xs sm:text-xl lg:text-2xl">
                        <Trans i18nKey="login.3" t={t} />
                      </p>
                    </div>
                    <div className="mt-3 flex flex-col sm:gap-y-2 xl:gap-y-4">
                      <Link href={`/${lng}/server`}>
                        <button className="bg-black w-[200px] py-2 text-xs sm:text-xl sm:w-[300px] lg:w-[400px] lg:h-[60px] lg:text-2xl uppercase relative button-shadow text-center">
                          <Icon.Discord className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 absolute top-[52%] left-3 translate-y-[-50%]" />
                          login
                        </button>
                      </Link>
                      <button className="bg-black w-[200px] py-2 text-xs sm:text-xl sm:w-[300px] lg:w-[400px] lg:h-[60px] lg:text-2xl uppercase relative button-shadow text-center">
                        <Icon.Discord className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 absolute top-[52%] left-3 translate-y-[-50%]" />
                        join the beta
                      </button>
                    </div>
                  </div>
                </div>
                <Image
                  src="/assets/img/box/login.webp"
                  className="z-[0] backdrop-blur-md"
                  alt="box"
                  fill
                  sizes="500px"
                  style={{
                    objectFit: 'contain',
                  }}
                />
              </div>
            </div>
          </div>
          <div className="bottom-[10%] absolute left-[50%] translate-x-[-50%]">
            <Icon.MainArrow className="animate-bounce" />
          </div>
          <div className="bg-black" style={{ minHeight: '50px', width: '100%' }} />
          <Image
            src="/assets/img/main/1.gif"
            className="z-[-1]"
            alt="bg"
            // fill
            // style={{
            //   objectFit: 'contain',
            // }}
            sizes="100vh"
            style={{
              width: '100%',
              height: 'auto',
            }}
            width={500}
            height={500}
          />
          <Image
            src="/assets/img/main/2.gif"
            className="z-[-1]"
            alt="bg"
            // fill
            // style={{
            //   objectFit: 'contain',
            // }}
            sizes="100vh"
            style={{
              width: '100%',
              height: 'auto',
            }}
            width={500}
            height={500}
          />
          <Image
            src="/assets/img/main/3.gif"
            className="z-[-1]"
            alt="bg"
            // fill
            // style={{
            //   objectFit: 'contain',
            // }}
            sizes="100vh"
            style={{
              width: '100%',
              height: 'auto',
            }}
            width={500}
            height={500}
          />
          <div className="bg-black" style={{ minHeight: '50px', width: '100%' }} />
        </div>
        <div className="bg-[#1B1C1C] max-w-3xl w-full flex flex-col p-5">
          <div className="flex flex-row items-center gap-x-4">
            <button className="bg-black py-2 text-xs sm:text-xl flex-1 uppercase relative button-shadow">
              <Icon.Discord className="w-5 h-5 sm:w-8 sm:h-8 absolute top-[52%] left-2 translate-y-[-50%]" />
              invite bot
            </button>
            <button className="bg-black py-2 text-xs sm:text-xl flex-1 uppercase relative button-shadow">
              <Icon.Discord className="w-5 h-5 sm:w-8 sm:h-8 absolute top-[52%] left-2 translate-y-[-50%]" />
              get started
            </button>
          </div>
          <div className="mt-5 flex flex-col gap-y-5 uppercase text-main relative">
            <h1 className="mt-5 text-lg">about</h1>
            <p className="whitespace-pre-wrap font-light">
              <Trans i18nKey="about" t={t} />
            </p>
            <h1 className="mt-5 text-lg">CONTACT</h1>
            <p className="whitespace-pre-wrap font-light">
              <Trans i18nKey="contact" t={t} />
            </p>
            <div className="mt-5 flex flex-col mb-10">
              <Link className="hover:opacity-75" href={`/${lng}/terms`}>
                <Trans i18nKey="terms.title" t={t} />
              </Link>
              <Link className="hover:opacity-75" href={`/${lng}/privacy`}>
                <Trans i18nKey="privacy.title" t={t} />
              </Link>
            </div>
            <p className="absolute -bottom-3 -right-3 text-xs text-white font-light">
              BREAMP Ver 1.0.0
            </p>
          </div>
        </div>
      </div>
      <FloatingMenu lng={lng} />
    </>
  );
}

export default MainMobile;
