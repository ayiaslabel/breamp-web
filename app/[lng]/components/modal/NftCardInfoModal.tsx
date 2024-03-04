'use client';

import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import { useTranslation } from '@i18n/client';
import { Trans } from 'react-i18next/TransWithoutContext';
import Link from 'next/link';
import { stores } from '@stores';
import { restDateHour } from '@utils/common';

interface Props extends LanguageCompProps {
  item: NftInfoType | null;
  onDone: () => void;
}
function NftHideModal({ item, lng, onDone }: Props) {
  const { nftCardInfo: isOpen, setNftCardInfo: setIsOpen } =
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
            <div className="fixed inset-0 bg-black" />
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
                      src="/assets/img/box/nft_card_info_box.webp"
                      className="w-full backdrop-blur"
                      alt="box"
                    />
                    <button
                      onClick={onclose}
                      className="absolute top-[10%] left-[10%] z-[10]"
                    >
                      <p className="font-dsdigital text-3xl text-main">X</p>
                    </button>
                    <div className="absolute top-[10%] left-0 w-full h-[85%] p-[10%]">
                      {item && (
                        <div className="relative w-full grid grid-cols-2 gap-x-3">
                          <img
                            src={item?.img}
                            alt="img"
                            className="object-contain rounded-xl aspect-[21/29] w-full"
                          />
                          <div className="flex flex-col aspect-[21/29] overflow-hidden gap-3">
                            <h1 className="font-audiowide uppercase whitespace-pre-wrap text-[#ebff00]">
                              {item.title.replaceAll(' ', '\n')}
                            </h1>
                            <div className="overflow-y-scroll custom-scroll">
                              <p className="text-xs">{item.desc}</p>
                            </div>
                          </div>
                        </div>
                      )}
                      {item?.end_dtm && (
                        <div className="absolute bottom-0 right-[12%] flex gap-x-10">
                          <p className="font-dsdigital uppercase text-xl tracking-widest">
                            {`listing ends in : ${restDateHour(item?.end_dtm)}`}
                          </p>
                        </div>
                      )}
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
