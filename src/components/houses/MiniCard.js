import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MiniCard = () => {
  const onClick

  return (
    <MiniCardStyle>
      <div className="card">
        <Link to="#">
          <div className="card-image">
            <img
              src="https://a0.muscache.com/im/pictures/bc4080e4-e3e9-4846-8865-9c1dd840325f.jpg?im_w=720"
              alt="img-minicard"
            />
          </div>
          <div className="card-info">
            <div className="card-reviews">
              <span className="ic">
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span className="score">4.81</span>
              <span className="number">(후기 269개)</span>
            </div>
            <div className="location">공동 주택 전체...</div>
            <div className="title">
              [방역완비] 깨끗하고 아늑한 공간의 내가 찾던 바로 그 HOUSE *
            </div>
            <div className="perprice">
              <span>₩61,230</span> / 박
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
        width: 252px;
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
