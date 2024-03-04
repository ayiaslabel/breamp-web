import { create } from 'zustand';
import ReactHowler from 'react-howler';
import {
  nft_book,
  nft_hidden,
  nft_listing,
  nft_wish,
} from '@[lng]/components/dummy';

type NftState = {
  book: NftType[];
  hidden: NftType[];
  wish: NftType[];
  listing: NftType[];
  setBook: (items: NftType[]) => void;
  setHidden: (items: NftType[]) => void;
  setWish: (items: NftType[]) => void;
  setListing: (items: NftType[]) => void;
};
export const useNfts = create<NftState>()((set, get) => ({
  book: nft_book,
  hidden: nft_hidden,
  wish: nft_wish,
  listing: nft_listing,
  setBook: (items) => set({ book: items }),
  setHidden: (items) => set({ hidden: items }),
  setWish: (items) => set({ wish: items }),
  setListing: (items) => set({ listing: items }),
}));
