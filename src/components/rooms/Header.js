import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/ic-logo.svg";

const RoomHeader = () => {
  return (
    <RoomHeaderStyle>
      <div className="header">
        <div className="inner-header">
          <div className="header-logo-wrapper">
            <Logo />
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
              <div>호스트 되기</div>
            </div>
          </div>
        </div>
      </div>
    </RoomHeaderStyle>
  );
};

const RoomHeaderStyle = styled.div`
  margin: 0;
  padding: 0;
  .header {
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    height: 80px;
    background-color: #ffffff;

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
        .header-menu {
          display: flex;
          & * {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }
        }
      }
    }
  }
`;

export default RoomHeader;
