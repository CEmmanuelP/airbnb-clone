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
import axios from "axios";

import "./modal.css";
import JoinModal from "./JoinModal";
import IndexModal from "./IndexModal";
import LoginModal from "./LoginModal";

const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  const [loginType, setLoginType] = useState("phoneNumber");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [birth, setBirth] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

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
    console.log(lastName);
  }, [lastName]);

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <ModalStyle className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            <button className="close" onClick={close}>
              {" "}
              &times;{" "}
            </button>
            {header}
          </header>
          {emailAuth ? (
            emailAuth === 1000 ? (
              <>
                <JoinModal
                  close={close}
                  email={email}
                  lastName={lastName}
                  firstName={firstName}
                  birth={birth}
                  password={password}
                  phoneNumber={phoneNumber}
                  setLastName={setLastName}
                  setFirstName={setFirstName}
                  setBirth={setBirth}
                  setPassword={setPassword}
                  setPhoneNumber={setPhoneNumber}
                />
              </>
            ) : (
              emailAuth === 2017 && (
                <LoginModal
                  email={email}
                  close={close}
                  password={password}
                  setPassword={setPassword}
                />
              )
            )
          ) : (
            <IndexModal
              email={email}
              loginType={loginType}
              emailError={emailError}
              setLoginType={setLoginType}
              setEmail={setEmail}
              setEmailAuth={setEmailAuth}
              setEmailError={setEmailError}
            />
          )}
        </section>
      ) : null}
    </ModalStyle>
  );
};

const ModalStyle = styled.div``;

export default Modal;
