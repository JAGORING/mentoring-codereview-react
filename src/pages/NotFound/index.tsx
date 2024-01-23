import { ContentWrapper } from '@components/ContentWrapper';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  });
  return <ContentWrapper>404 not found</ContentWrapper>;
};
