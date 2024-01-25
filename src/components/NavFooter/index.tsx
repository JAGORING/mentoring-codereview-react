import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { useRouter } from '@hooks/useRouter';

import TicketIcon from 'assets/icons/ticket.png';
import StarIcon from 'assets/icons/star-on.png';

export const NavFooter = () => {
  const { pathname } = useLocation();
  const router = useRouter();
  return (
    <Nav>
      <button
        className={`${pathname === '/' ? 'active' : ''}`}
        onClick={() => router.push('/')}
        type="button"
      >
        <div className="icon-img">
          <img src={TicketIcon} alt="ticket" />
        </div>
        <span>전시회</span>
      </button>
      <button
        className={`${pathname === '/favorites' ? 'active' : ''}`}
        onClick={() => router.push('/favorites')}
        type="button"
      >
        <div className="icon-img">
          <img src={StarIcon} alt="favorites" />
        </div>
        <span>찜목록</span>
      </button>
    </Nav>
  );
};

const Nav = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  height: 79px;
  position: fixed;
  bottom: 0;
  border-top: 0.5px solid ${({ theme }) => theme.color.lightGrayBorder};

  button {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 12px;
    color: ${({ theme }) => theme.color.lightGrayText};
    &.active {
      color: ${({ theme }) => theme.color.darkBlack};
    }
    .icon-img {
      width: 18px;
      heght: 18px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
      }
    }
  }
`;
