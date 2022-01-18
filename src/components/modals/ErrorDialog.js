import styled from "styled-components";
import { ReactComponent as Error } from "../../assets/ic-error-big.svg";

const ErrorDialog = () => {
  return (
    <ErrorDialogStyle>
      <div className="ic-error">
        <Error />
      </div>
      <div className="error">
        <div className="title">다시 시도해주세요</div>
        <div className="desc">
          올바르지 않은 비밀번호입니다. 다시 시도하거나 다른 로그인 방법을
          선택하세요.
        </div>
      </div>
    </ErrorDialogStyle>
  );
};

const ErrorDialogStyle = styled.div`
  border: 1px solid var(--lightGray-color);
  height: 5rem;
  width: 100%;
  display: flex;
  border-radius: 16px;
  margin-bottom: 20px;
  align-items: center;
  font-size: 14px;

  .ic-error {
    color: red;
    font-size: 16rem;
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .error {
    .title {
      font-weight: 600;
      color: black;
      margin-bottom: 10px;
    }

    .desc {
      color: gray;
      width: 80%;
    }
  }
`;

export default ErrorDialog;
