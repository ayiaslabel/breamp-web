'use client';

import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import { useTranslation } from '@i18n/client';
import { Trans } from 'react-i18next/TransWithoutContext';
import Link from 'next/link';

interface Props extends LanguageCompProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
function ServerModalMobile({ lng, isOpen, setIsOpen }: Props) {
  const { t } = useTranslation(lng, 'server');

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        {/* eslint-disable-next-line react/jsx-no-bind */}
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl h-screen overflow-hidden bg-black p-6 text-left align-middle shadow-xl transition-all flex justify-center items-center">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-5 right-5 font-dsdigital text-4xl text-main"
                  >
                    X
                  </button>
                  <div className="relative w-full h-full flex justify-center items-center">
                    <img
                      src="/assets/img/box/agree.webp"
                      alt="box"
                      className="absolute w-full translate-y-[-50%] top-[50%] pb-10"
                    />
                    <div className="w-[80%] mx-auto flex justify-center items-center flex-col pb-10 z-[1]">
                      <p className="font-roboto text-center text-[10px] md:text-xl">
                        <Trans t={t} i18nKey="terms">
                          <div />
                          <span className="text-[#EBFF00]">terms</span>
                        </Trans>
                      </p>
                      <p className="font-roboto text-center text-[10px] md:text-xl">
                        <Trans t={t} i18nKey="privacy">
                          <div />
                          <span className="text-[#EBFF00]">terms</span>
                          <span className="text-main">terms</span>
                        </Trans>
                      </p>
                      <p className="font-roboto text-center text-[#EBFF00] mt-2 text-[9px] md:text-sm md:mt-5">
                        <Trans t={t} i18nKey="desc" />
                      </p>
                    </div>

                    <div className="absolute top-[70%] translate-y-[-50%] md:top-[80%] hover:opacity-75 cursor-pointer">
                      <Link href={`/${lng}/home`}>
                        <div className="relative max-w-[150px] mx-auto">
                          <img
                            src="/assets/img/button/start_bg.webp"
                            alt="bg"
                          />
                          <p className="font-timmana text-xl absolute text-center uppercase top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-main">
                            start
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default ServerModalMobile;
