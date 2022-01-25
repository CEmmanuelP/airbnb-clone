import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MiniCard = ({ room }) => {
  //   const onClick

  return (
    <MiniCardStyle className="mr-2">
      <div className="card">
        <Link
          to="#"
          onClick={(e) => {
            e.preventDefault();
            window.open("/rooms/1");
          }}
        >
          <div className="card-image">
            <img src={room.roomImages[0]} alt="img-minicard" />
          </div>
          <div className="card-info">
            <div className="card-reviews">
              <span className="ic">
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span className="score">{room.rating}</span>
              <span className="number">(후기 {room.reviewNumber}개)</span>
            </div>
            <div className="location">공동 주택 전체...</div>
            <div className="title">{room.hostName}</div>
            <div className="perprice">
              <span>₩{room.hostCost}</span> / 박
            </div>
            <div className="totalprice">총액 ₩61,230</div>
            <div className="date">
              <span>1월 13일~14일</span>
            </div>
          </div>
        </Link>
      </div>
    </MiniCardStyle>
  );
};

const MiniCardStyle = styled.div`
  & a {
    width: 100%;
    height: 100%;

    .card-image {
      width: 100%;
      height: 168px;

      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 16px;
      }
    }

    .card-info {
      display: flex;
      flex-direction: column;

      .card-reviews {
        font-size: 14px;
        font-weight: 300;
        margin-top: 10px;
        margin-bottom: 10px;

        .ic {
          color: var(--primary-color);
          margin-right: 5px;
        }

        .score {
          margin-right: 5px;
        }

        .number {
          color: #999999;
        }
      }

      .location {
        margin-bottom: 6px;
      }

      .title {
        width: 200px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-bottom: 10px;
      }

      .perprice {
        margin-bottom: 6px;
        span {
          font-weight: 600;
        }
      }

      .totalprice {
        color: #999999;
        text-decoration: underline;
        font-weight: 300;
        margin-bottom: 15px;
      }

      .date {
        font-weight: 500;
        font-size: 14px;
        padding-bottom: 5px;

        span {
          border: 1px solid #dddddd;
          padding: 3px 5px 3px 5px;
          border-radius: 3px;
        }
      }
    }
  }
`;

export default MiniCard;
