import { Container } from '@components/Container';
import { Outlet } from 'react-router-dom';

export default function DefaultLayout() {
  return (
    <Container>
      <Outlet />
      <>버튼 들어갈 자리</>
    </Container>
  );
}
