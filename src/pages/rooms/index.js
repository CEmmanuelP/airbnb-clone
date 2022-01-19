import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import RoomHeader from "../../components/rooms/Header";
import { ReactComponent as Star } from "../../assets/ic-star.svg";
import { ReactComponent as Share } from "../../assets/ic-share.svg";
import { ReactComponent as Save } from "../../assets/ic-save.svg";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const RoomPage = () => {
    return (
        <>
            <RoomPageStyle>
                <RoomHeader />
                <div className="main">
                    <div className="title-div">
                        <h1 className="title">
                            [방역완비] 깨끗하고 아늑한 공간의 내가 찾던 바로 그
                            HOUSE *
                        </h1>
                    </div>
                    <div className="info">
                        <div className="review-container">
                            <div className="review">
                                <Star className="ic-review" />
                                <span>4.81</span>
                                <span className="separator">·</span>
                            </div>
                            <div className="number">
                                <Link to="#">후기 270개</Link>
                                <span className="separator">·</span>
                            </div>
                            <div className="superhost">
                                <FontAwesomeIcon
                                    icon={faMedal}
                                    className="ic-superhost"
                                />
                                <span>슈퍼호스트</span>
                                <span className="separator">·</span>
                            </div>
                            <div className="address">
                                <Link to="#">
                                    Sincheon 4(sa)-dong, Dong-gu, 대구, 한국
                                </Link>
                            </div>
                        </div>
                        <div className="review-buttons">
                            <div className="share">
                                <Share />
                                <span>
                                    <Link to="#">공유하기</Link>
                                </span>
                            </div>
                            <div className="save">
                                <Save />
                                <span>
                                    <Link to="#">저장</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <RoomImageStyle>
                    <div className="main_image">
                        <img
                            className="image"
                            src="https://a0.muscache.com/im/pictures/miso/Hosting-53117806/original/4adcb939-6a4f-4fd3-8ae6-cb08fac7739e.jpeg?im_w=1200"
                        />
                    </div>
                    <div className="first_image">
                        <img
                            className="image"
                            src="https://a0.muscache.com/im/pictures/miso/Hosting-53117806/original/dcfc149b-8a39-438c-b71d-26825f629d5d.jpeg?im_w=720"
                        />
                    </div>
                    <div className="second_image">
                        <img
                            className="image"
                            src="https://a0.muscache.com/im/pictures/miso/Hosting-53117806/original/b23a0bd5-d533-4b0e-bc10-ed9bb33166ed.jpeg?im_w=720"
                        />
                    </div>
                    <div className="third_image">
                        <img
                            className="image"
                            src="https://a0.muscache.com/im/pictures/miso/Hosting-53117806/original/22014261-2a62-4424-99e5-376c6986b994.jpeg?im_w=1200"
                        />
                    </div>
                    <div className="forth_image">
                        <img
                            className="image"
                            src="https://a0.muscache.com/im/pictures/miso/Hosting-53117806/original/5817e7f8-ea49-40dd-aa02-d2e7664f384f.jpeg?im_w=720"
                        />
                    </div>
                </RoomImageStyle>
                <RoomDetailStyle>
                    <div className="detail">
                        <div className="room_title">
                            <div>
                                <div>Jina님이 호스팅하는 공동 주택 전체</div>
                                <div style={{ fontSize: "0.8rem" }}>
                                    최대 인원 2명, 침실 1개, 침대 1개, 욕실 1개
                                </div>
                            </div>
                            <div className="host_image">
                                <img
                                    src="https://a0.muscache.com/im/pictures/user/37efee08-51ca-4c1c-a4c6-69d4d643cbea.jpg?im_w=240"
                                    alt="image"
                                />
                            </div>
                        </div>
                        <div className="room_options">
                            <div className="room_option">
                                <svg
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="presentation"
                                    focusable="false"
                                >
                                    <path d="m17.9772237 1.90551573.1439807.13496509 13.2525 13.25240998-1.4142088 1.4142184-.9603513-.9603098.0008557 12.5832006c0 1.0543618-.8158778 1.9181651-1.8507377 1.9945143l-.1492623.0054857h-22c-1.0543618 0-1.91816512-.8158778-1.99451426-1.8507377l-.00548574-.1492623-.00085571-12.5822006-.95878858.9593098-1.41421142-1.414217 13.25247161-13.25243161c1.1247615-1.1246896 2.9202989-1.16967718 4.0986078-.13494486zm-2.5902053 1.46599297-.0942127.08318915-10.29366141 10.29310155.00085571 14.5822006h5.9991443l.0008557-9.9966c0-1.0543764.8158639-1.9181664 1.8507358-1.9945144l.1492642-.0054856h6c1.0543764 0 1.9181664.8158639 1.9945144 1.8507358l.0054856.1492642-.0008557 9.9966h6.0008557l-.0008557-14.5832006-10.2921737-10.29212525c-.3604413-.36046438-.9276436-.38819241-1.3199522-.08316545zm3.6129816 14.9618913h-6l-.0008557 9.9963994h6z"></path>
                                </svg>
                                <div>
                                    <div
                                        style={{
                                            fontSize: "0.8rem",
                                            paddingBottom: "0.3rem",
                                        }}
                                    >
                                        집 전체
                                    </div>
                                    <div style={{ fontSize: "0.7rem" }}>
                                        아파트 전체를 단독으로 사용하시게
                                        됩니다.
                                    </div>
                                </div>
                            </div>
                            <div className="room_option">
                                <svg
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="presentation"
                                    focusable="false"
                                >
                                    <path d="M15.032 1.747c.263-1.004 1.692-.993 1.94.015.876 3.577 2.415 6.454 4.614 8.652 2.198 2.199 5.075 3.738 8.652 4.615 1.016.249 1.016 1.693 0 1.942-3.577.877-6.454 2.416-8.652 4.615-2.199 2.198-3.738 5.075-4.615 8.652-.249 1.016-1.693 1.016-1.942 0-.877-3.577-2.416-6.454-4.615-8.652-2.198-2.199-5.075-3.738-8.652-4.615-1.008-.247-1.019-1.676-.015-1.939 3.535-.923 6.394-2.487 8.597-4.69 2.202-2.202 3.765-5.06 4.688-8.595zm.945 3.518l-.133.325c-.88 2.085-2.025 3.914-3.438 5.484l-.33.357-.318.326c-1.6 1.6-3.5 2.893-5.693 3.88l-.475.206-.325.133.352.14c2.108.859 3.952 1.995 5.527 3.407l.358.33.326.319c1.603 1.602 2.887 3.515 3.854 5.732l.203.48.115.291.115-.292c.86-2.108 1.996-3.952 3.408-5.527l.33-.358.319-.326c1.602-1.603 3.515-2.887 5.732-3.854l.48-.203.292-.115-.293-.115c-2.421-.988-4.494-2.34-6.211-4.057-1.603-1.602-2.887-3.515-3.854-5.732l-.203-.48-.138-.351zm11.04-3.891c.13-.502.845-.497.969.007.176.718.48 1.287.913 1.72.433.433 1.002.737 1.72.913.508.125.508.847 0 .972-.718.176-1.287.48-1.72.913-.433.433-.737 1.002-.913 1.72-.125.508-.847.508-.972 0-.176-.718-.48-1.287-.913-1.72-.433-.433-1.002-.737-1.72-.913-.504-.124-.51-.839-.007-.97.71-.185 1.277-.496 1.712-.93.434-.435.745-1.002.93-1.712z"></path>
                                </svg>
                                <div>
                                    <div
                                        style={{
                                            fontSize: "0.8rem",
                                            paddingBottom: "0.3rem",
                                        }}
                                    >
                                        청결 강화
                                    </div>
                                    <div style={{ fontSize: "0.7rem" }}>
                                        에어비앤비의 강화된 5단계 청소 절차를
                                        준수하겠다고 동의한 호스트입니다.{" "}
                                        <button>더 보기</button>
                                    </div>
                                </div>
                            </div>
                            <div className="room_option">
                                <svg
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="presentation"
                                    focusable="false"
                                >
                                    <path d="m24.3334 1.66675c1.0543745 0 1.9181663.81587127 1.9945143 1.85073677l.0054857.14926323-.00065 24.666 3.00065.00075v2h-26.66665v-2l3-.00075v-24.666c0-1.05436681.81587301-1.91816558 1.850737-1.99451429l.149263-.00548571zm-4.00065 2h-12.666l-.00075 24.66625 12.66675-.00025zm4.00065 0h-2.00065v24.666l2.00025.00025zm-7.0001 11.00002c.7363778 0 1.33333.5969522 1.33333 1.33333s-.5969522 1.33333-1.33333 1.33333-1.33333-.5969522-1.33333-1.33333.5969522-1.33333 1.33333-1.33333z"></path>
                                </svg>
                                <div>
                                    <div
                                        style={{
                                            fontSize: "0.8rem",
                                            paddingBottom: "0.3rem",
                                        }}
                                    >
                                        셀프 체크인
                                    </div>
                                    <div style={{ fontSize: "0.7rem" }}>
                                        열쇠 보관함을 이용해 체크인하세요.
                                    </div>
                                </div>
                            </div>
                            <div className="room_option">
                                <svg
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="presentation"
                                    focusable="false"
                                >
                                    <path d="M16 0c6.627 0 12 5.373 12 12 0 6.337-3.814 12.751-11.346 19.257L16 31.82l-1.076-.932C7.671 24.509 4 18.218 4 12 4 5.423 9.397 0 16 0zm0 2C10.504 2 6 6.525 6 12c0 5.44 3.249 11.118 9.831 17.02l.169.149.576-.518c6.178-5.65 9.293-11.092 9.42-16.318L26 12c0-5.523-4.477-10-10-10zm0 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path>
                                </svg>
                                <div>
                                    <div
                                        style={{
                                            fontSize: "0.8rem",
                                            paddingBottom: "0.3rem",
                                        }}
                                    >
                                        훌륭한 숙소 위치
                                    </div>
                                    <div style={{ fontSize: "0.7rem" }}>
                                        최근 숙박한 게스트 중 100%가 위치에 별점
                                        5점을 준 숙소입니다.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="room_description"
                            style={{ lineHeight: "3rem", fontSize: "0.8rem" }}
                        >
                            <p>
                                "GRAND OPEN"
                                <br />
                                여유로운 휴식을 즐겨보세요.
                                <br />
                                <button>더 보기</button>
                            </p>
                        </div>
                        <div className="room_location">
                            <h3>숙박 장소</h3>
                        </div>
                        <div>
                            <h3>숙박 편의시설</h3>
                            <div className="room_conditions">
                                <div className="room_condition">
                                    <svg
                                        viewBox="0 0 32 32"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        role="presentation"
                                        focusable="false"
                                    >
                                        <path d="M28 2a2 2 0 0 1 1.995 1.85L30 4v24a2 2 0 0 1-1.85 1.995L28 30H4a2 2 0 0 1-1.995-1.85L2 28V4a2 2 0 0 1 1.85-1.995L4 2zM15 13H9v8H4v7h24v-7h-3v4H15zm-3 10a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM28 4H4v15h3v-6a2 2 0 0 1 1.85-1.995L9 11h6a2 2 0 0 1 1.995 1.85L17 13v10h6v-2a2 2 0 0 1 1.85-1.995L25 19h3zM12 19a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm10-8a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                                    </svg>
                                    <span>도시 스카이라인 전망</span>
                                </div>
                                <div className="room_condition">
                                    <svg
                                        viewBox="0 0 32 32"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        role="presentation"
                                        focusable="false"
                                    >
                                        <path d="M16 1a5 5 0 0 1 5 5 5 5 0 0 1 0 10 5.002 5.002 0 0 1-4 4.9v4.287C18.652 23.224 21.153 22 23.95 22a8.94 8.94 0 0 1 3.737.814l.313.15.002 2.328A6.963 6.963 0 0 0 23.95 24c-3.542 0-6.453 2.489-6.93 5.869l-.02.15-.006.098a1 1 0 0 1-.876.876L16 31a1 1 0 0 1-.974-.77l-.02-.124C14.635 26.623 11.615 24 7.972 24a6.963 6.963 0 0 0-3.97 1.234l.002-2.314c1.218-.6 2.57-.92 3.968-.92 2.818 0 5.358 1.24 7.028 3.224V20.9a5.002 5.002 0 0 1-3.995-4.683L11 16l-.217-.005a5 5 0 0 1 0-9.99L11 6l.005-.217A5 5 0 0 1 16 1zm2.864 14.1c-.811.567-1.799.9-2.864.9s-2.053-.333-2.864-.9l-.062.232a3 3 0 1 0 5.851.001zM11 8a3 3 0 1 0 .667 5.926l.234-.062A4.977 4.977 0 0 1 11 11c0-1.065.333-2.053.9-2.864l-.232-.062A3.013 3.013 0 0 0 11 8zm10 0c-.228 0-.45.025-.667.074l-.234.062C20.667 8.947 21 9.935 21 11a4.977 4.977 0 0 1-.9 2.864l.232.062A3 3 0 1 0 21 8zm-5 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-5a3 3 0 0 0-2.926 3.667l.062.234C13.947 6.333 14.935 6 16 6s2.053.333 2.864.9l.062-.232A3 3 0 0 0 16 3z"></path>
                                    </svg>
                                    <span>정원 전망</span>
                                </div>
                                <div className="room_condition">
                                    <svg
                                        viewBox="0 0 32 32"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        role="presentation"
                                        focusable="false"
                                    >
                                        <path d="M28 2a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2H4v15.499l.187-.007c.371-.033.72-.161 1.005-.372l.137-.111A3.975 3.975 0 0 1 8 18c.988 0 1.945.352 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.492A3.974 3.974 0 0 1 16 18c.988 0 1.945.351 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.491A3.975 3.975 0 0 1 23.999 18c.989 0 1.946.351 2.672 1.009.35.316.827.49 1.33.491l-.001 2-.228-.006a3.96 3.96 0 0 1-2.443-1.003A1.978 1.978 0 0 0 24 20c-.502 0-.978.175-1.328.491a3.977 3.977 0 0 1-2.67 1.009 3.977 3.977 0 0 1-2.672-1.009A1.978 1.978 0 0 0 16 20c-.503 0-.98.175-1.329.491a3.978 3.978 0 0 1-2.67 1.009 3.978 3.978 0 0 1-2.672-1.008A1.978 1.978 0 0 0 8 20c-.503 0-.98.175-1.33.491A3.976 3.976 0 0 1 4 21.5v2.999l.187-.007c.371-.033.72-.161 1.005-.372l.137-.111A3.975 3.975 0 0 1 8 23c.988 0 1.945.352 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.492A3.974 3.974 0 0 1 16 23c.988 0 1.945.351 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.491A3.975 3.975 0 0 1 23.999 23c.989 0 1.946.351 2.672 1.009.35.316.827.49 1.33.491l-.001 2-.228-.006a3.96 3.96 0 0 1-2.443-1.003A1.978 1.978 0 0 0 24 25c-.502 0-.978.175-1.328.491a3.977 3.977 0 0 1-2.67 1.009 3.977 3.977 0 0 1-2.672-1.009A1.978 1.978 0 0 0 16 25c-.503 0-.98.175-1.329.491a3.978 3.978 0 0 1-2.67 1.009 3.978 3.978 0 0 1-2.672-1.008A1.978 1.978 0 0 0 8 25c-.503 0-.98.175-1.33.491A3.976 3.976 0 0 1 4 26.5V28h24zm-6 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                                    </svg>
                                    <span>호수나 강과 인접</span>
                                </div>
                                <div className="room_condition">
                                    <svg
                                        viewBox="0 0 32 32"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        role="presentation"
                                        focusable="false"
                                    >
                                        <path d="m15.9999 20.33323c2.0250459 0 3.66667 1.6416241 3.66667 3.66667s-1.6416241 3.66667-3.66667 3.66667-3.66667-1.6416241-3.66667-3.66667 1.6416241-3.66667 3.66667-3.66667zm0 2c-.9204764 0-1.66667.7461936-1.66667 1.66667s.7461936 1.66667 1.66667 1.66667 1.66667-.7461936 1.66667-1.66667-.7461936-1.66667-1.66667-1.66667zm.0001-7.33323c3.5168171 0 6.5625093 2.0171251 8.0432368 4.9575354l-1.5143264 1.5127043c-1.0142061-2.615688-3.5549814-4.4702397-6.5289104-4.4702397s-5.5147043 1.8545517-6.52891042 4.4702397l-1.51382132-1.5137072c1.48091492-2.939866 4.52631444-4.9565325 8.04273174-4.9565325zm.0001-5.3332c4.9804693 0 9.3676401 2.540213 11.9365919 6.3957185l-1.4470949 1.4473863c-2.1746764-3.5072732-6.0593053-5.8431048-10.489497-5.8431048s-8.31482064 2.3358316-10.48949703 5.8431048l-1.44709488-1.4473863c2.56895177-3.8555055 6.95612261-6.3957185 11.93659191-6.3957185zm-.0002-5.3336c6.4510616 0 12.1766693 3.10603731 15.7629187 7.9042075l-1.4304978 1.4309874c-3.2086497-4.44342277-8.4328305-7.3351949-14.3324209-7.3351949-5.8991465 0-11.12298511 2.89133703-14.33169668 7.334192l-1.43047422-1.4309849c3.58629751-4.79760153 9.31155768-7.9032071 15.7621709-7.9032071z"></path>
                                    </svg>
                                    <span>무선 인터넷</span>
                                </div>
                            </div>
                            <div style={{ padding: "2rem 0" }}>
                                <button
                                    style={{
                                        padding: "0.5rem 1rem",
                                        borderStyle: "solid",
                                        borderWidth: "thick",
                                        borderRadius: "10%",
                                        borderColor: "black",
                                    }}
                                >
                                    편의시설 55개 모두 보기
                                </button>
                            </div>
                        </div>
                        <div className="room_checkin">
                            <h3>체크인 날짜를 선택해주세요.</h3>
                            <p>
                                여행 날짜를 입력하여 정확한 요금을 확인하세요.
                            </p>
                        </div>
                    </div>
                    <div className="book">book</div>
                </RoomDetailStyle>
                <ReviewStyle>
                    <h3>5.0 후기 9개</h3>
                    <div className="review_ratings">
                        <div className="review_rating">
                            <h5>청결도</h5>
                            <p>4.9</p>
                        </div>
                        <div className="review_rating">
                            <h5>정확성</h5>
                            <p>5.0</p>
                        </div>
                        <div className="review_rating">
                            <h5>의사소통</h5>
                            <p>4.9</p>
                        </div>
                        <div className="review_rating">
                            <h5>위치</h5>
                            <p>5.0</p>
                        </div>
                        <div className="review_rating">
                            <h5>체크인</h5>
                            <p>5.0</p>
                        </div>
                        <div className="review_rating">
                            <h5>가격 대비 만족도</h5>
                            <p>4.9</p>
                        </div>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateRows: "1fr 2fr",
                                gridGap: ".2rem",
                            }}
                        >
                            <div className="reviewer">
                                <div style={{ height: "3rem" }}>
                                    <img
                                        src="https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240"
                                        alt="reviewer_image"
                                        style={{
                                            borderRadius: "50%",
                                            maxHeight: "100%",
                                            maxWidth: "100%",
                                        }}
                                    />
                                </div>
                                <div>
                                    <h5
                                        style={{
                                            margin: "0",
                                            padding: "0 .5rem .1rem",
                                        }}
                                    >
                                        아무개
                                    </h5>
                                    <span
                                        style={{
                                            margin: "0",
                                            padding: "0 .5rem",
                                            fontSize: ".7rem",
                                        }}
                                    >
                                        2022년 1월
                                    </span>
                                </div>
                            </div>
                            <div
                                style={{
                                    padding: "1rem 2rem 0 0",
                                    fontSize: "0.8rem",
                                }}
                            >
                                <span>
                                    덕분에 잘 쉬다가 힐링하고 값니다. 뷰가 너무
                                    좋고^^ 가격대비 훌륭했습니다. 보일러가
                                    따뜻해서 더웠어요 ㅎㅎ
                                </span>
                            </div>
                        </div>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateRows: "1fr 2fr",
                                gridGap: ".2rem",
                            }}
                        >
                            <div className="reviewer">
                                <div style={{ height: "3rem" }}>
                                    <img
                                        src="https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240"
                                        alt="reviewer_image"
                                        style={{
                                            borderRadius: "50%",
                                            maxHeight: "100%",
                                            maxWidth: "100%",
                                        }}
                                    />
                                </div>
                                <div>
                                    <h5
                                        style={{
                                            margin: "0",
                                            padding: "0 .5rem .1rem",
                                        }}
                                    >
                                        디버그
                                    </h5>
                                    <span
                                        style={{
                                            margin: "0",
                                            padding: "0 .5rem",
                                            fontSize: ".7rem",
                                        }}
                                    >
                                        2022년 1월
                                    </span>
                                </div>
                            </div>
                            <div
                                style={{
                                    padding: "1rem 2rem 0 0",
                                    fontSize: "0.8rem",
                                }}
                            >
                                <span>
                                    바퀴벌레가 나왔어요. 다행히도 제가 디버그를
                                    잘하는 사람이라 잡았네요.
                                </span>
                            </div>
                        </div>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateRows: "1fr 2fr",
                                gridGap: ".2rem",
                            }}
                        >
                            <div className="reviewer">
                                <div style={{ height: "3rem" }}>
                                    <img
                                        src="https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240"
                                        alt="reviewer_image"
                                        style={{
                                            borderRadius: "50%",
                                            maxHeight: "100%",
                                            maxWidth: "100%",
                                        }}
                                    />
                                </div>
                                <div>
                                    <h5
                                        style={{
                                            margin: "0",
                                            padding: "0 .5rem .1rem",
                                        }}
                                    >
                                        코카콜라보단 펩시를 선호
                                    </h5>
                                    <span
                                        style={{
                                            margin: "0",
                                            padding: "0 .5rem",
                                            fontSize: ".7rem",
                                        }}
                                    >
                                        2022년 1월
                                    </span>
                                </div>
                            </div>
                            <div
                                style={{
                                    padding: "1rem 2rem 0 0",
                                    fontSize: "0.8rem",
                                }}
                            >
                                <span>
                                    냉장고에 먹다 남은 콜라가 있네요. 더운 날 참
                                    도움이 많이 되었습니다. ㅎㅎ
                                </span>
                            </div>
                        </div>
                    </div>
                </ReviewStyle>
            </RoomPageStyle>
        </>
    );
};

const RoomPageStyle = styled.div`
    .main {
        .title-div {
            padding-left: 80px;
            padding-right: 80px;
            margin-top: 20px;
            margin-bottom: 10px;

            .title {
                max-width: 1080px;
                margin: 0 auto;
                font-size: 1.7rem;
                font-weight: 500;
            }
        }

        .info {
            padding-left: 80px;
            padding-right: 80px;
            margin-top: 10px;
            max-width: 1240px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            color: #666666;

            .review-container {
                display: flex;

                .separator {
                    margin-left: 8px;
                    margin-right: 8px;
                }

                .review {
                    display: flex;

                    .ic-review {
                        color: var(--primary-color);
                        margin-right: 5px;
                    }
                }

                .number {
                    a {
                        color: #000000;
                    }
                }

                .superhost {
                    .ic-superhost {
                        color: var(--primary-color);
                        margin-right: 5px;
                    }
                }

                .address {
                    a {
                        color: #666666;
                        font-size: 15px;
                        font-weight: 600;
                    }
                }
            }

            .review-buttons {
                display: flex;

                .share {
                    display: flex;
                    margin-right: 10px;

                    span {
                        margin-left: 10px;
                        font-size: 14px;

                        a {
                            color: #000000;
                        }
                    }
                }

                .save {
                    display: flex;

                    span {
                        margin-left: 10px;
                        font-size: 14px;

                        a {
                            color: #000000;
                        }
                    }
                }
            }
        }
    }
`;

const RoomImageStyle = styled.div`
    display: grid;
    grid-gap: 8px;
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
        "main_image main_image first_image third_image"
        "main_image main_image second_image forth_image";

    max-width: 1080px;
    margin: 1rem auto 2rem;

    .main_image {
        grid-area: main_image;
        height: 28rem;
    }

    .first_image {
        grid-area: first_image;
    }
    .second_image {
        grid-area: second_image;
    }
    .third_image {
        grid-area: third_image;
    }
    .forth_image {
        grid-area: forth_image;
    }

    .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const RoomDetailStyle = styled.div`
    display: grid;
    grid-gap: 8px;
    grid-template-columns: 2fr 1fr;

    max-width: 1080px;
    margin: 1rem auto 2rem;

    .detail {
        & > div {
            border-bottom-style: solid;
            border-bottom-width: thin;
        }

        .room_title {
            display: flex;
            justify-content: space-between;

            padding: 0 0 1rem;

            max-height: 3rem;

            & > .host_image {
                width: auto;
                height: auto;
                object-fit: cover;

                text-align: center;

                & > img {
                    max-width: 100%;
                    max-height: 100%;
                }
            }
        }

        .room_options {
            & > .room_option {
                display: grid;
                grid-template-columns: 1fr 21fr;

                grid-gap: 0.5rem;

                padding: 2rem 0.1rem 0;

                & > svg {
                    display: block;
                    height: 24px;
                    width: 24px;
                }
            }

            padding: 0 0 2rem;
        }

        .room_description {
            padding: 2rem 0;
        }

        .room_conditions {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 1rem;

            font-size: 0.8rem;

            & > .room_condition {
                display: flex;

                & > svg {
                    display: block;
                    height: 24px;
                    width: 24px;

                    padding: 0 1rem 0 0;
                }
            }
        }
    }

    .book {
        max-height: 15rem;
        background-color: black;
    }
`;

const ReviewStyle = styled.div`
    max-width: 1080px;
    margin: 1rem auto 2rem;

    border-bottom-style: solid;
    border-bottom-width: thin;

    .review_ratings {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 0.5rem;

        & > .review_rating {
            display: flex;
            justify-content: space-between;

            padding: 0 3rem 0 0;
        }
    }

    .reviewer {
        display: flex;
    }
`;

export default RoomPage;
