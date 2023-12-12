'use client';

import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useEffect, useState } from 'react';
import { useTranslation } from '@i18n/client';
import { Trans } from 'react-i18next/TransWithoutContext';
import Link from 'next/link';
import Icon from '@[lng]/components/Icon';

interface Props extends LanguageCompProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
}
function WepinModalMobile({ lng, isOpen, setIsOpen, setName }: Props) {
  const [create, setCreate] = useState(5);
  const [agree, setAgree] = useState([false, false, false]);
  const [pass, setPass] = useState('');
  const [repass, setRepass] = useState('');
  const [tempName, setTempName] = useState('');
  const [done, setDone] = useState(false);

  const { t } = useTranslation(lng, 'wallet');

  const onAllAgree = () => {
    const ag = agree.filter((x) => !x).length > 0;
    setAgree([ag, ag, ag]);
  };
  const onAgree = (index: number) => {
    const temp = [...agree];
    temp[index] = !temp[index];
    setAgree(temp);
  };

  const onButton = (str: string) => {
    if (pass.length < 8) {
      setPass((prev) => prev + str);
    }
  };
  const onButtionDel = () => {
    setPass((prev) => prev.substring(0, prev.length - 1));
  };
  const onButtonRe = (str: string) => {
    if (repass.length < 8) {
      setRepass((prev) => prev + str);
    }
  };
  const onButtionDelRe = () => {
    setRepass((prev) => prev.substring(0, prev.length - 1));
  };

  const onCheck = () => {
    const regx = /[a-zA-Z0-9]/;
    const res = regx.test(tempName);
    setDone(res);
  };

  useEffect(() => {
    if (isOpen) setCreate(0);
  }, [isOpen]);

  useEffect(() => {
    if (create === 0) {
      setTimeout(() => {
        setCreate(1);
      }, 2500);
    }
  }, [create]);
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
                <Dialog.Panel className="w-full max-w-4xl h-[100svh] overflow-hidden bg-[#1B1C1C] p-3 text-left align-middle shadow-xl transition-all flex justify-center items-center">
                  <div className="absolute top-5 w-full left-0 px-5">
                    <div className="flex flex-row items-start justify-between">
                      <div />
                      <div className="font-audiowide uppercase text-[#EBFF00] text-center">
                        {create >= 1 && (
                          <>
                            <p>create wallet</p>
                            <p>{`${create}/4`}</p>
                          </>
                        )}
                      </div>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="font-dsdigital text-4xl text-main"
                      >
                        X
                      </button>
                    </div>
                  </div>
                  {create === 0 && (
                    <div className="relative w-full h-full flex justify-center items-center">
                      <img
                        src="/assets/img/logo/wepin.webp"
                        alt="wepin"
                        className="animate-wepinFadeOut"
                      />
                    </div>
                  )}
                  {create === 1 && (
                    <div className="flex w-full h-full justify-center items-center flex-col">
                      <img
                        src="/assets/img/logo/wepin.webp"
                        alt="wepin"
                        className="w-[50%]"
                      />
                      <div className="flex flex-row items-center">
                        <Icon.Discord className="w-5 h-5 mr-2 mt-1" />
                        <p className="font-robotoMono">emailsample@breamp.kr</p>
                      </div>
                      <div
                        className="w-full aspect-[346/172] my-10 max-w-[500px]"
                        style={{
                          backgroundImage:
                            'url(/assets/img/box/wepin_checkbox.webp)',
                          backgroundSize: 'contain',
                        }}
                      >
                        <div className="flex flex-col text-xs py-2 px-[10%] font-roboto uppercase md:gap-y-3 md:py-5 justify-center gap-y-1 h-full">
                          <div className="flex flex-row items-center">
                            <button
                              className="w-5 h-5 border border-main mr-2"
                              onClick={onAllAgree}
                            >
                              {agree.filter((x) => !x).length === 0 && (
                                <img
                                  src="/assets/img/icon/checkbox.webp"
                                  className="object-contain w-4 h-4"
                                  alt="c"
                                />
                              )}
                            </button>
                            <button
                              onClick={onAllAgree}
                              className="font-roboto uppercase text-start text-xs"
                            >
                              <Trans t={t} i18nKey="term.all" />
                            </button>
                          </div>
                          <div className="flex flex-row items-center ml-2">
                            <button
                              className="w-5 h-5 border border-main mr-2"
                              onClick={() => onAgree(0)}
                            >
                              {agree[0] && (
                                <img
                                  src="/assets/img/icon/checkbox.webp"
                                  className="object-contain w-4 h-4"
                                  alt="c"
                                />
                              )}
                            </button>
                            <button
                              onClick={() => onAgree(0)}
                              className="font-roboto uppercase text-start text-xs justify-between flex items-center w-full"
                            >
                              <Trans t={t} i18nKey="term.service" />
                              <img
                                src="/assets/img/icon/arrow_right.webp"
                                className="object-contain w-3 h-3"
                                alt="c"
                              />
                            </button>
                          </div>
                          <div className="flex flex-row items-center ml-2">
                            <button
                              className="w-5 h-5 border border-main mr-2"
                              onClick={() => onAgree(1)}
                            >
                              {agree[1] && (
                                <img
                                  src="/assets/img/icon/checkbox.webp"
                                  className="object-contain w-4 h-4"
                                  alt="c"
                                />
                              )}
                            </button>
                            <button
                              onClick={() => onAgree(1)}
                              className="font-roboto uppercase text-start text-xs justify-between flex items-center w-full"
                            >
                              <Trans t={t} i18nKey="term.privacy" />
                              <img
                                src="/assets/img/icon/arrow_right.webp"
                                className="object-contain w-3 h-3"
                                alt="c"
                              />
                            </button>
                          </div>
                          <div className="flex flex-row items-center ml-2">
                            <button
                              className="w-5 h-5 border border-main mr-2"
                              onClick={() => onAgree(2)}
                            >
                              {agree[2] && (
                                <img
                                  src="/assets/img/icon/checkbox.webp"
                                  className="object-contain w-4 h-4"
                                  alt="c"
                                />
                              )}
                            </button>
                            <button
                              onClick={() => onAgree(2)}
                              className="font-roboto uppercase text-start text-xs justify-between flex items-center w-full"
                            >
                              <Trans t={t} i18nKey="term.provision" />
                              <img
                                src="/assets/img/icon/arrow_right.webp"
                                className="object-contain w-3 h-3"
                                alt="c"
                              />
                            </button>
                          </div>
                          <p className="text-[10px] text-[#ff6510]">
                            <Trans t={t} i18nKey="term.caution" />
                          </p>
                        </div>
                      </div>
                      <button
                        className="absolute bottom-20"
                        onClick={() => {
                          if (agree.filter((x) => !x).length === 0) {
                            setCreate(2);
                          }
                        }}
                      >
                        <img
                          src={
                            agree.filter((x) => !x).length === 0
                              ? '/assets/img/icon/arrow_wallet.webp'
                              : '/assets/img/icon/arrow_wallet_empty.webp'
                          }
                          alt="arrow"
                          className="max-w-[50px]"
                        />
                      </button>
                    </div>
                  )}
                  {create === 2 && (
                    <div>
                      <h1 className="font-audiowide uppercase text-center">
                        enter pin code
                      </h1>
                      <p className="mt-10 text-center font-robotoMono uppercase">
                        <Trans t={t} i18nKey="create.pin" />
                      </p>
                      <div className="flex flex-row w-full justify-center items-center gap-x-2 my-5">
                        {new Array(8).fill(null).map((_, i) => (
                          <div
                            key={`box-${i}`}
                            className="w-8 h-8 bg-black flex justify-center items-center"
                          >
                            {pass.length >= i + 1 && (
                              <div className="bg-main rounded-full w-4 h-4" />
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-3 gap-y-2 max-w-[400px] mx-auto">
                        {new Array(9).fill(null).map((_, i) => (
                          <button
                            className="col-span-1 aspect-[74/36] flex justify-center items-center font-dsdigital text-lg"
                            key={`btn-${i}`}
                            style={{
                              backgroundImage:
                                'url(/assets/img/button/wepin_btn.webp',
                              backgroundSize: 'contain',
                              backgroundRepeat: 'no-repeat',
                              backgroundPosition: 'center',
                            }}
                            onClick={() => onButton((i + 1).toString())}
                          >
                            {i + 1}
                          </button>
                        ))}
                        <div className="col-span-1" />
                        <button
                          className="col-span-1 aspect-[74/36] flex justify-center items-center font-dsdigital text-lg"
                          style={{
                            backgroundImage:
                              'url(/assets/img/button/wepin_btn.webp',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                          }}
                          onClick={() => onButton('0')}
                        >
                          0
                        </button>
                        <button
                          className="col-span-1 aspect-[74/36] flex justify-center items-center font-dsdigital text-lg"
                          style={{
                            backgroundImage:
                              'url(/assets/img/button/wepin_delete.webp',
                            backgroundSize: '50%',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                          }}
                          onClick={onButtionDel}
                        />
                      </div>
                      <button
                        className="absolute bottom-10 left-[50%] translate-x-[-50%]"
                        onClick={() => {
                          if (pass.length >= 6) {
                            setCreate(3);
                          }
                        }}
                      >
                        <img
                          src={
                            pass.length >= 6
                              ? '/assets/img/icon/arrow_wallet.webp'
                              : '/assets/img/icon/arrow_wallet_empty.webp'
                          }
                          alt="arrow"
                          className="max-w-[50px]"
                        />
                      </button>
                    </div>
                  )}
                  {create === 3 && (
                    <div>
                      <h1 className="font-audiowide uppercase text-center">
                        enter pin code
                      </h1>
                      <p className="mt-10 text-center font-robotoMono uppercase">
                        <Trans t={t} i18nKey="create.reenter" />
                      </p>
                      <div className="flex flex-row w-full justify-center items-center gap-x-2 my-5">
                        {new Array(8).fill(null).map((_, i) => (
                          <div
                            key={`box-${i}`}
                            className="w-8 h-8 bg-black flex justify-center items-center"
                          >
                            {repass.length >= i + 1 && (
                              <div className="bg-main rounded-full w-4 h-4" />
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-3 gap-y-2 max-w-[400px] mx-auto">
                        {new Array(9).fill(null).map((_, i) => (
                          <button
                            className="col-span-1 aspect-[74/36] flex justify-center items-center font-dsdigital text-lg"
                            key={`btn-${i}`}
                            style={{
                              backgroundImage:
                                'url(/assets/img/button/wepin_btn.webp',
                              backgroundSize: 'contain',
                              backgroundRepeat: 'no-repeat',
                              backgroundPosition: 'center',
                            }}
                            onClick={() => onButtonRe((i + 1).toString())}
                          >
                            {i + 1}
                          </button>
                        ))}
                        <div className="col-span-1" />
                        <button
                          className="col-span-1 aspect-[74/36] flex justify-center items-center font-dsdigital text-lg"
                          style={{
                            backgroundImage:
                              'url(/assets/img/button/wepin_btn.webp',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                          }}
                          onClick={() => onButtonRe('0')}
                        >
                          0
                        </button>
                        <button
                          className="col-span-1 aspect-[74/36] flex justify-center items-center font-dsdigital text-lg"
                          style={{
                            backgroundImage:
                              'url(/assets/img/button/wepin_delete.webp',
                            backgroundSize: '50%',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                          }}
                          onClick={onButtionDelRe}
                        />
                      </div>
                      <button
                        className="absolute bottom-10 left-[50%] translate-x-[-50%]"
                        onClick={() => {
                          if (repass === pass) {
                            setCreate(4);
                          }
                        }}
                      >
                        <img
                          src={
                            repass === pass
                              ? '/assets/img/icon/arrow_wallet.webp'
                              : '/assets/img/icon/arrow_wallet_empty.webp'
                          }
                          alt="arrow"
                          className="max-w-[50px]"
                        />
                      </button>
                    </div>
                  )}
                  {create === 4 && (
                    <div className="max-w-[500px]">
                      <h1 className="font-audiowide uppercase text-center">
                        name your wallet
                      </h1>
                      <p className="mt-10 mb-5 text-center font-robotoMono uppercase">
                        <Trans t={t} i18nKey="create.wallet" />
                      </p>
                      <div className="flex flex-row items-center justify-between gap-x-2">
                        <div className="flex-1 flex-row flex justify-center items-center font-robotoMono">
                          <div className="w-full relative">
                            <img
                              src="/assets/img/box/wepin_input.webp"
                              className="w-full max-h-[40px] mr-1"
                            />
                            <input
                              className="absolute top-0 left-0 w-full h-[40px] bg-transparent text-xs pl-3"
                              value={tempName}
                              onChange={(e) => setTempName(e.target.value)}
                              placeholder="TYHPE HERE..."
                            />
                          </div>
                          .brp
                        </div>
                        <button className="" onClick={onCheck}>
                          <img
                            src="/assets/img/button/wepin_check.webp"
                            className="object-contain max-h-[40px]"
                          />
                        </button>
                      </div>

                      {!done && (
                        <p className="my-5 text-center font-robotoMono uppercase text-[#FF6510]">
                          <Trans t={t} i18nKey="create.caution1" />
                          <Trans t={t} i18nKey="create.caution2" />
                        </p>
                      )}
                      <p className="my-5 text-center font-robotoMono uppercase">
                        <Trans t={t} i18nKey="create.caution3" />
                      </p>
                      <button
                        className="absolute bottom-10 left-[50%] translate-x-[-50%]"
                        onClick={() => {
                          if (done) {
                            setName(tempName);
                            setIsOpen(false);
                          }
                        }}
                      >
                        <img
                          src={
                            done
                              ? '/assets/img/icon/arrow_wallet.webp'
                              : '/assets/img/icon/arrow_wallet_empty.webp'
                          }
                          alt="arrow"
                          className="max-w-[50px]"
                        />
                      </button>
                    </div>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default WepinModalMobile;
