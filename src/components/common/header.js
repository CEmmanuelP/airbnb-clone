import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import {
    faUser,
    faGlobe,
    faBars,
    faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useState } from "react";
import UserMenuModal from "../modals/UserMenuModal";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { openModalAction } from "../../store/actions/header";
import LoginUserMenuModal from "../modals/LoginUserMenuModal";
import { ReactComponent as Search } from "../../assets/ic-search.svg";

const Header = () => {
    const dispatch = useDispatch();
    const [users, setUsers] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const [userMenuModal, setUserMenuModal] = useState(false);
    const token = localStorage.getItem("token");

    const loginModal = useSelector((state) => state.HeaderReducer);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        console.log(loginModal);
    }, [loginModal]);

    // const onClickHosting = (e) => {
    //     e.preventDefault();
    //     if (!users) {
    //         dispatch(openModalAction());
    //     } else {
    //         console.log(users);
    //     }
    // };

    const onClickUserButton = (e) => {
        e.preventDefault();
        setUserMenuModal(!userMenuModal);
    };

    const onClickHosting = (e) => {
        console.log("onClickHosting");
        e.preventDefault();

        if (token) {
            window.location.href = "http://localhost:3000/hosting";
        } else {
            console.log("login please!");
        }
    };

    const fetchUsers = async () => {
        try {
            console.log("start fetchUsers");

            const response = await axios.get(
                `${process.env.REACT_APP_BACK_URL}/users`,
                {
                    headers: {
                        "X-ACCESS-TOKEN": `${token}`,
                    },
                }
            );

            console.log(response.data);

            if (response.data.code === 1000) {
                setUsers(response.data.result);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <HeaderStyle className={scrolled ? "scrolled" : null}>
            <div className="notification">
                <Link to="#">
                    에어비앤비의 코로나19 대응 방안에 대한 최신 정보를
                    확인하세요.
                </Link>
            </div>
            <div className="div-header">
                <div className="div-header-logo">
                    <Link to="/" className="div-header-logo-link">
                        <svg width="102" height="32" fill="currentcolor">
                            <path d="M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.5-.99-.76-1.47-.32-.57-.63-1.18-1.14-1.76a5.3 5.3 0 00-8.2 0c-.47.58-.82 1.19-1.14 1.76-.25.52-.5 1.03-.76 1.5l-.1.2c-2.45 4.8-4.84 9.68-7.04 14.48l-.06.06c-.22.52-.48 1.06-.73 1.64-.16.35-.32.73-.48 1.15a6.8 6.8 0 007.2 9.23 8.38 8.38 0 003.18-1.1c1.3-.73 2.55-1.79 3.95-3.32 1.4 1.53 2.68 2.59 3.95 3.33A8.38 8.38 0 0022.75 32a6.79 6.79 0 006.75-5.83 5.94 5.94 0 00-.26-3.5zm-14.36 1.66c-1.72-2.2-2.84-4.22-3.22-5.95a5.2 5.2 0 01-.1-1.96c.07-.51.26-.96.52-1.34.6-.87 1.65-1.41 2.8-1.41a3.3 3.3 0 012.8 1.4c.26.4.45.84.51 1.35.1.58.06 1.25-.1 1.96-.38 1.7-1.5 3.74-3.21 5.95zm12.74 1.48a4.76 4.76 0 01-2.9 3.75c-.76.32-1.6.41-2.42.32-.8-.1-1.6-.36-2.42-.84a15.64 15.64 0 01-3.63-3.1c2.1-2.6 3.37-4.97 3.85-7.08.23-1 .26-1.9.16-2.73a5.53 5.53 0 00-.86-2.2 5.36 5.36 0 00-4.49-2.28c-1.85 0-3.5.86-4.5 2.27a5.18 5.18 0 00-.85 2.21c-.13.84-.1 1.77.16 2.73.48 2.11 1.78 4.51 3.85 7.1a14.33 14.33 0 01-3.63 3.12c-.83.48-1.62.73-2.42.83a4.76 4.76 0 01-5.32-4.07c-.1-.8-.03-1.6.29-2.5.1-.32.25-.64.41-1.02.22-.52.48-1.06.73-1.6l.04-.07c2.16-4.77 4.52-9.64 6.97-14.41l.1-.2c.25-.48.5-.99.76-1.47.26-.51.54-1 .9-1.4a3.32 3.32 0 015.09 0c.35.4.64.89.9 1.4.25.48.5 1 .76 1.47l.1.2c2.44 4.77 4.8 9.64 7 14.41l.03.03c.26.52.48 1.1.73 1.6.16.39.32.7.42 1.03.19.9.29 1.7.19 2.5zM41.54 24.12a5.02 5.02 0 01-3.95-1.83 6.55 6.55 0 01-1.6-4.48 6.96 6.96 0 011.66-4.58 5.3 5.3 0 014.08-1.86 4.3 4.3 0 013.7 1.92l.1-1.57h2.92V23.8h-2.93l-.1-1.76a4.52 4.52 0 01-3.88 2.08zm.76-2.88c.58 0 1.09-.16 1.57-.45.44-.32.8-.74 1.08-1.25.25-.51.38-1.12.38-1.8a3.42 3.42 0 00-1.47-3.04 2.95 2.95 0 00-3.12 0c-.44.32-.8.74-1.08 1.25a4.01 4.01 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.98.45 1.55.45zM53.45 8.46c0 .35-.06.67-.22.93-.16.25-.38.48-.67.64-.29.16-.6.22-.92.22-.32 0-.64-.06-.93-.22a1.84 1.84 0 01-.67-.64 1.82 1.82 0 01-.22-.93c0-.36.07-.68.22-.93.16-.3.39-.48.67-.64.29-.16.6-.23.93-.23a1.84 1.84 0 011.6.86 2 2 0 01.21.94zm-3.4 15.3V11.7h3.18v12.08h-3.19zm11.68-8.9v.04c-.15-.07-.35-.1-.5-.13-.2-.04-.36-.04-.55-.04-.89 0-1.56.26-2 .8-.48.55-.7 1.32-.7 2.31v5.93h-3.19V11.69h2.93l.1 1.83c.32-.64.7-1.12 1.24-1.48a3.1 3.1 0 011.81-.5c.23 0 .45.02.64.06.1.03.16.03.22.06v3.2zm1.28 8.9V6.74h3.18v6.5c.45-.58.96-1.03 1.6-1.38a5.02 5.02 0 016.08 1.31 6.55 6.55 0 011.6 4.49 6.96 6.96 0 01-1.66 4.58 5.3 5.3 0 01-4.08 1.86 4.3 4.3 0 01-3.7-1.92l-.1 1.57-2.92.03zm6.15-2.52c.57 0 1.08-.16 1.56-.45.44-.32.8-.74 1.08-1.25.26-.51.38-1.12.38-1.8 0-.67-.12-1.28-.38-1.79a3.75 3.75 0 00-1.08-1.25 2.95 2.95 0 00-3.12 0c-.45.32-.8.74-1.09 1.25a4.01 4.01 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.98.45 1.56.45zm7.51 2.53V11.69h2.93l.1 1.57a3.96 3.96 0 013.54-1.89 4.1 4.1 0 013.82 2.44c.35.76.54 1.7.54 2.75v7.24h-3.19v-6.82c0-.84-.19-1.5-.57-1.99-.38-.48-.9-.74-1.56-.74-.48 0-.9.1-1.27.32-.35.23-.64.52-.86.93a2.7 2.7 0 00-.32 1.35v6.92h-3.16zm12.52 0V6.73h3.19v6.5a4.67 4.67 0 013.73-1.89 5.02 5.02 0 013.95 1.83 6.57 6.57 0 011.59 4.48 6.95 6.95 0 01-1.66 4.58 5.3 5.3 0 01-4.08 1.86 4.3 4.3 0 01-3.7-1.92l-.09 1.57-2.93.03zm6.18-2.53c.58 0 1.09-.16 1.56-.45.45-.32.8-.74 1.09-1.25.25-.51.38-1.12.38-1.8a3.42 3.42 0 00-1.47-3.04 2.95 2.95 0 00-3.12 0c-.44.32-.8.74-1.08 1.25a3.63 3.63 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.95.45 1.55.45z"></path>
                        </svg>
                    </Link>
                </div>
                <div className="div-header-category">
                    <NavLink to="#">숙소</NavLink>
                    <NavLink to="#">체험</NavLink>
                    <NavLink to="#">온라인 체험</NavLink>
                </div>

                <div className="div-header-menus">
                    <Link
                        to="#"
                        onClick={(e) => {
                            onClickHosting(e);
                        }}
                    >
                        호스트 되기
                    </Link>
                    <Link to="#">
                        <FontAwesomeIcon icon={faGlobe} />
                    </Link>
                    <div className="user">
                        <Link to="#" onClick={onClickUserButton}>
                            <FontAwesomeIcon
                                icon={faBars}
                                className="text-2xl menu"
                            />
                            <FontAwesomeIcon
                                icon={faUser}
                                className="text-2xl userIcon"
                            />
                        </Link>
                        {userMenuModal &&
                            (users ? (
                                <LoginUserMenuModal />
                            ) : (
                                <UserMenuModal />
                            ))}
                    </div>
                </div>
                {/* search menu */}
                <form className="search" action="/houses">
                    {scrolled ? (
                        <div className="scrolled-placeholder">
                            검색 시작하기
                        </div>
                    ) : (
                        ""
                    )}
                    <div className="overlay">
                        <div className="field">
                            <label htmlFor="location">위치</label>
                            <input
                                id="location"
                                placeholder="어디로 여행가세요?"
                            />
                        </div>

                        <div className="field">
                            <label>체크인</label>
                            <input placeholder="날짜 입력" />
                        </div>

                        <div className="field">
                            <label>체크아웃</label>
                            <input placeholder="날짜 입력" />
                        </div>

                        <div className="field">
                            <label>인원</label>
                            <span className="guestNumber">게스트 추가</span>
                        </div>
                    </div>
                    <button
                        className="p-3 text-white border rounded-full border-black-200 bg-primary"
                        type="submit"
                    >
                        <Search className="" />
                        {/* <FontAwesomeIcon
                            icon={faSearch}
                            className="w-1 h-1 p-4 text-3xl bg-primary-color"
                        /> */}
                    </button>
                </form>
            </div>
        </HeaderStyle>
    );
};

const HeaderStyle = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    background-color: #000000;
    color: #ffffff;
    transition: background 0.5s ease, border-bottom 0.5s;

    &.scrolled {
        background: #ffffff;
        color: var(--primary-color);
        border-bottom: 1px solid #666666;

        .notification {
            display: none;
            transition: all 0.2s ease;
        }

        .div-header-category {
            opacity: 0;
            pointer-events: none;
        }

        .div-header .search {
            box-shadow: 0 0 0 2px #dddddd;
            transform: translate(-50%, 0.125rem) scale(0.83);
            width: 300px;
            height: 50px;
            top: -12px;

            .overlay {
                display: none;
            }

            .search-button {
                width: 1.2rem;
                height: 1rem;
                .ic-search-button {
                    width: 1rem;
                    height: 1rem;
                    padding: 0.75rem;
                }
            }

            .scrolled-placeholder {
                color: var(--gray-color);
                padding-left: 15px;
                padding-right: 120px;
                font-weight: 600;
            }
        }

        .div-header-menus {
            color: var(--gray-color);

            .user {
                position: relative;
            }
        }
    }

    & > div {
        margin-left: 5rem;
        margin-right: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .notification {
        width: 100%;
        max-width: 1600px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 3rem;
        margin: 0 auto;
        font-size: 0.85rem;
        text-decoration: underline;
    }

    .div-header {
        display: flex;
        height: 100%;
        width: 100%;
        max-width: 1600px;
        margin: 0 auto;
        height: 5rem;

        /* position: relative; */
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;

        .search {
            position: absolute;
            transform: translate(-50%, 150%);
            display: flex;
            left: 50%;
            top: 1.5rem;
            background-color: white;
            padding: 0.5rem;
            border-radius: 99px;
            align-items: center;
            margin: 1.5rem 0px;
            max-width: 810px;
            width: 60vw;
            box-shadow: 0 1rem 3rem -1rem #1e1e38;
            transition: all 0.2s;
            transform-origin: center;

            .search-button {
                margin-right: 2rem;
                width: 1.5rem;
                height: 1.5rem;
                display: flex;
                justify-items: center;
                align-items: center;
                border: none;
                width: 32px;
                height: 32px;
                background-color: #ff385c;
                background: transparent;

                .ic-search-button {
                    width: 1.2rem;
                    height: 1.2rem;
                    background-color: #ff385c;
                    color: #ffffff;
                    padding: 1rem;
                    border-radius: 100%;
                }
            }

            .overlay {
                width: 100%;
                height: 100%;
                background: #ffffff;
                border-radius: 99px;
                display: flex;
                align-items: center;
                left: 0;
                top: 0;
                transition: all 0.2s;

                label,
                input,
                .guestNumber {
                    background: none;
                    font-size: 0.7rem;
                    font-weight: 600;
                    border: none;
                    line-height: 1.5;
                    display: block;
                    color: black;
                    outline: none;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                input {
                    width: 100%;
                    font-weight: 700;

                    ::placeholder {
                        color: #666666;
                        font-weight: 400;
                        opacity: 0.5;
                    }
                }

                .guestNumber {
                    font-weight: 700;
                    color: #666666;
                    font-weight: 400;
                    opacity: 0.5;
                }
            }

            .field {
                width: 100%;
                padding: 0.4rem 1.5rem;
                border-radius: 99px;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                transition: background 0.2s;
                position: relative;

                & + .field:before {
                    position: absolute;
                    content: "";
                    width: 1px;
                    height: 1.5rem;
                    background: #dddddd;
                    border-radius: 2px;
                    left: 0;
                    transition: transform 0.2s;
                }

                &:hover,
                &:focus-within {
                    background: #eeeeee;
                }
                &:last-of-type {
                    padding-right: 10rem;
                }
            }
        }
        .overlay:hover .field::before,
        .overlay:focus-within .field::before {
            transform: scale(0);
        }

        .div-header-category {
            display: flex;
            align-items: center;
            padding-left: 7rem;

            & > * {
                position: relative;
                padding-left: 1rem;
                padding-right: 1rem;

                /* &::before {
                    position: absolute;
                    content: "";
                    width: 1rem;
                    height: 2px;
                    border-radius: 2px;
                    background: #ffffff;
                    left: calc(50% - 0.5rem);
                    bottom: -0.8rem;
                    transform: scaleX(0);
                    transform-origin: center center;
                    transition: transform 0.2s ease 0s;
                } */

                &.active::before {
                    transform: scaleX(1);
                }
            }
        }

        .div-header-menus {
            display: flex;
            align-items: center;

            & > * {
                position: relative;
                padding-left: 0.6rem;
                padding-right: 0.6rem;
            }
            .user {
                background: rgb(250, 250, 252);
                color: #666666;
                border-radius: 99px;
                padding: 0.4rem 0.7rem 0.4rem 1rem;
                margin-left: 0.5rem;

                .menu {
                    margin-right: 1rem;
                    padding-bottom: 0.4rem;
                    font-size: 0.9rem;
                }

                .userIcon {
                    border: 1px solid #666666;
                    border-radius: 100%;
                    padding: 0.3rem;
                    background-color: #666666;
                    color: #ffffff;
                }
            }
        }
    }
`;

export default Header;
