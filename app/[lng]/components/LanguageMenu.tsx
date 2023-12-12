'use client';

import React, { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import Icon from '@[lng]/components/Icon';

type Props = {
  lng: string;
  path?: string;
};
function LanguageMenu({ lng, path = '' }: Props) {
  return (
    <Menu as="div" className="relatuve">
      <Menu.Button className="justify-center items-center flex">
        <img
          src="/assets/img/icon/globe.svg"
          className="ml-[32%] w-5 h-5 object-contain"
          alt="menu"
        />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 bottom-10 bg-[#616161]/90 p-5 rounded font-robotoMono">
          <div className="flex flex-col">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href={`/en${path}`}
                  className={`hover:text-[#EBFF00] uppercase text-center py-1 ${
                    lng === 'en' ? 'text-[#EBFF00]' : ''
                  }`}
                >
                  english
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href={`/ja${path}`}
                  className={`hover:text-[#EBFF00] uppercase text-center py-1 ${
                    lng === 'ja' ? 'text-[#EBFF00]' : ''
                  }`}
                >
                  japanese
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href={`/ko${path}`}
                  className={`hover:text-[#EBFF00] uppercase text-center py-1 ${
                    lng === 'ko' ? 'text-[#EBFF00]' : ''
                  }`}
                >
                  korean
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href={`/vi${path}`}
                  className={`hover:text-[#EBFF00] uppercase text-center py-1 ${
                    lng === 'vi' ? 'text-[#EBFF00]' : ''
                  }`}
                >
                  vietnamese
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default LanguageMenu;
