import React from 'react';
import styled from 'styled-components';

import { useGetExhibitionList } from '@hooks/queries/Exhibition';

import { ExhibitionCard } from '@components/ExhibitionCard';

export const Home = () => {
  const { exhibitionList } = useGetExhibitionList();
  return (
    <>
      <ExhibitionList>
        {exhibitionList.map((exhibition) => (
          <ExhibitionCard exhibition={exhibition} />
        ))}
      </ExhibitionList>
    </>
  );
};

const ExhibitionList = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
