import styled from "styled-components";

const JoinModal = () => {
    return (
        <JoinModalStyle>
            <main className="main-join">
                <div className="content">
                    <form>
                        <div className="fullName">
                            <div className="lastName">
                                <input />
                            </div>
                            <div className="firstName">
                                <input />
                            </div>
                            <div className="join-info">
                                정부 발급 신분증에 표시된 이름과 일치하는지
                                확인하세요.
                            </div>
                        </div>
                        <div className="birth">
                            <div className="birthday">
                                <input placeholder="생년월일" />
                            </div>
                            <div className="join-info">
                                만 18세 이상의 성인만 회원으로 가입할 수
                                있습니다. 생일은 에어비앤비의 다른 회원에게
                                공개되지 않습니다.
                            </div>
                        </div>
                        <div className="email">
                            <div className="email-input-wrapper">
                                <input />
                            </div>
                            <div className="email-info">
                                예약 확인과 영수증을 이메일로 보내드립니다.
                            </div>
                        </div>
                        <div className="password">
                            <div className="password-input-wrapper">
                                <input />
                            </div>
                        </div>
                        <div className="agreement">
                            동의 및 계속하기 버튼을 선택하면 에어비앤비 서비스
                            약관, 결제 서비스 약관 및 차별 금지 정책에 동의하며
                            개인정보 처리방침 정책을 이해하는 것입니다.
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

        .content {
            form {
                display: flex;
                flex-direction: column;

                .fullName {
                    border: 1px solid aqua;
                    width: 100%;

                    .lastName {
                        input {
                            width: auto;
                        }
                    }
                }
            }
        }
    }
`;

export default JoinModal;
