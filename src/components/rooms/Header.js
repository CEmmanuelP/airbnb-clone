import { faBars, faGlobe, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/ic-logo.svg";

const RoomHeader = () => {
  return (
    <RoomHeaderStyle>
      <div className="header">
        <div className="inner-header">
          <div className="header-logo-wrapper">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="header-input-wrapper">
            <input className="header-input" />
          </div>
          <div className="header-menu-wrapper">
            <div className="header-menu">
              <div>호스트 되기</div>
              <div>
                <FontAwesomeIcon icon={faGlobe} />
              </div>
              <div className="user">
                <Link to="#">
                  <FontAwesomeIcon icon={faBars} className="menu" />
                  <FontAwesomeIcon icon={faUser} className="userIcon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RoomHeaderStyle>
  );
};

const RoomHeaderStyle = styled.div`
  border-bottom: 1px solid var(--lightGray-color);

  .header {
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    height: 80px;
    background-color: #ffffff;
    padding-left: 80px;
    padding-right: 80px;

    .inner-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 5rem;
      .header-logo-wrapper {
        padding-left: 1.5rem;
        color: var(--primary-color);
      }
      .header-input-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 5rem;
        .header-input {
          border: 1px solid #dddddd;
          border-radius: 100px;
          width: 15rem;
          height: 2.2rem;
          text-align: center;
        }
      }
      .header-menu-wrapper {
        padding-right: 1.5rem;
        color: var(--gray-color);
        .header-menu {
          display: flex;
          align-items: center;

          & * {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }

          .user {
            position: relative;
            background: rgb(250, 250, 252);
            border-radius: 99px;
            padding: 0.8rem 0.3rem 0.8rem 0.3rem;
            margin-left: 0.5rem;
            border: 1px solid #dddddd;

            a {
              color: #444444;
            }
          }
        }
      }
    }
  }
`;

export default RoomHeader;
