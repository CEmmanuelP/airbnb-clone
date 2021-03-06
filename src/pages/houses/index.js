import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  faGlobe,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../components/common/footer";
import Card from "../../components/houses/Card";
import { ReactComponent as Filter } from "../../assets/ic-houses-filter.svg";
import MiniCard from "../../components/houses/MiniCard";
// import axios from "axios";
import { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import "react-calendar/dist/Calendar.css";
import MarkerLabel from "../../components/houses/MarkerLabel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const houses = [
  {
    postIdx: 1,
    hostName:
      "BelleHouse #1 동대구역, 신세계백화점 인접, 넷플릭스 가능한 숙소^^",
    hostCost: "15,000",
    latitude: 35.87284253367977,
    longitude: 128.62658038467472,
    roomImages: [
      "https://a0.muscache.com/im/pictures/cf983f0d-5af4-4957-bdcf-55aeaf46a6b6.jpg?im_w=1200",
      "https://a0.muscache.com/im/pictures/6bb7aae9-9c19-4ec7-9ccf-cea98932eed0.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/511b7a24-429b-4c99-8385-7d1a58e46be9.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/7ea50bef-b6fd-4b7c-bdd8-aed9ecbd9704.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/b3505377-3aba-4612-b4c4-8cb491f2ee69.jpg?im_w=720",
    ],
    profileImage:
      "https://a0.muscache.com/im/pictures/user/8542e5db-fcc6-4b79-bccc-5e353059479a.jpg?im_w=240",
    rating: 4.81,
    reviewNumber: 270,
    address: "Sincheon 4(sa)-dong, Dong-gu, 대구, 한국",
  },
  {
    postIdx: 2,
    hostName:
      "#1 동대구역, 신세계백화점 CharmingHouse 또오고싶은 깔끔하고 예쁜 숙소",
    hostCost: "47,000",
    latitude: 35.87179,
    longitude: 128.62935,
    roomImages: [
      "https://a0.muscache.com/im/pictures/6a43caa6-0719-4f8f-95ad-7fc98cb4c9e0.jpg?im_w=1200",
      "https://a0.muscache.com/im/pictures/227158d9-f3cf-4e4a-b67f-53b75d2d3223.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/ae16cde4-b6df-4a89-82e9-73a963de6030.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/0b127f0a-c2d8-4168-8881-59be1d98dbce.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/07f8de5a-1157-4607-8f3c-ae250ce311cb.jpg?im_w=720",
    ],
    profileImage:
      "https://a0.muscache.com/im/pictures/user/4e86349c-a6c5-4263-b0d4-efb1a96759a2.jpg?im_w=240",
    rating: 4.73,
    reviewNumber: 121,
    address: "Sincheon 4(sa)-dong, Dong-gu, 대구, 한국",
  },
  {
    postIdx: 3,
    hostName:
      "[시네마 하우스] 수성못 인근 영화와 게임을 안전하고 편안하게 즐길 수 있는 집 #3-3",
    hostCost: "45,000",
    latitude: 35.82531802651628,
    longitude: 128.61982392102334,
    roomImages: [
      "https://a0.muscache.com/im/pictures/6046b7eb-876c-4a66-b36b-3cf5da316004.jpg?im_w=1200",
      "https://a0.muscache.com/im/pictures/ca6cb329-3387-43e3-9f48-144a6b4d5e2d.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/1ad57327-846e-441a-95d3-d2e8b00baa34.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/d5f88f5c-8146-4de7-86f6-7f27871ac198.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/2fde7343-03c8-400d-a3be-082b358e712a.jpg?im_w=720",
    ],
    profileImage:
      "https://a0.muscache.com/im/pictures/user/27fcb7b3-8c27-42e1-985c-8e0075e339c6.jpg?im_w=240",
    rating: 4.71,
    reviewNumber: 35,
    address: "Dusan-dong, Suseong-gu, 대구, 한국",
  },
  {
    postIdx: 4,
    hostName: "(반월당.동성로1분,넷플) 복층 민's 하우스1♥장기숙박 특별가♥",
    hostCost: "53,333",
    latitude: 35.85964,
    longitude: 128.62682,
    roomImages: [
      "https://a0.muscache.com/im/pictures/02d3688a-2aff-4696-96cc-e98c566da70d.jpg?im_w=1200",
      "https://a0.muscache.com/im/pictures/0178e0d8-5d4f-4899-9db8-55d75ac0dc7b.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/82b098ec-a73d-44d8-8732-eacf26214430.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/bc8b9042-1286-47f8-9aa4-c50da8983732.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/6071d41b-fea2-46bf-95bc-5af10bc4e5ce.jpg?im_w=720",
    ],
    profileImage:
      "https://a0.muscache.com/im/pictures/user/88e44068-cbb7-45d2-a13b-990f4e69cce3.jpg?im_w=240",
    rating: 4.88,
    reviewNumber: 25,
    address: "Namsan-dong, Jung-gu, 대구, 한국",
  },
];

const HousesPage = () => {
  // const token = localStorage.getItem("token");
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const [houseList, setHouseList] = useState();
  const filterList = [
    "무선 인터넷",
    "주방",
    "에어컨",
    "세탁기",
    "다리미",
    "업무 전용 공간",
    "무료 주차 공간",
    "건조기",
    "셀프 체크인",
    "수영장",
    "헬스장",
    "아침식사",
  ];

  // const fetchHouseList = async () => {
  //   try {
  //     const response = await axios.get(
  //       `${process.env.REACT_APP_BACK_URL}/home`,
  //       {
  //         headers: {
  //           "X-ACCESS-TOKEN": `${token}`,
  //         },
  //       }
  //     );

  //     console.log(response.data);
  //     if (response.data.code === 1000) {
  //       setHouseList(response.data.result);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchHouseList();
  // }, []);

  useEffect(() => {
    setHouseList(houses);
  }, []);

  return (
    <>
      <HousesStyle>
        <div className="header">
          <div className="inner-header">
            <div className="header-logo-wrapper">
              <Link to="/" className="header-logo">
                <svg width="102" height="32" fill="currentcolor">
                  <path d="M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.5-.99-.76-1.47-.32-.57-.63-1.18-1.14-1.76a5.3 5.3 0 00-8.2 0c-.47.58-.82 1.19-1.14 1.76-.25.52-.5 1.03-.76 1.5l-.1.2c-2.45 4.8-4.84 9.68-7.04 14.48l-.06.06c-.22.52-.48 1.06-.73 1.64-.16.35-.32.73-.48 1.15a6.8 6.8 0 007.2 9.23 8.38 8.38 0 003.18-1.1c1.3-.73 2.55-1.79 3.95-3.32 1.4 1.53 2.68 2.59 3.95 3.33A8.38 8.38 0 0022.75 32a6.79 6.79 0 006.75-5.83 5.94 5.94 0 00-.26-3.5zm-14.36 1.66c-1.72-2.2-2.84-4.22-3.22-5.95a5.2 5.2 0 01-.1-1.96c.07-.51.26-.96.52-1.34.6-.87 1.65-1.41 2.8-1.41a3.3 3.3 0 012.8 1.4c.26.4.45.84.51 1.35.1.58.06 1.25-.1 1.96-.38 1.7-1.5 3.74-3.21 5.95zm12.74 1.48a4.76 4.76 0 01-2.9 3.75c-.76.32-1.6.41-2.42.32-.8-.1-1.6-.36-2.42-.84a15.64 15.64 0 01-3.63-3.1c2.1-2.6 3.37-4.97 3.85-7.08.23-1 .26-1.9.16-2.73a5.53 5.53 0 00-.86-2.2 5.36 5.36 0 00-4.49-2.28c-1.85 0-3.5.86-4.5 2.27a5.18 5.18 0 00-.85 2.21c-.13.84-.1 1.77.16 2.73.48 2.11 1.78 4.51 3.85 7.1a14.33 14.33 0 01-3.63 3.12c-.83.48-1.62.73-2.42.83a4.76 4.76 0 01-5.32-4.07c-.1-.8-.03-1.6.29-2.5.1-.32.25-.64.41-1.02.22-.52.48-1.06.73-1.6l.04-.07c2.16-4.77 4.52-9.64 6.97-14.41l.1-.2c.25-.48.5-.99.76-1.47.26-.51.54-1 .9-1.4a3.32 3.32 0 015.09 0c.35.4.64.89.9 1.4.25.48.5 1 .76 1.47l.1.2c2.44 4.77 4.8 9.64 7 14.41l.03.03c.26.52.48 1.1.73 1.6.16.39.32.7.42 1.03.19.9.29 1.7.19 2.5zM41.54 24.12a5.02 5.02 0 01-3.95-1.83 6.55 6.55 0 01-1.6-4.48 6.96 6.96 0 011.66-4.58 5.3 5.3 0 014.08-1.86 4.3 4.3 0 013.7 1.92l.1-1.57h2.92V23.8h-2.93l-.1-1.76a4.52 4.52 0 01-3.88 2.08zm.76-2.88c.58 0 1.09-.16 1.57-.45.44-.32.8-.74 1.08-1.25.25-.51.38-1.12.38-1.8a3.42 3.42 0 00-1.47-3.04 2.95 2.95 0 00-3.12 0c-.44.32-.8.74-1.08 1.25a4.01 4.01 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.98.45 1.55.45zM53.45 8.46c0 .35-.06.67-.22.93-.16.25-.38.48-.67.64-.29.16-.6.22-.92.22-.32 0-.64-.06-.93-.22a1.84 1.84 0 01-.67-.64 1.82 1.82 0 01-.22-.93c0-.36.07-.68.22-.93.16-.3.39-.48.67-.64.29-.16.6-.23.93-.23a1.84 1.84 0 011.6.86 2 2 0 01.21.94zm-3.4 15.3V11.7h3.18v12.08h-3.19zm11.68-8.9v.04c-.15-.07-.35-.1-.5-.13-.2-.04-.36-.04-.55-.04-.89 0-1.56.26-2 .8-.48.55-.7 1.32-.7 2.31v5.93h-3.19V11.69h2.93l.1 1.83c.32-.64.7-1.12 1.24-1.48a3.1 3.1 0 011.81-.5c.23 0 .45.02.64.06.1.03.16.03.22.06v3.2zm1.28 8.9V6.74h3.18v6.5c.45-.58.96-1.03 1.6-1.38a5.02 5.02 0 016.08 1.31 6.55 6.55 0 011.6 4.49 6.96 6.96 0 01-1.66 4.58 5.3 5.3 0 01-4.08 1.86 4.3 4.3 0 01-3.7-1.92l-.1 1.57-2.92.03zm6.15-2.52c.57 0 1.08-.16 1.56-.45.44-.32.8-.74 1.08-1.25.26-.51.38-1.12.38-1.8 0-.67-.12-1.28-.38-1.79a3.75 3.75 0 00-1.08-1.25 2.95 2.95 0 00-3.12 0c-.45.32-.8.74-1.09 1.25a4.01 4.01 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.98.45 1.56.45zm7.51 2.53V11.69h2.93l.1 1.57a3.96 3.96 0 013.54-1.89 4.1 4.1 0 013.82 2.44c.35.76.54 1.7.54 2.75v7.24h-3.19v-6.82c0-.84-.19-1.5-.57-1.99-.38-.48-.9-.74-1.56-.74-.48 0-.9.1-1.27.32-.35.23-.64.52-.86.93a2.7 2.7 0 00-.32 1.35v6.92h-3.16zm12.52 0V6.73h3.19v6.5a4.67 4.67 0 013.73-1.89 5.02 5.02 0 013.95 1.83 6.57 6.57 0 011.59 4.48 6.95 6.95 0 01-1.66 4.58 5.3 5.3 0 01-4.08 1.86 4.3 4.3 0 01-3.7-1.92l-.09 1.57-2.93.03zm6.18-2.53c.58 0 1.09-.16 1.56-.45.45-.32.8-.74 1.09-1.25.25-.51.38-1.12.38-1.8a3.42 3.42 0 00-1.47-3.04 2.95 2.95 0 00-3.12 0c-.44.32-.8.74-1.08 1.25a3.63 3.63 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.95.45 1.55.45z"></path>
                </svg>
              </Link>
            </div>
            <div className="header-input-wrapper">
              <input className="header-input" />
            </div>
            <div className="header-menu-wrapper">
              <div className="header-menu">
                <div>호스트 되기</div>
                <div>
                  <FontAwesomeIcon icon={faGlobe} />
                </div>
                <div>호스트 되기</div>
              </div>
            </div>
          </div>
          <div className="filter">
            <div className="filter-custom">
              <div>
                <button className="fee button">
                  요금
                  <span className="ic">
                    <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                </button>
              </div>
              <div>
                <button className="housetype button">
                  숙소 유형
                  <span className="ic">
                    <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                </button>
                <div class="delimiter"></div>
              </div>
            </div>
            <div className="filter-select">
              {filterList.map((e) => {
                return (
                  <div>
                    <button className="button">{e}</button>
                  </div>
                );
              })}
            </div>
            <div className="filter-filter">
              <div>
                <button className="button btn-filter">
                  <span className="ic ic-btn-filter">
                    <Filter />
                  </span>
                  필터
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="main">
          <div className="houselist">
            <div className="number">
              지도에 표시된 지역에 위치한 92개의 숙소
            </div>
            <div className="mention">
              예약하기 전에 코로나19 관련 여행 제한 사항을 확인하세요.
              <Link to="#" class="mention-link">
                자세히 알아보기
              </Link>
            </div>
            <div className="cards">
              {houseList
                ? houseList.map((room) => {
                    return <Card key={room.postIdx} room={room} />;
                  })
                : ""}
            </div>

            <div className="pagination">
              <div className="paging">
                <div className="prev">
                  <FontAwesomeIcon icon={faChevronLeft} />
                </div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div className="next">
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
              </div>
              <div className="page-info">총 64개 숙소 중 1~20번째 숙소</div>
              <div className="fee-info">
                추가 수수료가 부과됩니다. 세금도 부과될 수 있습니다.
              </div>
            </div>
            <div className="recommend">
              <div className="recommend-info">
                <div className="info">
                  <div className="title">날짜 조정이 가능한가요?</div>
                  <div className="desc">
                    현재 날짜로부터 +/-1일 이내에 예약할 수 있는 숙소입니다.
                  </div>
                </div>
                <div className="page">
                  <div className="page-info">1 / 7</div>
                  <div className="page-button">
                    <button className="prev">
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button className="next">
                      <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="recommend-house">
                <Slider {...settings}>
                  {houseList?.map((room) => {
                    return <MiniCard key={room.postIdx} room={room} />;
                  })}
                </Slider>
              </div>
              <div className="mt-8 all-house">
                <Link to="#">
                  <span>모두 보기</span>
                  <FontAwesomeIcon icon={faChevronRight} />
                </Link>
              </div>
            </div>
          </div>
          <div className="relative map">
            <div className="sticky top-[9rem] w-full h-[calc(100vh-9rem)] border-solid border border-gray-400">
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: process.env.REACT_APP_MAP_API_KEY,
                }}
                defaultCenter={{
                  lat: 35.86142,
                  lng: 128.63208,
                }}
                defaultZoom={12}
              >
                {houseList?.map((room) => {
                  const { longitude, latitude, hostCost, id } = room;
                  return (
                    <MarkerLabel
                      key={id}
                      lat={latitude}
                      lng={longitude}
                      price={hostCost}
                      room={room}
                    />
                  );
                })}
              </GoogleMapReact>
            </div>
          </div>
        </div>
        <Footer />
      </HousesStyle>
    </>
  );
};

const HousesStyle = styled.div`
  height: auto;
  .header {
    width: 100%;
    height: 9rem;
    background-color: #ffffff;
    position: sticky;
    top: 0;
    .inner-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 5rem;
      .header-logo-wrapper {
        padding-left: 1.5rem;
        color: var(--primary-color);
      }
      .header-input-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 5rem;
        .header-input {
          border: 1px solid #dddddd;
          border-radius: 100px;
          width: 15rem;
          height: 2.2rem;
          text-align: center;
        }
      }
      .header-menu-wrapper {
        padding-right: 1.5rem;
        .header-menu {
          display: flex;
          & * {
            margin-left: 0.5rem;
            margin-right: 0.5rem;
          }
        }
      }
    }
    .filter {
      width: 100%;
      height: 4rem;
      display: flex;
      .delimiter {
        display: inline;
        margin-right: 16px;
        margin-left: 8px;
        border-left: 1px solid rgb(221, 221, 221);
      }
      .button {
        border: 1px solid #dedede;
        background-color: #ffffff;
        padding: 10px 15px 10px 15px;
        border-radius: 100px;
        margin-right: 0.7rem;
        font-size: 0.9rem;
        font-weight: 400;
      }
      .ic {
        padding-left: 10px;
        font-size: 11px;
      }
      .filter-custom,
      .filter-select,
      .filter-filter {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 1.5rem;
      }
      .filter-select {
        padding-left: 0;
      }
      .filter-filter {
        padding-left: 0;
        .btn-filter {
          display: flex;
          .ic-btn-filter {
            padding-left: 0;
          }
        }
      }
    }
  }
  .main {
    display: flex;
    width: 100%;
    .houselist {
      width: 840px;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      margin-bottom: 40px;
      .number {
        padding-top: 1rem;
        padding-bottom: 1rem;
        font-size: 0.9rem;
      }
      .mention {
        border-bottom: 1px solid #dedede;
        padding-top: 1rem;
        padding-bottom: 1rem;
        font-size: 0.9rem;
        .mention-link {
          padding-left: 0.5rem;
          text-decoration: underline;
        }
      }
      .cards {
      }
      .pagination {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 30px;
        padding-bottom: 30px;
        .paging {
          display: flex;
          & > div {
            padding: 8px;
            padding-left: 16px;
            padding-right: 16px;
            border-radius: 100%;
            margin-left: 5px;
            margin-right: 5px;
          }
          & > div:nth-child(1) {
            color: var(--lightGray-color);
          }
          & > div:nth-child(2) {
            background-color: #000000;
            color: #ffffff;
          }
        }
        .page-info {
          color: #222222;
          letter-spacing: 0;
          font-size: 15px;
          margin-top: 15px;
          margin-bottom: 10px;
        }
        .fee-info {
          padding-top: 20px;
          font-size: 13px;
          color: var(--gray-color);
        }
      }
      .recommend {
        .recommend-info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
          .info {
            .title {
              font-size: 21px;
              font-weight: 600;
              margin-bottom: 10px;
            }
            .desc {
              color: var(--gray-color);
            }
          }
          .page {
            display: flex;
            justify-content: center;
            align-items: center;
            .page-info {
              margin-right: 5px;
              color: var(--gray-color);
            }
            .page-button {
              & > button {
                padding: 8px;
                padding-left: 12px;
                padding-right: 12px;
                border: 1px solid var(--lightGray-color);
                border-radius: 100%;
                background-color: #ffffff;
                font-size: 10px;
                font-weight: 200;
                margin-left: 6px;
              }
            }
          }
        }
        .recommend-house {
          width: 100%;
          height: 340px;
          /* display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 10px; */
        }
        .all-house {
          padding-top: 10px;
          padding-bottom: 10px;
          a {
            left: 0;
            font-weight: 600;
            padding: 7px;
            border-radius: 6px;
            cursor: pointer;
            &:hover {
              background-color: #eeeeee;
            }
            span {
              text-decoration: underline;
              margin-right: 10px;
            }
          }
        }
      }
    }
    .map {
      flex-grow: 1;
      z-index: -1;
    }
  }
`;

export default HousesPage;
