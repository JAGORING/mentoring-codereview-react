import { useQuery } from '@tanstack/react-query';

import { getApiExhibitionList } from '@src/apis';

const QUERY_KEY = {
  /** Exhibition KEY */
  exhibition: 'exhibition',
};

export const useGetExhibitionList: () => {
  exhibitionList: Exhibition[];
  isLoading: boolean;
} = () => {
  const { data, isLoading }: any = useQuery({
    queryKey: [QUERY_KEY.exhibition],
    queryFn: getApiExhibitionList,
  });
  return {
    exhibitionList: data ?? [],
    isLoading,
  };
};
