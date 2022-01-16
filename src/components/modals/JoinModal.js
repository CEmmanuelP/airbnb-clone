import styled from "styled-components";

const JoinModal = () => {
  return (
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
          <div className="birth">
            <div className="birthday">
              <input />
            </div>
            <div className="join-info"></div>
          </div>
          <div className="email"></div>
        </div>
      </main>
    </>
  );
};

const JoinModalStyle = styled.div`

    .main {
        color:#000000;
        overflow-y; scroll;

        .content {
            
            form {
                display: flex;
                flex-direction: column;
            }
        }
    }

`;

export default JoinModal;
