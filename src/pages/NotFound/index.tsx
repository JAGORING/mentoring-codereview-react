import { useEffect } from 'react';

import { Container } from '@components/Container';
import { useRouter } from '@hooks/useRouter';

export const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  });
  return <Container>404 not found</Container>;
};
