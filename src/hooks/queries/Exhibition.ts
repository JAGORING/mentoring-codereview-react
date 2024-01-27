import { useSuspenseQuery } from '@tanstack/react-query';

import { getApiExhibitionList, getDetailExhibition } from '@src/apis';

const QUERY_KEY = {
  /** Exhibition KEY */
  exhibitionList: 'exhibitionList',
  exhibitionDetail: 'exhibitionnDetail',
};

export const useGetExhibitionList: () => {
  exhibitionList: Exhibition[];
} = () => {
  const { data }: any = useSuspenseQuery({
    queryKey: [QUERY_KEY.exhibitionList],
    queryFn: getApiExhibitionList,
  });
  return {
    exhibitionList: data ?? [],
  };
};

export const useGetExhibitionDetail: (id: number) => {
  exhibition: Exhibition;
} = (id) => {
  const { data }: any = useSuspenseQuery({
    queryKey: [QUERY_KEY.exhibitionDetail, id],
    queryFn: () => getDetailExhibition({ id }),
  });
  return {
    exhibition: data as Exhibition,
  };
};
