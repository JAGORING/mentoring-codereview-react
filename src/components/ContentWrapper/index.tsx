import styled from 'styled-components';

export const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.section`
  margin: 0 auto;
  width: 400px;
  height: 100%;
  background: ${({ theme }) => theme.color.white};
`;
