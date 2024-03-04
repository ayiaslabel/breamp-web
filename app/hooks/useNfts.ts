import { stores } from '@stores';
import { useState } from 'react';
import { nft_info } from '@[lng]/components/dummy';

export default function useNfts() {
  const [cardInfo, setCardInfo] = useState<NftInfoType | null>(nft_info[0]);
  const {
    book,
    hidden,
    wish,
    listing,
    setBook,
    setHidden,
    setWish,
    setListing,
  } = stores.nft.useNfts();

  const { setNftHidden, setNftUnHidden, setNftCardInfo } =
    stores.modal.useModal();

  const onBookHide = (item: NftType) => {
    setNftHidden(true);
  };
  const onHiddenRestore = (item: NftType) => {
    setNftUnHidden(true);
  };

  const onCardInfo = (item: NftType) => {
    setCardInfo(nft_info[0]);
    setNftCardInfo(true);
  };

  return {
    book,
    hidden,
    wish,
    listing,
    onBookHide,
    onHiddenRestore,
    onCardInfo,
    cardInfo,
  };
}
