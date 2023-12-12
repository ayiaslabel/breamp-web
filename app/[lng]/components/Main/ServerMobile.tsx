'use client';

import React, { useState } from 'react';
import { useTranslation } from '@i18n/client';
import Image from 'next/image';
import { Trans } from 'react-i18next/TransWithoutContext';
import Icon from '@[lng]/components/Icon';
import FloatingMenu from '@[lng]/components/FloatingMenu';
import Link from 'next/link';
import ServerModalMobile from '@[lng]/components/Main/ServerModalMobile';

type Props = {
  lng: string;
};
function ServerMobile({ lng }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation(lng, 'translation');
  return (
    <>
      <ServerModalMobile lng={lng} isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex flex-col justify-center items-center font-robotoMono">
        <div
          className=" max-w-3xl w-full relative overflow-x-hidden"
          style={{
            backgroundImage: 'url(/assets/img/server/grid.webp)',
            backgroundRepeat: 'repeat',
            backgroundSize: '20%',
          }}
        >
          <div className="absolute h-full w-full pt-20">
            <h1 className="uppercase font-audiowide text-center text-2xl yellow-neon-text">
              select the server
            </h1>
          </div>
          <img
            src="/assets/img/server/server_check_gray.webp"
            alt="check"
            className="absolute top-[7%] left-3 w-8 h-8 sm:w-14 sm:h-14 animate-flicker2"
          />
          <img
            src="/assets/img/server/server_check_red.webp"
            alt="check"
            className="absolute top-[14%] left-[40%] w-8 h-8 sm:w-14 sm:h-14 animate-flicker1"
          />
          <img
            src="/assets/img/server/server_check_gray.webp"
            alt="check"
            className="absolute top-[18%] left-[20%] w-8 h-8 sm:w-14 sm:h-14 animate-flicker1"
          />
          <img
            src="/assets/img/server/server_check_gray.webp"
            alt="check"
            className="absolute top-[28%] left-[25%] w-8 h-8 sm:w-14 sm:h-14 animate-flicker3"
          />
          <img
            src="/assets/img/server/server_check_gray.webp"
            alt="check"
            className="absolute top-[35%] left-[35%] w-8 h-8 sm:w-14 sm:h-14 animate-flicker2"
          />
          <img
            src="/assets/img/server/server_check_gray.webp"
            alt="check"
            className="absolute top-[40%] left-[15%] w-8 h-8 sm:w-14 sm:h-14 animate-flicker3"
          />
          <img
            src="/assets/img/server/server_check_gray.webp"
            alt="check"
            className="absolute top-[47%] left-[52%] w-8 h-8 sm:w-14 sm:h-14 animate-flicker1"
          />
          <div className="absolute top-[52%] left-[1%] w-full">
            <div className="relative w-full">
              <img
                src="/assets/img/server/server_check_yellow.webp"
                alt="check"
                className=" w-8 h-8 sm:w-14 sm:h-14 animate-flicker1"
              />
            </div>
          </div>
          <img
            src="/assets/img/server/server_arrow.webp"
            alt="check"
            className="absolute w-[60%] top-[39%] left-5 sm:left-7"
          />
          <div className="absolute w-[80%] top-[25%] aspect-[534/339] right-5">
            <div className="relative h-full">
              <img
                src="/assets/img/box/server_select_bg_text.webp"
                alt="check"
                className="absolute w-full"
              />
              <div className="w-[75%] translate-x-[28%] h-[65%] translate-y-[23%]">
                <div className="flex flex-col p-2 sm:p-4">
                  <img
                    src="/assets/img/icon/battle.webp"
                    className="w-6 h-6 sm:w-14 sm:h-14"
                    alt="battle"
                  />
                  <p className="uppercase font-timmana text-main text-sm sm:text-2xl mt-2">
                    asimo
                  </p>
                  <p className="uppercase font-dsdigital text-sm sm:text-xl">
                    USERS : 1,928
                  </p>
                  <button
                    className="absolute bottom-0 right-0 cursor-pointer hover:opacity-75"
                    onClick={() => setIsOpen(true)}
                  >
                    <div className="flex justify-end">
                      <img
                        src="/assets/img/button/enter_bg.webp"
                        alt="enter"
                        className="sm:w-[70%] w-[60%]"
                      />
                      <p className="absolute font-timmana text-[#EBFF00] uppercase pt-2.5 sm:pt-3 sm:text-xl w-[60%] sm:w-[70%] text-center h-full">
                        enter
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <img
            src="/assets/img/server/server_pointer.webp"
            alt="check"
            className="absolute top-[calc(52%-8px)] left-[calc(1%-8px)] w-12 h-12 sm:top-[calc(52%-9px)] sm:left-[calc(1%-9px)] sm:w-[75px] sm:h-[75px] animate-spin"
          />

          <img
            src="/assets/img/server/server_check_gray.webp"
            alt="check"
            className="absolute top-[66%] left-[18%] w-8 h-8 sm:w-14 sm:h-14 animate-flicker2"
          />
          <img
            src="/assets/img/server/server_check_gray.webp"
            alt="check"
            className="absolute top-[71%] left-[52%] w-8 h-8 sm:w-14 sm:h-14 animate-flicker1"
          />
          <img
            src="/assets/img/server/server_check_gray.webp"
            alt="check"
            className="absolute top-[76%] left-[2%] w-8 h-8 sm:w-14 sm:h-14 animate-flicker1"
          />
          <img
            src="/assets/img/server/server_check_gray.webp"
            alt="check"
            className="absolute top-[83%] left-[40%] w-8 h-8 sm:w-14 sm:h-14 animate-flicker2"
          />
          <Image
            src="/assets/img/server/server_stage.webp"
            className="z-[-1]"
            alt="bg"
            // fill
            // style={{
            //   objectFit: 'contain',
            // }}
            sizes="100vh"
            style={{
              width: '60%',
              height: 'auto',
            }}
            width={500}
            height={500}
          />
        </div>
      </div>
    </>
  );
}

export default ServerMobile;
