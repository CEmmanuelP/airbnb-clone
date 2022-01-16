import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import RoomHeader from "../../components/rooms/Header";
import { ReactComponent as Star } from "../../assets/ic-star.svg";
import { ReactComponent as Share } from "../../assets/ic-share.svg";
import { ReactComponent as Save } from "../../assets/ic-save.svg";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const RoomPage = () => {
  return (
    <>
      <RoomPageStyle>
        <RoomHeader />
        <div className="main">
          <div className="title-div">
            <h1 className="title">
              [방역완비] 깨끗하고 아늑한 공간의 내가 찾던 바로 그 HOUSE *
            </h1>
          </div>
          <div className="info">
            <div className="review-container">
              <div className="review">
                <Star className="ic-review" />
                <span>4.81</span>
                <span className="separator">·</span>
              </div>
              <div className="number">
                <Link to="#">후기 270개</Link>
                <span className="separator">·</span>
              </div>
              <div className="superhost">
                <FontAwesomeIcon icon={faMedal} className="ic-superhost" />
                <span>슈퍼호스트</span>
                <span className="separator">·</span>
              </div>
              <div className="address">
                <Link to="#">Sincheon 4(sa)-dong, Dong-gu, 대구, 한국</Link>
              </div>
            </div>
            <div className="review-buttons">
              <div className="share">
                <Share />
                <span>
                  <Link to="#">공유하기</Link>
                </span>
              </div>
              <div className="save">
                <Save />
                <span>
                  <Link to="#">저장</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </RoomPageStyle>
    </>
  );
};

const RoomPageStyle = styled.div`
  .main {
    .title-div {
      padding-left: 80px;
      padding-right: 80px;
      margin-top: 20px;
      margin-bottom: 10px;

      .title {
        max-width: 1080px;
        margin: 0 auto;
        font-size: 1.7rem;
        font-weight: 500;
      }
    }

    .info {
      padding-left: 80px;
      padding-right: 80px;
      margin-top: 10px;
      max-width: 1080px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      color: #666666;

      .review-container {
        display: flex;

        .separator {
          margin-left: 8px;
          margin-right: 8px;
        }

        .review {
          display: flex;

          .ic-review {
            color: var(--primary-color);
            margin-right: 5px;
          }
        }

        .number {
          a {
            color: #000000;
          }
        }

        .superhost {
          .ic-superhost {
            color: var(--primary-color);
            margin-right: 5px;
          }
        }

        .address {
          a {
            color: #666666;
            font-size: 15px;
            font-weight: 600;
          }
        }
      }

      .review-buttons {
        display: flex;

        .share {
          display: flex;
          margin-right: 10px;

          span {
            margin-left: 10px;
            font-size: 14px;

            a {
              color: #000000;
            }
          }
        }

        .save {
          display: flex;

          span {
            margin-left: 10px;
            font-size: 14px;

            a {
              color: #000000;
            }
          }
        }
      }
    }
  }
`;

export default RoomPage;
