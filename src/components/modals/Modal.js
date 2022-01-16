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
import validator from "validator";
import styled from "styled-components";
import axios from "axios";
import { ReactComponent as Error } from "../../assets/ic-error.svg";
import "./modal.css";

const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  const [loginType, setLoginType] = useState("phoneNumber");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailAuth, setEmailAuth] = useState("");

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

  const validateEmail = (e) => {
    let email = e.target.value;

    console.log(validator.isEmail(email));
    if (validator.isEmail(email)) {
      setEmailError("");
    } else {
      setEmailError("not email!");
    }
  };

  const emailSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(email);

      const url = `https://www.starmooncloudk.com/users/mail?userMail=${email}`;

      const res = await axios({
        method: "GET",
        url,
      });

      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

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
          {emailAuth === "1000" ? (
            <>
              <main className="main">
                <div className="content">
                  <div className="fullName">
                    <div className="lastName">
                      <input />
                    </div>
                    <div className="firstName">
                      <input />
                    </div>
                    <div className="join-info">
                      정부 발급 신분증에 표시된 이름과 일치하는지 확인하세요.
                    </div>
                  </div>
                </div>
              </main>
            </>
          ) : (
            <>
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
                        전화나 문자로 전화번호를 확인하겠습니다. 일반 문자
                        메시지 요금 및 데이터 요금이 부과됩니다.{" "}
                        <span>
                          <Link to="#">개인정보 처리방침</Link>
                        </span>
                      </div>
                      <button type="submit" className="continue">
                        계속
                      </button>
                    </form>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        emailSubmit(e);
                      }}
                      className="email-form"
                    >
                      <div className="email">
                        <input
                          className="input-email"
                          placeholder="이메일"
                          onChange={(e) => {
                            setEmail(e.target.value);
                            validateEmail(e);
                          }}
                        />
                      </div>
                      <div className="error">
                        {emailError ? (
                          <>
                            <Error />
                            <span className="error-detail">{emailError}</span>
                          </>
                        ) : (
                          ""
                        )}
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
                      <FontAwesomeIcon
                        icon={faGoogle}
                        className="ic ic-google"
                      />
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
            </>
          )}
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

            .email-form {
                .error {
                    margin-top: 10px;
                    display: flex;
                    color: red;

                    .error-detail {
                        margin-left: 5px;
                    }
                }
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
