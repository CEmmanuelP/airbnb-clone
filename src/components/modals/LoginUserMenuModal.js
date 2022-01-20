import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Modal from "./Modal";
import UserMenu from "./UserMenu";

const LoginUserMenuModal = () => {
    const [openLoginModal, setOpenLoginModal] = useState(false);

    useEffect(() => {
        console.log(openLoginModal);
    }, [openLoginModal]);

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        window.location.reload();
    };

    const closeLogin = () => {
        setOpenLoginModal(false);
    };

    return (
        <>
            <UserMenuModalStyle>
                <UserMenu menu="메세지" />
                <UserMenu menu="알림" />
                <UserMenu menu="여행" />
                <UserMenu menu="위시리스트" />

                <div className="divider"></div>
                <UserMenu menu="숙소 호스트 되기" />
                <UserMenu menu="체험 호스팅 하기" />
                <UserMenu menu="호스트 추천하기" />
                <Link to="/account-settings">
                    <UserMenu menu="계정" />
                </Link>

                <div className="divider"></div>
                <UserMenu menu="도움말" />
                <Link
                    to="#"
                    onClick={(e) => {
                        logout(e);
                    }}
                >
                    <UserMenu menu="로그아웃" />
                </Link>
            </UserMenuModalStyle>
            {openLoginModal && (
                <Modal
                    open={openLoginModal}
                    close={closeLogin}
                    header="로그인 또는 회원가입"
                />
            )}
        </>
    );
};

const UserMenuModalStyle = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    left: -160px;
    top: 50px;
    width: 240px;
    color: #000000;
    background-color: #ffffff;
    box-shadow: rgb(0 0 0 / 8%) 0 2px 4px;
    border-radius: 16px;
    padding-top: 18px;
    padding-bottom: 18px;

    .divider {
        border-top: 1px solid var(--lightGray-color);
        margin-top: 5px;
        margin-bottom: 5px;
    }
`;

export default LoginUserMenuModal;
