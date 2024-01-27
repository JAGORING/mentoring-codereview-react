import styled from 'styled-components';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.section`
  position: relative;
  margin: 0 auto;
  padding-bottom: 79px;
  width: 400px;
  height: 100%;
  background: ${({ theme }) => theme.color.white};
`;
