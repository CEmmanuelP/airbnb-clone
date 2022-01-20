import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faStar, faWonSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const Card = () => {
    return (
        <CardStyle>
            <div className="img">
                <Link to="#">
                    <img
                        src="https://a0.muscache.com/im/pictures/4243bc7e-688f-45a1-89d7-565682145b8a.jpg?im_w=720"
                        width="100%"
                        height="100%"
                        alt="img"
                    />
                </Link>
            </div>
            <div className="metadata">
                <div className="metadata-wrapper">
                    <div className="intro">
                        <div className="information">
                            <div className="desc">중구의 공동 주택 전체</div>
                            <div className="title">
                                대구 시내 중구 깨끗하고 조용한 Modern House
                            </div>
                        </div>
                        <div className="heart">
                            <Link to="#">
                                <FontAwesomeIcon icon={faHeart} />
                            </Link>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="description">
                        <div>
                            최대 인원 4명 · 침실 2개 · 침대 2개 · 욕실 1개
                        </div>
                        <div>
                            무료 주차 공간 · 주방 · 무선 인터넷 · 셀프 체크인
                        </div>
                    </div>
                    <div className="info">
                        <div className="review">
                            <div className="ic-star">
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <div className="score">4.72</div>
                            <div className="review-number">(후기237개)</div>
                        </div>
                        <div className="price">
                            <div className="perprice">
                                <span className="cost">
                                    <FontAwesomeIcon icon={faWonSign} />
                                    58,920
                                </span>
                                <span className=""> / 박</span>
                            </div>
                            <div className="totalprice">
                                <button>총액&nbsp;₩235,680</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CardStyle>
    );
};

const CardStyle = styled.div`
    border-bottom: 1px solid #dedede;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    display: flex;

    .img {
        width: 300px;
        height: 100%;

        & img {
            border-radius: 16px;
        }
    }

    .metadata {
        margin-left: 16px;
        flex-grow: 1;
        height: 200px;

        .metadata-wrapper {
            display: flex;
            flex-direction: column;
            height: 200px;

            .intro {
                display: flex;
                justify-content: space-between;

                .information {
                    .desc {
                        color: var(--gray-color);
                        font-size: 14px;
                        margin-bottom: 5px;
                    }

                    .title {
                        font-size: 18px;
                        line-height: 22px;
                    }
                }

                .heart {
                    font-size: 21px;
                }
            }

            .divider {
                margin-top: 11px;
                width: 32px;
                border-top: 1px solid #dddddd;
            }

            .description {
                color: var(--gray-color);
                font-size: 14px;
                margin-bottom: 4px;

                & > div {
                    margin-top: 9px;
                }
            }

            .info {
                flex-grow: 1;
                display: flex;
                justify-content: space-between;

                .review {
                    display: flex;
                    align-items: end;
                    font-size: 14px;

                    .ic-star {
                        color: var(--primary-color);
                    }

                    .score {
                        margin-left: 5px;
                        font-weight: 700;
                    }

                    .review-number {
                        margin-left: 3px;
                        color: var(--gray-color);
                    }
                }

                .price {
                    display: flex;
                    flex-direction: column;
                    align-items: end;
                    justify-content: end;

                    .perprice {
                        font-size: 18px;
                        margin-bottom: 5px;

                        .cost {
                            font-weight: 700;
                        }
                    }

                    .totalprice {
                        font-size: 14px;
                        color: var(--gray-color);

                        button {
                            font-size: 14px;
                            color: var(--gray-color);
                            border: none;
                            padding: 0;
                            background-color: transparent;
                            text-decoration: underline;
                        }
                    }
                }
            }
        }
    }
`;

export default Card;
