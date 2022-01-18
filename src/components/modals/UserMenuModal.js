import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Modal from "./Modal";
import UserMenu from "./UserMenu";

const UserMenuModal = () => {
    const [openLoginModal, setOpenLoginModal] = useState(false);
    const loginModal = useSelector((state) => state.HeaderReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(openLoginModal);
    }, [openLoginModal]);

    const onClickLogin = (e) => {
        e.preventDefault();
        setOpenLoginModal(!openLoginModal);
    };

    const closeLogin = () => {
        dispatch(closeModalAction());
    };

    return (
        <>
            <UserMenuModalStyle>
                <Link onClick={onClickLogin}>
                    <UserMenu menu="회원 가입" />
                </Link>
                <Link onClick={onClickLogin}>
                    <UserMenu menu="로그인" />
                </Link>

                <div className="divider"></div>
                <Link>
                    <UserMenu menu="숙소 호스트 되기" />
                </Link>
                <UserMenu menu="체험 호스팅 하기" />
                <UserMenu menu="도움말" />
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
    height: 200px;
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

export default UserMenuModal;
