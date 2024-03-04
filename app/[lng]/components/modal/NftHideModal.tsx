'use client';

import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import { useTranslation } from '@i18n/client';
import { Trans } from 'react-i18next/TransWithoutContext';
import Link from 'next/link';
import { stores } from '@stores';

interface Props extends LanguageCompProps {
  onDone: () => void;
}
function NftHideModal({ lng, onDone }: Props) {
  const { nftHidden: isOpen, setNftHidden: setIsOpen } =
    stores.modal.useModal();
  const { t } = useTranslation(lng, 'nft');

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
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
            <div className="fixed inset-0 bg-black/50" />
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
                <Dialog.Panel className="w-full max-w-xl h-auto overflow-hidden  md:p-6 text-left align-middle shadow-xl transition-all flex justify-center items-center">
                  <div className="relative w-full flex justify-center items-center">
                    <img
                      src="/assets/img/box/nft_hidden.webp"
                      className="w-full backdrop-blur"
                      alt="box"
                    />
                    <div className="absolute top-0 left-0 w-full h-full p-[10%]">
                      <div className="relative w-full h-full flex flex-col justify-between">
                        <h1 className="font-robotoMono text-white uppercase text-base">
                          <Trans t={t} i18nKey="hide">
                            <span className="" />
                            <span className="text-red-400">hidden tab</span>
                            <span className="text-red-400">hidden tab</span>
                          </Trans>
                        </h1>

                        <div className="relative mt-1 flex gap-x-10">
                          <button
                            className=" flex justify-center items-center flex-1 relative aspect-[140/40]"
                            onClick={() => {
                              setIsOpen(false);
                              onDone();
                            }}
                          >
                            <img
                              src="/assets/img/button/nft_blue_btn.webp"
                              alt="btn"
                              className="absolute w-full aspect-[140/40] top-0 left-0"
                            />
                            <p className="relative">KEEP</p>
                          </button>
                          <button
                            className=" flex justify-center items-center flex-1 relative aspect-[140/40]"
                            onClick={() => {
                              setIsOpen(false);
                              onDone();
                            }}
                          >
                            <img
                              src="/assets/img/button/nft_red_btn.webp"
                              alt="btn"
                              className="absolute w-full aspect-[140/40] top-0 left-0"
                            />
                            <p className="relative">HIDE</p>
                          </button>
                        </div>
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

export default NftHideModal;
