'use client';

import useNfts from '@hooks/useNfts';

export default function Book() {
  const { book: items, onBookHide, onCardInfo } = useNfts();
  return (
    <div className="grid grid-cols-3 gap-1">
      {items.map((item) => (
        <div key={item.id} className="aspect-[21/29] relative">
          <div className="w-full h-full absolute top-0 left-0 hover:opacity-100 opacity-0 transition-opacity">
            <div className="flex flex-col flex-1 h-full gap-y-0.5">
              <button
                onClick={() => onCardInfo(item)}
                className="flex-1 bg-black/50 flex flex-row items-center justify-center gap-x-2"
              >
                <img
                  src="/assets/img/icon/info.webp"
                  className="w-5 h-5 object-contain"
                  alt="icon"
                />
                <p className="text-main font-robotoMono font-bold">INFO</p>
              </button>
              <button
                onClick={() => onBookHide(item)}
                className="flex-1 bg-black/50 flex flex-row items-center justify-center gap-x-2"
              >
                <img
                  src="/assets/img/icon/hide.webp"
                  className="w-5 h-5 object-contain"
                  alt="icon"
                />
                <p className="text-[#FF6510] font-robotoMono font-bold">HIDE</p>
              </button>
              <button className="flex-1 bg-black/50 flex flex-row items-center justify-center gap-x-2">
                <img
                  src="/assets/img/icon/list.webp"
                  className="w-5 h-5 object-contain"
                  alt="icon"
                />
                <p className="text-[#EBFF00] font-robotoMono font-bold">LIST</p>
              </button>
            </div>
          </div>
          <img
            alt="nft"
            src={item.img}
            className="aspect-[21/29] object-contain"
          />
        </div>
      ))}
    </div>
  );
}
