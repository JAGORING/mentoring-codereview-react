import { Container } from '@components/Container';
import { NavFooter } from '@components/NavFooter';
import { Outlet } from 'react-router-dom';

export default function DefaultLayout() {
  return (
    <Container>
      <Outlet />
      <NavFooter />
    </Container>
  );
}
