import {
  faApple,
  faFacebook,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./modal.css";

const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  const [loginType, setLoginType] = useState("phoneNumber");

  // modal 뒷배경 스크롤 방지
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  useEffect(() => {
    console.log(loginType);
  }, [loginType]);

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <LoginModalStyle className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            <button className="close" onClick={close}>
              {" "}
              &times;{" "}
            </button>
            {header}
          </header>
          <main className="main">
            <h1 className="title">에어비앤비에 오신 것을 환영합니다.</h1>
            <div className="content">
              {loginType === "phoneNumber" ? (
                <form action="#" className="number-form">
                  <div className="region">
                    <input className="input-region" placeholder="hi" />
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="ic-region"
                    />
                  </div>
                  <input className="phone" placeholder="전화번호"></input>
                  <div className="info">
                    전화나 문자로 전화번호를 확인하겠습니다. 일반 문자 메시지
                    요금 및 데이터 요금이 부과됩니다.{" "}
                    <span>
                      <Link to="#">개인정보 처리방침</Link>
                    </span>
                  </div>
                  <button type="submit" className="continue">
                    계속
                  </button>
                </form>
              ) : (
                <form action="#" className="email-form">
                  <div className="email">
                    <input className="input-email" placeholder="이메일" />
                  </div>
                  <button type="submit" className="continue">
                    계속
                  </button>
                </form>
              )}
              <div className="divider">
                <span>또는</span>
              </div>
              <div className="btn-login div-facebook">
                <button className="facebook">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="ic ic-facebook"
                  />
                  <span>페이스북으로 로그인하기</span>
                </button>
              </div>
              <div className="btn-login div-google">
                <button className="google">
                  <FontAwesomeIcon icon={faGoogle} className="ic ic-google" />
                  <span>구글로 로그인하기</span>
                </button>
              </div>
              <div className="btn-login div-apple">
                <button className="apple">
                  <FontAwesomeIcon icon={faApple} className="ic ic-apple" />
                  <span>Apple 계정으로 로그인하기</span>
                </button>
              </div>
              {loginType === "phoneNumber" ? (
                <div className="btn-login div-email">
                  <button
                    className="email"
                    onClick={() => {
                      setLoginType("email");
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="ic ic-email"
                    />
                    <span>이메일로 로그인하기</span>
                  </button>
                </div>
              ) : (
                <div className="btn-login div-phone">
                  <button
                    className="phone"
                    onClick={() => {
                      setLoginType("phoneNumber");
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faMobileAlt}
                      className="ic ic-phone"
                    />
                    <span>휴대전화로 로그인하기</span>
                  </button>
                </div>
              )}
            </div>
          </main>
          {/* <footer>
            <button className="close" onClick={close}>
              {" "}
              close{" "}
            </button>
          </footer> */}
        </section>
      ) : null}
    </LoginModalStyle>
  );
};

const LoginModalStyle = styled.div`
  .main {
    color:#000000;
    overflow-y; scroll;

    .title {
        font-size: 1.5rem;
        font-weight: 500;
        padding-top: 1rem;
        padding-bottom: 1.5rem;
    }

    .content {
        form {
            display: flex;
            flex-direction: column;

            .region {
                position: relative;
                border: 1px solid var(--lightGray-color);
                border-bottom: none;
                border-top-right-radius: 8px;
                border-top-left-radius: 8px;
                height: 2.8rem;

                

                .input-region {
                    width: 95%;
                    height: 2.6rem;
                    border: none;
                    border-top-right-radius: 8px;
                    border-top-left-radius: 8px;
                    padding-left: 20px;
                    
                    &::placeholder {
                    }
                }

                }

                .ic-region {
                    position: absolute;
                    top: 0.7rem;
                    right: 1rem;                    
                }
            }

            .phone {
                border: 1px solid var(--lightGray-color);
                border-bottom-right-radius: 8px;
                border-bottom-left-radius: 8px;
                height: 2.8rem;

                &::placeholder {
                    padding-left: 15px;
                }
            }

            .email {
                border: 1px solid var(--lightGray-color);
                border-radius: 8px;
                height: 2.8rem;

                input {
                    width: 97.5%;
                    height: 100%;
                    border-radius: 8px;
                    padding-left: 8px;
                }
            }

            .info {
                margin-top: 0.6rem;
                margin-bottom: 0.3rem;
                font-size: 12px;
                line-height: 14px;
                color: #555555;

                span {
                    text-decoration: underline;
                    color: #000000;
                    font-weight: 500;
                }
            }

            .continue {
                background-color: var(--primary-color);
                color: white;
                height: 3rem;
                border-radius: 8px;
                margin-top: 1rem;
                margin-bottom: 2rem;
            }
        }

        .divider {    
            text-align: center;
            overflow: hidden;
            font-size: 12px;
            color: #666666;

            span {
                position: relative;
                padding: 16px;

                &:before {
                    content: "";
                    position: absolute;
                    border-bottom: 1px solid #dddddd;
                    top: 50%;
                    right: 100%;
                    width: 5000px;
                }

                &:after {
                    content: "";
                    position: absolute;
                    border-bottom: 1px solid #dddddd;
                    top: 50%;
                    left: 100%;
                    width: 5000px;
                }
            } 
        }

        .btn-login {
            margin-top: 1rem;
            margin-bottom: 1rem;
            height: 3rem;
            position: relative;

            .email {
                border: 2px solid #aaaaaa;
            }

            .phone {
                border: 2px solid #aaaaaa;
            }

            button {
                width: 100%;
                height: 100%;
                border: 2px solid #aaaaaa; 
                background-color: #ffffff;
                border-radius: 8px;
                font-size: 0.9rem;
                color: #444444;

                .ic {
                    position: absolute;
                    top: 0.9rem;
                    left: 0.7rem;
                    font-size: 1.3rem;

                }

                .ic-facebook {
                    color: #adc1e6;
                    font-size: 1.3rem;
                }
            }
        }
    }
`;

export default Modal;
