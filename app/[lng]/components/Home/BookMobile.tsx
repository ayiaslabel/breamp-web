'use client';

import React, { useEffect, useState } from 'react';
import Icon from '@[lng]/components/Icon';
import CreateWalletModalMobile from '@[lng]/components/Home/CreateWalletModalMobile';
import LanguageMenu from '@[lng]/components/LanguageMenu';
import WepinModalMobile from '@[lng]/components/Home/WepinModalMobile';
import CreateDoneModalMobile from '@[lng]/components/Home/CreateDoneModalMobile';
import { useMusic } from '@stores/music.store';
import Book from '@[lng]/components/nft/Book';
import NftHideModal from '@[lng]/components/modal/NftHideModal';
import NftCardInfoModal from '@[lng]/components/modal/NftCardInfoModal';
import useNfts from '@hooks/useNfts';
import { nft_book } from '../dummy';

const tabMenus = [
  '/assets/img/box/home_tab_book.webp',
  '/assets/img/box/home_tab_hidden.webp',
  '/assets/img/box/home_tab_wish.webp',
  '/assets/img/box/home_tab_list.webp',
];
function BookMobile({ lng }: LanguageCompProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [wepin, setWepin] = useState(false);
  const [name, setName] = useState('');
  const [done, setDone] = useState(false);
  const [tab, setTab] = useState(0);

  const { cardInfo } = useNfts();

  const { play, togglePlay } = useMusic();
  const onDone = () => {
    setWepin(true);
  };

  useEffect(() => {
    if (name !== '') setDone(true);
  }, [name]);
  return (
    <>
      <CreateWalletModalMobile
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        lng={lng}
        onDone={onDone}
      />
      <WepinModalMobile
        isOpen={wepin}
        setIsOpen={setWepin}
        lng={lng}
        setName={setName}
      />
      <CreateDoneModalMobile
        isOpen={done}
        setIsOpen={setDone}
        name={name}
        lng={lng}
      />
      <NftCardInfoModal item={cardInfo} onDone={() => {}} lng={lng} />
      <NftHideModal onDone={() => {}} lng={lng} />
      <div className="flex flex-col justify-center items-center font-robotoMono">
        <div className=" max-w-3xl w-full relative overflow-x-hidden gap-y-2 h-[100svh] flex flex-col">
          <div className="w-full relative p-0.5">
            <img
              src="/assets/img/box/home_profile.webp"
              className="w-full"
              alt="box"
            />
            <div className="absolute z-[1] top-0 w-full h-full pt-[4%] left-0 px-1">
              <div className="py-1 flex flex-row justify-between items-center bg-main w-full font-robotoMono px-3 text-black my-2">
                <p className="text-base">{name === '' ? '-' : `${name}.brp`}</p>
                <button
                  className="uppercase border border-black text-xs px-2"
                  onClick={() => setIsOpen(true)}
                >
                  create wallet
                </button>
              </div>
              <div className="px-3 flex flex-col">
                <p className="text-xs">@abitofdots</p>
              </div>
              <div className="absolute bottom-5 right-5">
                <div className="flex flex-row items-center gap-x-5">
                  <p className="uppercase text-sm">600 items</p>
                  <button className="relative hover:opacity-75">
                    <img
                      src="/assets/img/button/heros.webp"
                      alt="btn"
                      className="max-h-[30px]"
                    />
                    <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] uppercase text-main text-sm">
                      heros
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="flex flex-row items-center" />
            <div className="w-full relative mt-2 h-[80px]">
              {tabMenus.map((item, index) => (
                <img
                  key={item}
                  src={item}
                  alt="menu"
                  className={`w-full absolute top-0 left-0 ${
                    tab === index ? 'opacity-100 ' : 'opacity-0'
                  }`}
                />
              ))}
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full">
                <div className="flex flex-row items-center">
                  {tabMenus.map((item, index) => (
                    <button
                      onClick={() => setTab(index)}
                      key={`button_${item}`}
                      className="w-full h-[60px]"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div
              className="relative w-full px-3 flex-1 overflow-y-scroll custom-scroll"
              style={{
                backgroundRepeat: 'repeat',
                backgroundImage: 'url(/assets/img/box/home_tab_mid.webp)',
                backgroundSize: '100%',
              }}
            >
              {tab === 0 && <Book />}
              {/* {tab === 0 && <Book />} */}
              {/* {tab === 0 && <Book />} */}
              {/* {tab === 0 && <Book />} */}
            </div>
            <div className="w-full relative h-auto">
              <img
                src="/assets/img/box/home_tab_end.webp"
                className="w-full"
                alt="box"
              />
            </div>
          </div>
          <div className="w-full relative">
            <img src="/assets/img/box/nav.webp" alt="nav" className="w-full" />
            <div className="absolute top-[50%] translate-y-[-50%] left-0 w-full">
              <div className="flex flex-row items-center justify-between w-full">
                <button className="flex flex-1 justify-center items-center hover:opacity-75">
                  <img
                    src="/assets/img/icon/hamburg.webp"
                    className="mr-[15%] w-5 h-5 object-contain"
                    alt="menu"
                  />
                </button>
                <button className="flex flex-1 justify-center items-center hover:opacity-75">
                  <img
                    src="/assets/img/icon/line.webp"
                    className="mr-[15%] w-5 h-5 object-contain"
                    alt="menu"
                  />
                </button>
                <button className="flex flex-1 justify-center items-center hover:opacity-75">
                  <img
                    src="/assets/img/icon/home.webp"
                    className="w-5 h-5 object-contain"
                    alt="menu"
                  />
                </button>
                <div className="relative flex flex-1 justify-center items-center ">
                  {/* <img */}
                  {/*  src="/assets/img/icon/globe.svg" */}
                  {/*  className="ml-[32%] w-5 h-5 object-contain" */}
                  {/*  alt="menu" */}
                  {/* /> */}
                  <LanguageMenu lng={lng} path="/home" />
                </div>
                <button
                  onClick={togglePlay}
                  className="flex flex-1 justify-center items-center hover:opacity-75"
                >
                  <img
                    src={
                      play
                        ? '/assets/img/icon/sound_off.svg'
                        : '/assets/img/icon/sound_on.svg'
                    }
                    className="ml-[15%] w-7 h-7 object-contain"
                    alt="menu"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookMobile;
