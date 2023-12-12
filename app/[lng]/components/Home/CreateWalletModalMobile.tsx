'use client';

import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import { useTranslation } from '@i18n/client';
import { Trans } from 'react-i18next/TransWithoutContext';
import Link from 'next/link';

interface Props extends LanguageCompProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onDone: () => void;
}
function CreateWalletModalMobile({ lng, isOpen, setIsOpen, onDone }: Props) {
  const { t } = useTranslation(lng, 'wallet');

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
                <Dialog.Panel className="w-full max-w-3xl h-auto overflow-hidden  md:p-6 text-left align-middle shadow-xl transition-all flex justify-center items-center">
                  <div className="relative w-full flex justify-center items-center">
                    <img
                      src="/assets/img/box/create_wallet.webp"
                      className="w-full backdrop-blur"
                      alt="box"
                    />
                    <div className="absolute top-0 left-0 w-full h-full p-[10%]">
                      <div className="relative w-full h-full flex flex-col justify-between">
                        <h1 className="font-timmana text-main uppercase text-base">
                          <Trans t={t} i18nKey="connect.title" />
                        </h1>
                        <p className="font-robotoMono text-xs">
                          <Trans t={t} i18nKey="connect.desc" />
                        </p>

                        <p className="font-robotoMono text-[10px] text-[#EBFF00]">
                          <span className="border border-[#EBFF00] rounded-full mr-1 text-[8px] aspect-square w-4 h-4 text-center inline-block">
                            !
                          </span>
                          <Trans t={t} i18nKey="connect.caution" />
                        </p>
                        <button
                          className="relative mt-1"
                          onClick={() => {
                            setIsOpen(false);
                            onDone();
                          }}
                        >
                          <img
                            src="/assets/img/button/create_wallet.webp"
                            alt="btn"
                          />
                        </button>
                        <button
                          className="uppercase text-right text-xs mt-1 text-red-500"
                          onClick={() => setIsOpen(false)}
                        >
                          back to the main page
                        </button>
                      </div>
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

export default CreateWalletModalMobile;
