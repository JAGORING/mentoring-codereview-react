import { useQuery } from '@tanstack/react-query';

import { getApiExhibitionList, getDetailExhibition } from '@src/apis';

const QUERY_KEY = {
  /** Exhibition KEY */
  exhibitionList: 'exhibitionList',
  exhibitionDetail: 'exhibitionnDetail',
};

export const useGetExhibitionList: () => {
  exhibitionList: Exhibition[];
  isLoading: boolean;
} = () => {
  const { data, isLoading }: any = useQuery({
    queryKey: [QUERY_KEY.exhibitionList],
    queryFn: getApiExhibitionList,
  });
  return {
    exhibitionList: data ?? [],
    isLoading,
  };
};

export const useGetExhibitionDetail: (id: number) => {
  exhibition: Exhibition;
  isLoading: boolean;
} = (id) => {
  const { data, isLoading }: any = useQuery({
    queryKey: [QUERY_KEY.exhibitionDetail, id],
    queryFn: () => getDetailExhibition({ id }),
  });
  return {
    exhibition: data as Exhibition,
    isLoading,
  };
};
