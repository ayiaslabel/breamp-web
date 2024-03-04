import { create } from 'zustand';
import ReactHowler from 'react-howler';
import {
  nft_book,
  nft_hidden,
  nft_listing,
  nft_wish,
} from '@[lng]/components/dummy';

type ModalStore = {
  nftHidden: boolean;
  setNftHidden: (nftHidden: boolean) => void;
  nftCardInfo: boolean;
  setNftCardInfo: (nftCardInfo: boolean) => void;
  nftUnHidden: boolean;
  setNftUnHidden: (nftUnHidden: boolean) => void;
};
export const useModal = create<ModalStore>()((set, get) => ({
  nftHidden: false,
  setNftHidden: (nftHidden) => set({ nftHidden }),
  nftUnHidden: false,
  setNftUnHidden: (nftUnHidden) => set({ nftUnHidden }),
  nftCardInfo: true,
  setNftCardInfo: (nftCardInfo) => set({ nftCardInfo }),
}));
