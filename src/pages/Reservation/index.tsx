import React from 'react';
import { useParams } from 'react-router-dom';

import { Container } from '@components/Container';
import { BackBtnHeader } from '@components/BackBtnHeader';
import { useGetExhibitionDetail } from '@hooks/queries/Exhibition';
import { ExhibitionDetail } from '@components/ExhibitionDetail';
import styled from 'styled-components';

export const Reservation = () => {
  const { exhibitionId } = useParams();
  const { exhibition } = useGetExhibitionDetail(Number(exhibitionId));
  return (
    <Container>
      <BackBtnHeader title="예매하기" />
      <ExhibitionDetail exhibition={exhibition} />
      <ReservationBtn type="button">예매하기</ReservationBtn>
    </Container>
  );
};

const ReservationBtn = styled.button`
  display: block;
  margin: 10px auto 0;
  cursor: pointer;
  width: 390px;
  height: 59px;
  border-radius: 4px;
  border: none;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  background: ${({ theme }) => theme.color.primaryYellow};
  color: ${({ theme }) => theme.color.white};
`;
