import React from 'react';
import { useParams } from 'react-router-dom';

import { Container } from '@components/Container';

export const Reservation = () => {
  const { exhibitionId } = useParams();
  return (
    <Container>
      <div>Reservation // {exhibitionId}</div>
    </Container>
  );
};
