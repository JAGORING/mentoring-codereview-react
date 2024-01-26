import styled from 'styled-components';

import { useFavoriteActions, useFavoriteList } from '@src/store/favoriteStore';

import StarOn from 'assets/icons/star-on.png';
import StarOff from 'assets/icons/star-off.png';

import { addCommasToNumber } from '@utils/formatter';

export const ExhibitionDetail = ({ exhibition }: { exhibition: Exhibition }) => {
  const favoriteList = useFavoriteList();
  const { addFavorite, deleteFavorite } = useFavoriteActions();

  return (
    <DetailWrap>
      <div className="detail-img">
        <img src={exhibition.imageUrl} alt={exhibition.title} />
      </div>
      <div className="detail-info-group">
        <div className="detail-info">
          <div className="detail-title-group">
            <div className="detail-title">{exhibition.title}</div>
            <div className="detail-price">{addCommasToNumber(exhibition.price)}원</div>
          </div>
        </div>
        <div className="detail-bottom">
          <div className="detail-bottom-content">
            <div className="detail-place">{exhibition.place}</div>
            <div className="detail-date">
              {exhibition.date.started} ~ {exhibition.date.ended}
            </div>
          </div>
          <div
            className="detail-star"
            onClick={() => {
              if (!favoriteList.includes(exhibition.id)) {
                addFavorite(exhibition.id);
              } else {
                deleteFavorite(exhibition.id);
              }
            }}
          >
            <img
              src={favoriteList.includes(exhibition.id) ? StarOn : StarOff}
              alt="favorite Icon"
            />
          </div>
        </div>
      </div>
    </DetailWrap>
  );
};

const DetailWrap = styled.div`
  .detail-img {
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }
  .detail-info-group {
    padding: 8px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    .detail-info {
      display: flex;
      justify-content: space-between;
      .detail-title-group {
        .detail-title {
          margin-bottom: 5px;
          font-weight: 600;
          font-size: 28px;
          line-height: 34.4px;
          color: ${({ theme }) => theme.color.darkBlack};
        }
        .detail-price {
          font-weight: 600;
          font-size: 20px;
          line-height: 24.8px;
          color: ${({ theme }) => theme.color.red};
        }
      }
    }
    .detail-bottom {
      margin: 8px 0 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      color: ${({ theme }) => theme.color.darkBlack};
      .detail-star {
        width: 28px;
        height: 28px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
        }
      }
    }
  }
`;
