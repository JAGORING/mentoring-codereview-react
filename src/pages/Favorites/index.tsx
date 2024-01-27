import React from 'react';
import styled, { css } from 'styled-components';

import { ExhibitionCard } from '@components/ExhibitionCard';
import { useGetExhibitionList } from '@hooks/queries/Exhibition';
import { useFavoriteList } from '@src/store/favoriteStore';

export const Favorites = () => {
  const { exhibitionList } = useGetExhibitionList();
  const favoriteList = useFavoriteList();

  const favoriteExhibitionsData =
    exhibitionList?.filter((exhibition) => favoriteList.includes(exhibition.id)) || [];

  return (
    <>
      <ExhibitionList hasEmptyFavorites={favoriteExhibitionsData.length <= 0}>
        {favoriteExhibitionsData.length <= 0 ? (
          <div className="empty-favorites">
            <p>찜해놓은 전시회가 없습니다</p>
            <span>맘에 드는 전시회가 있다면 찜해보세요</span>
          </div>
        ) : (
          favoriteExhibitionsData.map((exhibition) => (
            <ExhibitionCard exhibition={exhibition} layout="reversed" />
          ))
        )}
      </ExhibitionList>
    </>
  );
};

interface ExhibitionListProps {
  hasEmptyFavorites?: boolean;
}

const ExhibitionList = styled.div<ExhibitionListProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 8px;

  ${(props) =>
    props.hasEmptyFavorites &&
    css`
      height: calc(100vh - 79px);
    `}

  .empty-favorites {
    margin: auto;
    text-align: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 19.2px;
    color: ${({ theme }) => theme.color.darkBlack};
    span {
      color: ${({ theme }) => theme.color.lightGrayText};
    }
  }
`;
