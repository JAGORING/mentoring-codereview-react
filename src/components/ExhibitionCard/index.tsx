import styled from 'styled-components';

import StarOn from 'assets/icons/star-on.png';
import StarOff from 'assets/icons/star-off.png';

import { addCommasToNumber } from '@utils/formatter';

export const ExhibitionCard = ({ exhibition }: { exhibition: Exhibition }) => {
  return (
    <Card>
      <div className="card-wrap">
        <div className="card-img">
          <img src={exhibition.imageUrl} />
        </div>
        <div className="card-info-group">
          <div className="card-info">
            <div className="card-title-group">
              <div className="card-title">{exhibition.title}</div>
              <div className="card-place">{exhibition.place}</div>
              <div className="card-price">{addCommasToNumber(exhibition.price)} 원</div>
            </div>
            <div className="card-star">
              <img src={StarOn} />
            </div>
          </div>
          <div className="card-bottom">
            <div className="card-date">
              {exhibition.date.started} ~ {exhibition.date.ended}
            </div>
            <button className="card-btn">예매하기</button>
          </div>
        </div>
      </div>
    </Card>
  );
};

const Card = styled.div`
  .card-wrap {
    display: flex;
    gap: 8px;
  }
  .card-img {
    min-width: 80px;
    width: 80px;
    heght: 80px;
    img {
      border-radius: 8px;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }
  .card-info-group {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    .card-info {
      display: flex;
      justify-content: space-between;
      .card-title-group {
        .card-title {
          margin-bottom: 5px;
          font-weight: 700;
          font-size: 16px;
          line-height: 19.2px;
          color: ${({ theme }) => theme.color.darkBlack};
        }
        .card-place {
          margin-bottom: 3px;
          font-weight: 400;
          font-size: 12px;
          line-height: 14.4px;
          color: ${({ theme }) => theme.color.darkGray};
        }
        .card-price {
          font-weight: 600;
          font-size: 12px;
          line-height: 14.4px;
          color: ${({ theme }) => theme.color.red};
        }
      }
      .card-star {
        cursor: pointer;
      }
    }
  }

  .card-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .card-date {
      font-weight: 400;
      font-size: 8px;
      line-height: 9.6px;
      color: ${({ theme }) => theme.color.lightBlack};
    }
    .card-btn {
      cursor: pointer;
      height: 16px;
      border-radius: 4px;
      background: ${({ theme }) => theme.color.darkBlack};
      border: none;
      font-weight: 400;
      font-size: 8px;
      line-height: 8px;
      color: ${({ theme }) => theme.color.white};
    }
  }
`;
