import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { useGetExhibitionDetail } from '@hooks/queries/Exhibition';
import { useRouter } from '@hooks/useRouter';
import useModal from '@hooks/useModal';

import { Container } from '@components/Container';
import { BackBtnHeader } from '@components/BackBtnHeader';
import { ExhibitionDetail } from '@components/ExhibitionDetail';
import { Modal } from '@components/Modal';

export const Reservation = () => {
  const router = useRouter();
  const { exhibitionId } = useParams();
  const { exhibition } = useGetExhibitionDetail(Number(exhibitionId));
  const {
    isOpen: isReservationModalOpen,
    open: openReservationModal,
    close: closeReservationModal,
  } = useModal();
  const { isOpen: isAlert, open: openAlert, close: closeAlert } = useModal();

  const handleSuccessReservation = () => {
    closeAlert();
    alert('홈 화면으로 이동합니다.');
    router.push('/');
  };
  return (
    <>
      <Container>
        <BackBtnHeader title="예매하기" />
        <ExhibitionDetail exhibition={exhibition} />
        <ReservationBtn type="button" onClick={openReservationModal}>
          예매하기
        </ReservationBtn>
      </Container>

      <Modal isOpen={isReservationModalOpen} onClose={closeReservationModal}>
        <Modal.Content>
          <p>티켓을 예매하시겠습니까?</p>
          <p>예매 내역은 이메일로 전송됩니다.</p>
        </Modal.Content>
        <Modal.Button
          onClick={() => {
            closeReservationModal();
            openAlert();
          }}
        >
          확인
        </Modal.Button>
        <Modal.Button onClick={closeReservationModal} color="lightGrayButton">
          취소
        </Modal.Button>
      </Modal>

      <Modal isOpen={isAlert} onClose={handleSuccessReservation}>
        <Modal.Content>
          <p>예매가 완료되었습니다.</p>
        </Modal.Content>
        <Modal.Button onClick={handleSuccessReservation}>확인</Modal.Button>
      </Modal>
    </>
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
