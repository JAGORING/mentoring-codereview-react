import { ContentWrapper } from '@components/ContentWrapper';
import { Outlet } from 'react-router-dom';

export default function DefaultLayout() {
  return (
    <ContentWrapper>
      <Outlet />
      <>버튼 들어갈 자리</>
    </ContentWrapper>
  );
}
