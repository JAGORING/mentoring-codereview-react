import { create } from 'zustand';

interface IFavoriteStore {
  favoriteList: number[];
  actions: {
    addFavorite: (exhibitionId: number) => void;
    deleteFavorite: (exhibitionId: number) => void;
  };
}
const useFavoriteStore = create<IFavoriteStore>()((set) => ({
  favoriteList: [],
  actions: {
    addFavorite: (exhibitionId) => {
      set((state) => ({
        favoriteList: [...state.favoriteList, exhibitionId],
      }));
    },
    deleteFavorite: (exhibitionId) => {
      set((state) => ({
        favoriteList: state.favoriteList.filter((id) => id !== exhibitionId),
      }));
    },
  },
}));

export const useFavoriteList = () => useFavoriteStore((state) => state.favoriteList);
export const useFavoriteActions = () => useFavoriteStore((state) => state.actions);
