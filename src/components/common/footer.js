import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="menu">
        <div className="menu-column">
          <div className="menu-column-title">에어비앤비 지원</div>
          <ul className="menu-column-items">
            <li className="menu-column-item">도움말 센터</li>
            <li className="menu-column-item">안전 정보</li>
            <li className="menu-column-item">예약 취소 옵션</li>
            <li className="menu-column-item">
              에어비앤비의 코로나19 대응 방안
            </li>
            <li className="menu-column-item">장애인 지원</li>
            <li className="menu-column-item">이웃 민원 신고</li>
          </ul>
        </div>
        <div className="menu-column">
          <div className="menu-column-title">커뮤니티</div>
          <ul className="menu-column-items">
            <li className="menu-column-item">Airbnb.org:재난 구호 숙소</li>
            <li className="menu-column-item">아프간 난민 지원</li>
            <li className="menu-column-item">다양성과 소속감 증진</li>
            <li className="menu-column-item">차별 철폐를 위한 노력</li>
          </ul>
        </div>
        <div className="menu-column">
          <div className="menu-column-title">호스팅</div>
          <ul className="menu-column-items">
            <li className="menu-column-item">호스팅 시작하기</li>
            <li className="menu-column-item">
              에어커버: 호스트를 위한 보호 프로그램
            </li>
            <li className="menu-column-item">호스팅 자료 둘러보기</li>
            <li className="menu-column-item">커뮤니티 포럼 방문하기</li>
            <li className="menu-column-item">책임감 있는 호스팅</li>
          </ul>
        </div>
        <div className="menu-column">
          <div className="menu-column-title">소개</div>
          <ul className="menu-column-items">
            <li className="menu-column-item">뉴스룸</li>
            <li className="menu-column-item">새로운 기능에 대해 알아보기</li>
            <li className="menu-column-item">에어비앤비 공동창업자의 메세지</li>
            <li className="menu-column-item">채용정보</li>
            <li className="menu-column-item">투자자 정보</li>
            <li className="menu-column-item">에어비앤비 Luxe</li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <div className="terms">
          <div className="copy">© 2022 Airbnb, Inc.</div>
          <div className="term">
            <span className="term-delimiter">·</span>
            <Link to="#">개인정보 처리방침</Link>
            <span className="term-delimiter">·</span>
            <Link to="#">이용약관</Link>
            <span className="term-delimiter">·</span>
            <Link to="#">사이트맵</Link>
            <span className="term-delimiter">·</span>
            <Link to="#">한국의 변경된 환불 정책</Link>
            <span className="term-delimiter">·</span>
            <Link to="#">회사 세부정보</Link>
          </div>
        </div>
        <div className="etc">
          <div className="settings">
            <div className="language">
              <FontAwesomeIcon icon={faGlobe} className="ic-language" />
              <Link to="#">한국어(KR)</Link>
            </div>
            <div className="currency">
              <span className="ic-currency">₩</span>
              <Link to="#">KRW</Link>
            </div>
          </div>
          <div className="urls">
            <ul className="links">
              <li>
                <Link to="#">
                  <FontAwesomeIcon icon={faFacebook} className="ic-facebook" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FontAwesomeIcon icon={faTwitter} className="ic-twitter" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="ic-instagram"
                  />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <svg
                    viewBox="0 0 1024 1024"
                    style={{ height: "18px", width: "18px" }}
                  >
                    <path
                      d="m984 1024h-944c-22.1 0-40-17.9-40-40v-944c0-22.1 17.9-40 40-40h944c22.1 0 40 17.9 40 40v944c0 22.1-17.9 40-40 40z"
                      fill="#00c73c"
                    ></path>
                    <path
                      d="m757 203.2h-490.4c-70.4 0-127.5 57.1-127.5 127.5v303.5c0 70.7 57.3 127.9 127.9 127.9h173.8l58.7 101.6c5.4 9.3 18.9 9.3 24.2 0l58.7-101.6h174.2c70.6 0 128.5-57.8 128.5-128.5v-302.4c0-70.7-57.3-128-128.1-128z"
                      fill="#fff"
                    ></path>
                    <g fill="#ff812c">
                      <path d="m390.7 495.6c0 38.7-28 68.5-62.1 68.5-17.4 0-30.1-6-38.7-15.8v12.2h-38.9v-173.1h38.9v55.5c8.6-9.9 21.3-15.8 38.7-15.8 34 0 62.1 29.8 62.1 68.5zm-36.4 0c0-21.1-14-34.3-33.4-34.3s-33.4 13.2-33.4 34.3 14 34.3 33.4 34.3c19.3 0 33.4-13.2 33.4-34.3z"></path>
                      <path d="m477.6 495.6c0-38.7 30.6-68.5 68.8-68.5s68.8 29.9 68.8 68.5c0 38.7-30.6 68.5-68.8 68.5s-68.8-29.8-68.8-68.5zm101.1 0c0-19.9-14-33.2-32.3-33.2s-32.3 13.2-32.3 33.2c0 19.9 14 33.2 32.3 33.2 18.2 0 32.3-13.2 32.3-33.2z"></path>
                      <path d="m704.6 616.1c34.5 0 68.5-18.4 68.5-62.1v-123.3h-37.9v13.2c-8.6-10.6-21-16.9-37.9-16.9-36.9 0-63.9 30.1-63.9 66 0 35.8 27 65.9 63.9 65.9 16.9 0 29.3-6.2 37.9-16.9v12c0 18.4-11.2 27.8-29.3 27.8h-1.3zm-.7-90.5c-19.9 0-34-13.2-34-32.6s14-32.6 34-32.6c19.9 0 34 13.2 34 32.6s-14.1 32.6-34 32.6z"></path>
                      <path d="m394.3 382.7v35.1c13.4 2.6 21.3 11.8 21.3 27.4v115.3h38.9v-115.3c0-40.3-28.6-59.4-60.2-62.5z"></path>
                    </g>
                  </svg>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <svg
                    viewBox="0 0 1024 1024"
                    style={{ height: "18px", width: "18px" }}
                  >
                    <path
                      d="m984 1024h-944c-22.1 0-40-17.9-40-40v-944c0-22.1 17.9-40 40-40h944c22.1 0 40 17.9 40 40v944c0 22.1-17.9 40-40 40z"
                      fill="#fff"
                    ></path>
                    <g fill="#00c73c">
                      <path d="m0 198h1024v7h-1024z"></path>
                      <path d="m0 405h1024v7h-1024z"></path>
                      <path d="m0 612h1024v7h-1024z"></path>
                      <path d="m0 819h1024v7h-1024z"></path>
                    </g>
                    <path
                      d="m307 537 188.2 324.1c7.5 12.9 26.1 12.9 33.6 0l188.2-324.1z"
                      fill="#f4e49d"
                    ></path>
                    <path d="m307 0h410v537h-410z" fill="#00e831"></path>
                    <path d="m392 0h240v537h-240z" fill="#00c73c"></path>
                    <path
                      d="m392 148.5v240h240v-240zm188 182h-47.8l-41.2-62.8v62.8h-47v-124h45.8l42.2 62.4v-62.4h48z"
                      fill="#fff"
                    ></path>
                    <path d="m632 0h85v537h-85z" fill="#00a32a"></path>
                    <path
                      d="m528.8 861.1 188.2-324.1h-85l-119.5 333.7c6.3-.1 12.6-3.3 16.3-9.6z"
                      fill="#e0c141"
                    ></path>
                    <path
                      d="m448.8 781.2 46.4 79.9c7.5 12.9 26.1 12.9 33.6 0l46.4-79.9z"
                      fill="#2d2d2d"
                    ></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </FooterStyle>
  );
};

const FooterStyle = styled.div`
  background-color: #eeeeee;
  height: 400px;

  .menu {
    border-bottom: 1px solid #dddddd;
    display: flex;
    width: 1600px;
    margin: 0 auto;

    .menu-column {
      flex-grow: 1;
      height: 250px;
      padding-top: 40px;
      padding-bottom: 40px;
      font-size: 0.9rem;

      .menu-column-title {
        font-weight: 700;
      }

      .menu-column-items {
        padding-left: 0;
        margin-left: 0;

        .menu-column-item {
          margin-top: 22px;
          font-weight: 300;
          font-size: 0.8rem;
        }
      }
    }
  }

  .copyright {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1600px;
    height: 60px;
    margin: 0 auto;
    font-weight: 300;
    font-size: 0.8rem;

    .terms {
      display: flex;

      .term-delimiter {
        padding-left: 10px;
        padding-right: 10px;
      }
    }

    .etc {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .settings {
        display: flex;
        font-weight: 500;
        font-size: 14px;

        .language {
          padding-right: 15px;

          .ic-language {
            padding-right: 10px;
          }
        }

        .currency {
          padding-right: 15px;

          .ic-currency {
            padding-right: 10px;
          }
        }

        & a {
          text-decoration: underline;
        }
      }

      .urls {
        .links {
          display: flex;
          justify-content: space-around;

          & li {
            padding-left: 20px;
            width: 18px;
            height: 18px;
          }

          .ic-facebook,
          .ic-twitter,
          .ic-instagram {
            width: 18px;
            height: 18px;
          }
        }
      }
    }
  }
`;

export default Footer;
