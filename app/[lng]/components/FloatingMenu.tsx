'use client';

import React, { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import Icon from '@[lng]/components/Icon';

type Props = {
  lng: string;
  path?: string;
};
function FloatingMenu({ lng, path = '' }: Props) {
  const [music, setMusic] = useState(false);
  return (
    <div className="fixed right-5 bottom-5 z-[50]">
      <div className="flex flex-col">
        <Menu as="div" className="relatuve">
          <Menu.Button className="bg-[#616161] rounded-full p-2 aspect-square justify-center items-center flex">
            <Icon.Globe />
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
            <Menu.Items className="absolute right-0 bottom-28 bg-[#616161]/70 p-5 rounded font-robotoMono">
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
      </div>
      <button
        className="bg-[#616161] rounded-full p-2 aspect-square justify-center items-center flex mt-3"
        onClick={() => setMusic((prev) => !prev)}
      >
        {music ? <Icon.SoundOn /> : <Icon.SoundOff />}
      </button>
    </div>
  );
}

export default FloatingMenu;
