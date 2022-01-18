import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ErrorDialog from "./ErrorDialog";

const LoginModal = ({ email, close, password, setPassword }) => {
  const [errorDialog, setErrorDialog] = useState(false);

  const onSubmitLogin = async (e) => {
    try {
      e.preventDefault();

      const response = await axios.post(
        `${process.env.REACT_APP_BACK_URL}/users/account`,
        {
          userMail: email,
          userPass: password,
        }
      );

      console.log(response.data);
      if (response.data.code === 1000) {
        localStorage.setItem("token", response.data.result.jwt);
        setErrorDialog(false);
        close();
        window.location.reload();
      }

      if (response.data.code === 3014) {
        setErrorDialog(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LoginModalStyle>
      <form
        onSubmit={(e) => {
          onSubmitLogin(e);
        }}
      >
        {errorDialog && <ErrorDialog />}
        <div>
          <input
            placeholder="비밀번호"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button className="login" type="submit">
          로그인
        </button>
      </form>
      <div>
        <Link to="#">비밀번호를 잊으셨나요?</Link>
      </div>
    </LoginModalStyle>
  );
};

export default LoginModal;

const LoginModalStyle = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;

  input {
    margin: 0;
    padding: 0;
    width: 97.5%;
    height: 2.5rem;
    border-radius: 8px;
    padding-left: 10px;
  }

  .login {
    margin-top: 10px;
    height: 2.5rem;
    width: 100%;
    border-radius: 8px;
    margin-bottom: 10px;
    background-color: var(--primary-color);
  }
`;
