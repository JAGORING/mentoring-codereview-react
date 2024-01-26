import styled from 'styled-components';

import { useRouter } from '@hooks/useRouter';

import BackIcon from 'assets/icons/back.png';

export const BackBtnHeader = ({ title }: { title: string }) => {
  const router = useRouter();
  return (
    <Header>
      <button onClick={() => router.back()} type="button">
        <div className="back-img">
          <img src={BackIcon} alt="back" />
        </div>
      </button>
      <h1>{title}</h1>
    </Header>
  );
};

const Header = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGrayBorder};

  font-weight: 600;
  font-size: 20px;
  .back-img {
    margin-right: 8px;
    width: 30px;
    heght: 26px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }
`;
