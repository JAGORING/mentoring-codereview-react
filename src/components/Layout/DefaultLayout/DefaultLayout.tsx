import { Outlet } from 'react-router-dom';

export default function DefaultLayout() {
  return (
    <>
      <Outlet />
      <>버튼 들어갈 자리</>
    </>
  );
}
