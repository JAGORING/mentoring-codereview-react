import styled from 'styled-components';

export const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  margin: 0 auto;
  width: 360px;
  height: 100%;
  background: ${({ theme }) => theme.color.white};
`;
