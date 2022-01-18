import axios from "axios";
import styled from "styled-components";

const JoinModal = ({
  close,
  email,
  firstName,
  lastName,
  birth,
  password,
  phoneNumber,
  setFirstName,
  setLastName,
  setBirth,
  setPassword,
  setPhoneNumber,
}) => {
  const onSubmitSignup = async (e) => {
    try {
      e.preventDefault();

      const response = await axios.post(
        `${process.env.REACT_APP_BACK_URL}/users`,
        {
          userName: firstName,
          userLastName: lastName,
          userAuthority: "USER",
          password: password,
          email: email,
          phoneNumber: phoneNumber,
          birthday: birth,
        }
      );

      console.log(response.data.result.jwt);
      if (response.data.code === 1000) {
        localStorage.setItem("token", response.data.result.jwt);
        close();
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <JoinModalStyle>
      <main className="main-join">
        <div className="content">
          <form
            onSubmit={(e) => {
              onSubmitSignup(e);
            }}
          >
            <div className="fullName">
              <div className="lastName">
                <input
                  placeholder="이름"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </div>
              <div className="firstName">
                <input
                  placeholder="성"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </div>
              <div className="join-info">
                정부 발급 신분증에 표시된 이름과 일치하는지 확인하세요.
              </div>
            </div>
            <div className="birth">
              <div className="birthday">
                <input
                  placeholder="생년월일"
                  onChange={(e) => {
                    setBirth(e.target.value);
                  }}
                />
              </div>
              <div className="join-info">
                만 18세 이상의 성인만 회원으로 가입할 수 있습니다. 생일은
                에어비앤비의 다른 회원에게 공개되지 않습니다.
              </div>
            </div>
            <div className="email">
              <div className="email-input-wrapper">
                <input value={email} />
              </div>
              <div className="email-info">
                예약 확인과 영수증을 이메일로 보내드립니다.
              </div>
            </div>
            <div className="password">
              <div className="password-input-wrapper">
                <input
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="패스워드"
                />
              </div>
            </div>
            <input
              placeholder="전화번호"
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
            <div className="agreement">
              동의 및 계속하기 버튼을 선택하면 에어비앤비 서비스 약관, 결제
              서비스 약관 및 차별 금지 정책에 동의하며 개인정보 처리방침 정책을
              이해하는 것입니다.
            </div>
            <button type="submit">동의 및 계속하기</button>
          </form>
        </div>
      </main>
    </JoinModalStyle>
  );
};

const JoinModalStyle = styled.div`
  .main-join {
    color: #000000;
    padding: 20px;

    input {
      margin: 0;
      padding: 0;
      width: 99%;
      height: 2rem;
      border-radius: 8px;
      border: 1px solid gray;
      margin-bottom: 10px;
      padding-left: 10px;
    }

    button {
      height: 2.5rem;
      color: #ffffff;
      border-radius: 8px;
      background-color: var(--primary-color);
    }

    .content {
      form {
        display: flex;
        flex-direction: column;

        .fullName {
          width: 100%;

          .lastName {
          }

          .join-info {
            margin-top: 10px;
            margin-bottom: 10px;
          }
        }

        .agreement {
          font-size: 13px;
          color: #666666;
          margin-bottom: 10px;
        }
      }
    }
  }
`;

export default JoinModal;
