import styled from 'styled-components';

import { Container } from '@components/Container';

export const Loading = () => {
  return (
    <Container>
      <LoadingWrapper>
        <div className="loading-box">
          <p>작품을 준비하는 중입니다.</p>
          <p>잠시만 기다려주세요.</p>
        </div>
      </LoadingWrapper>
    </Container>
  );
};

const LoadingWrapper = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.color.primaryYellow};
  width: 400px;
  height: 100vh;

  .loading-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    p {
      color: ${({ theme }) => theme.color.white};
      font-size: 24px;
      line-height: 28px;
    }
  }
`;
