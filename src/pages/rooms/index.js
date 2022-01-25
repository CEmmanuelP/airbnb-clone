import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import RoomHeader from "../../components/rooms/Header";
import { ReactComponent as Star } from "../../assets/ic-star.svg";
import { ReactComponent as Share } from "../../assets/ic-share.svg";
import { ReactComponent as Save } from "../../assets/ic-save.svg";
import { ReactComponent as House } from "../../assets/ic-house.svg";
import { ReactComponent as Twinkle } from "../../assets/ic-twinkle.svg";
import { ReactComponent as Marker } from "../../assets/ic-marker.svg";
import { ReactComponent as Key } from "../../assets/ic-key.svg";
import { ReactComponent as Kitchen } from "../../assets/ic-kitchen.svg";
import { ReactComponent as Wifi } from "../../assets/ic-wifi.svg";
import { ReactComponent as Tv } from "../../assets/ic-tv.svg";
import { ReactComponent as Elevator } from "../../assets/ic-elevator.svg";
import { ReactComponent as WashingMachine } from "../../assets/ic-washing-machine.svg";
import { ReactComponent as Airconditional } from "../../assets/ic-airconditional.svg";
import { ReactComponent as Carrier } from "../../assets/ic-carrier.svg";
import { ReactComponent as Balcony } from "../../assets/ic-balcony.svg";
import { ReactComponent as HairDryer } from "../../assets/ic-hairdryer.svg";
import { ReactComponent as ChevronLeft } from "../../assets/ic-chevronleft.svg";
import { ReactComponent as Refrigerator } from "../../assets/ic-refrigerator.svg";
import { ReactComponent as Keyboard } from "../../assets/ic-keyboard.svg";
import Calendar from "react-calendar";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../../components/account/Footer";
import Review from "../../components/rooms/Review";
import GoogleMapReact from "google-map-react";
import CustomMarker from "../../components/rooms/CustomMarker";

const RoomPage = () => {
  const reviewList = [
    {
      id: 1,
      profile:
        "https://a0.muscache.com/im/pictures/user/d3affa48-fa01-4d5c-b761-3690bb784671.jpg?im_w=240",
      name: "Ilsub",
      date: "2022년 1월",
      review:
        "깨끗하고 따뜻해서 좋았어요 :) 복층이지만 좁은 느낌이 안 들어요!! 자는 곳도 아늑하고 허리가 아픈 메트리스가 아니어서 푹 쉬었다 갈 수 있어요! 다음에 또 이용하고 싶을 정도예요:)",
    },
    {
      id: 2,
      profile:
        "https://a0.muscache.com/im/pictures/user/29bf7b63-a164-4b34-98ef-9a289b33e52f.jpg?im_w=240",
      name: "윤미",
      date: "2021년 12월",
      review: "전부 다 맘에 들었어용 잘 쉬었다가 갑니다~ ~",
    },
    {
      id: 3,
      profile:
        "https://a0.muscache.com/im/pictures/user/92c16420-6991-4ae3-9d95-5cfcbdbcca99.jpg?im_w=240",
      name: "설아",
      date: "2021년 12월",
      review: "멋진 숙소 덕분에 친구들과 좋은 시간 보냈습니다 ♥",
    },
    {
      id: 4,
      profile:
        "https://a0.muscache.com/im/pictures/user/91aa1590-5ae9-4fa0-b8cf-e7629ced7296.jpg?im_w=240",
      name: "민애",
      date: "2021년 11월",
      review: "역이랑 너무가까웠고 따뜻하고 편하게 쉬다가 가요!!",
    },
    {
      id: 5,
      profile:
        "https://a0.muscache.com/im/pictures/user/b7df3c7a-eae1-45cc-9cd8-139469ce80b8.jpg?im_w=240",
      name: "정은",
      date: "2021년 11월",
      review: "주차가 안된다는 단점이 있지만 ㅜ 깔끔하고 편하고 좋았어요 ! 👍",
    },
    {
      id: 6,
      profile:
        "https://a0.muscache.com/im/pictures/user/4ff54046-7f02-408a-898d-670e0c75a38b.jpg?im_w=240",
      name: "민지",
      date: "2021년 11월",
      review:
        "깔끔하고 좋았어요~! 넷플도 잘 되고! 공간이 넉넉해서 세명이서 지내도 넓다는 생각이 들더라구요~",
    },
  ];

  const location = useLocation();
  const room = location.state.room;

  useEffect(() => {
    console.log(room);
  }, [room]);

  return (
    <>
      <RoomPageStyle>
        <RoomHeader />
        <div className="main">
          <div className="title-div">
            <h1 className="title">{room.hostName}</h1>
          </div>
          <div className="info">
            <div className="review-container">
              <div className="review">
                <Star className="ic-review" />
                <span>4.81</span>
                <span className="separator">·</span>
              </div>
              <div className="number">
                <Link to="#" className="underline">
                  후기 270개
                </Link>
                <span className="separator">·</span>
              </div>
              <div className="superhost">
                <FontAwesomeIcon icon={faMedal} className="ic-superhost" />
                <span>슈퍼호스트</span>
                <span className="separator">·</span>
              </div>
              <div className="address">
                <Link to="#">Sincheon 4(sa)-dong, Dong-gu, 대구, 한국</Link>
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
        <div className="grid w-full max-w-[1080px] max-h-[60vh] grid-cols-4 grid-rows-2 m-auto border-b border-gray-300 border-solid h-1/2 gap-2 mt-4">
          <div className="col-span-2 row-span-2 rounded-tl-lg rounded-bl-lg">
            <img
              className="w-full h-full rounded-tl-lg rounded-bl-lg"
              src={room.roomImages[0]}
              alt={room.postIdx}
            />
          </div>
          <div className="">
            <img
              className="w-full h-full"
              src={room.roomImages[1]}
              alt={room.postIdx}
            />
          </div>
          <div className="w-full h-full">
            <img
              className="w-full h-full"
              src={room.roomImages[2]}
              alt={room.postIdx}
            />
          </div>
          <div className="">
            <img
              className="w-full h-full rounded-tr-lg"
              src={room.roomImages[3]}
              alt={room.postIdx}
            />
          </div>
          <div className="">
            <img
              className="w-full h-full rounded-br-lg"
              src={room.roomImages[4]}
              alt={room.postIdx}
            />
          </div>
        </div>
        <div className="flex w-full max-w-[1080px] m-auto  my-12 ">
          <div className="w-[70%]">
            <div className="w-[90%]">
              <div className="flex items-center justify-between my-3">
                <div>
                  <div className="text-xl font-medium">
                    Joo님이 호스팅하는 공동 주택 전체
                  </div>
                  <div className="my-1 font-light text-gray-700">
                    최대 인원 5명 · 침실 1개 · 침대 1개 · 욕실 1개
                  </div>
                </div>
                <div>
                  <img
                    src="https://a0.muscache.com/im/pictures/user/8542e5db-fcc6-4b79-bccc-5e353059479a.jpg?im_w=240"
                    className="w-12 h-12 rounded-full"
                    alt="profile"
                  />
                </div>
              </div>
              <div className="py-4 border-t border-gray-200 border-solid">
                <div className="flex my-4 text-sm">
                  <House className="mr-4" />
                  <div>
                    <div className="text-lg font-medium">집 전체</div>
                    <div className="text-gray-400">
                      아파트 전체를 단독으로 사용하시게 됩니다.
                    </div>
                  </div>
                </div>
                <div className="flex my-4 text-sm">
                  <Twinkle className="mr-4" />
                  <div>
                    <div className="text-lg font-medium">청결 강화</div>
                    <div className="text-gray-400">
                      에어비앤비의 강화된 5단계 청소 절차를 준수하겠다고 동의한
                      호스트입니다.{" "}
                      <Link to="#" className="ml-1 text-black underline">
                        더 보기
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex my-4 text-sm">
                  <Marker className="mr-4" />
                  <div>
                    <div className="text-lg font-medium">훌륭한 숙소 위치</div>
                    <div className="text-gray-400">
                      최근 숙박한 게스트 중 100%가 위치에 별점 5점을 준
                      숙소입니다.
                    </div>
                  </div>
                </div>
                <div className="flex my-4 text-sm">
                  <Key className="mr-4" />
                  <div>
                    <div className="text-lg font-medium">
                      순조로운 체크인 과정
                    </div>
                    <div className="text-gray-400">
                      최근 숙박한 게스트 중 100%가 체크인 과정에 별점 5점을 준
                      숙소입니다.
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full py-8 border-t border-gray-200 border-solid">
                <div className="max-h-[144px] max-w-[90%] overflow-hidden text-ellipsis leading-6">
                  동대구역에서 도보로 10분 거리에 있습니다. <br /> 넷플릭스
                  시청가능, 최고의 교통, 동성로, 중앙로, 현대백화점,
                  신세계백화점, 동대구역, 편의점, 식기, 와인잔 준비되어
                  있습니다. <br /> 사람이 하는 일이라 "완벽한 서비스를
                  기대하시는 분께는 호텔"을 추천드립니다. <br />※ 파티는
                  적합하지 않습니다.
                  <br /> 숙소 55인치 대형티비로 넷플릭스를 시청할 수 있습니다.
                  <br /> 각종 조미료및 조리기구가 있어 맛있는 추억을 만드실수도
                  있습니다.^^
                  <br /> 게스트 이용 가능 공간/시설 주차는 되지 않으니 참고 부탁
                  드립니다
                </div>
                <div className="mt-4 font-medium">
                  <span className="underline">더 보기</span>
                  <ChevronLeft className="inline" />
                </div>
              </div>
              {/* 숙소 편의시설 */}
              <div className="grid grid-cols-2 gap-4 py-10 border-t border-gray-200 border-solid">
                <div className="flex">
                  <Kitchen className="mr-3" />
                  <span>주방</span>
                </div>
                <div className="flex">
                  <Wifi className="mr-3" />
                  <span>무선 인터넷</span>
                </div>
                <div className="flex">
                  <Tv className="mr-3" />
                  <span>TV</span>
                </div>
                <div className="flex">
                  <Elevator className="mr-3" />
                  <span>엘리베이터</span>
                </div>
                <div className="flex">
                  <WashingMachine className="mr-3" />
                  <span>세탁기</span>
                </div>
                <div className="flex">
                  <Airconditional className="mr-3" />
                  <span>에어컨</span>
                </div>
                <div className="flex">
                  <Balcony className="mr-3" />
                  <span>전용 파티오 또는 발코니</span>
                </div>
                <div className="flex">
                  <Carrier className="mr-3" />
                  <span>여행 가방 보관 가능</span>
                </div>
                <div className="flex">
                  <HairDryer className="mr-3" />
                  <span>헤어드라이어</span>
                </div>
                <div className="flex">
                  <Refrigerator className="mr-3" />
                  <span>냉장고</span>
                </div>
                <div>
                  <button className="px-5 py-3 mt-4 font-semibold border border-black border-solid rounded-xl">
                    편의시설 46개 모두 보기
                  </button>
                </div>
              </div>
              {/* 달력 */}
              <div className="pt-12 border-t border-gray-200 border-solid">
                <div className="my-4">
                  <div className="text-xl font-medium">신천4동에서 3박</div>
                  <div className="text-sm text-gray-400">
                    2022년 1월 25일 - 2022년 1월 28일
                  </div>
                </div>
                <div className="flex my-6">
                  <Calendar className="mr-4" />
                  <Calendar />
                </div>
                <div className="flex justify-between">
                  <Keyboard />
                  <div className="font-semibold underline">날짜 지우기</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[30%] h-auto relative">
            <div className="sticky w-full p-4 mt-8 mb-20 text-xl font-medium border border-gray-200 border-solid top-12">
              <div>
                <span className="text-gray-400 line-through">₩80,257</span>
                <span className="ml-1">₩{room.hostCost}</span>
                <span className="text-sm font-light"> / 박</span>
              </div>
              <div className="flex items-center my-3 text-sm">
                <Star className="inline text-primary" />
                <span>4.81</span>
                <span className="mx-1"> · </span>
                <span className="underline">후기 32개</span>
              </div>
            </div>
            <div className="sticky w-full h-16 mt-8 border border-solid top-44 border-gray">
              card2
            </div>
          </div>
        </div>
        {/* Reviews - 후기 */}
        <div className="w-full max-w-[1080px] m-auto border-solid border-gray-200 border-t border-b my-8 py-12">
          <div className="flex items-center mb-4 text-xl font-semibold">
            <Star className="mr-2 text-primary" />
            <span>{room.rating}</span>
            <span className="mx-2">·</span>
            <span>후기 {room.reviewNumber}개</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex justify-between items-center w-[90%]">
              <div>청결도</div>
              <div className="flex items-center w-1/3">
                <div className="relative h-[4px] w-full mr-2 bg-gray-200 rounded-sm">
                  <span className="absolute top-0 bottom-0 left-0 w-full bg-gray-800 rounded-sm"></span>
                </div>
                <div className="text-sm font-semibold">5.0</div>
              </div>
            </div>
            <div className="flex justify-between items-center w-[90%] ">
              <div>정확성</div>
              <div className="flex items-center w-1/3">
                <div className="relative h-[4px] w-full mr-2 bg-gray-200 rounded-sm">
                  <span className="absolute top-0 bottom-0 left-0 w-full bg-gray-800 rounded-sm"></span>
                </div>
                <div className="text-sm font-semibold">5.0</div>
              </div>
            </div>
            <div className="flex justify-between items-center w-[90%]">
              <div>의사소통</div>
              <div className="flex items-center w-1/3">
                <div className="relative h-[4px] w-full mr-2 bg-gray-200 rounded-sm">
                  <span className="absolute top-0 bottom-0 left-0 w-full bg-gray-800 rounded-sm"></span>
                </div>
                <div className="text-sm font-semibold">5.0</div>
              </div>
            </div>
            <div className="flex justify-between items-center w-[90%]">
              <div>위치</div>
              <div className="flex items-center w-1/3">
                <div className="relative h-[4px] w-full mr-2 bg-gray-200 rounded-sm">
                  <span className="absolute top-0 left-0 bottom-0 bg-gray-800 w-[98%] rounded-sm"></span>
                </div>
                <div className="text-sm font-semibold">4.9</div>
              </div>
            </div>
            <div className="flex justify-between items-center w-[90%]">
              <div>체크인</div>
              <div className="flex items-center w-1/3">
                <div className="relative h-[4px] w-full mr-2 bg-gray-200 rounded-sm">
                  <span className="absolute top-0 bottom-0 left-0 w-full bg-gray-800 rounded-sm"></span>
                </div>
                <div className="text-sm font-semibold">5.0</div>
              </div>
            </div>
            <div className="flex justify-between items-center w-[90%]">
              <div>가격 대비 만족도</div>
              <div className="flex items-center w-1/3">
                <div className="relative h-[4px] w-full mr-2 bg-gray-200 rounded-sm">
                  <span className="absolute top-0 left-0 bottom-0 bg-gray-800 w-[94%] rounded-sm"></span>
                </div>
                <div className="text-sm font-semibold">4.7</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-8 gap-y-12">
            {reviewList.map((review) => {
              return <Review key={review.id} review={review} />;
            })}
            <div>
              <button className="px-5 py-3 mt-4 font-semibold border border-black border-solid rounded-xl">
                후기 20개 모두 보기
              </button>
            </div>
          </div>
        </div>
        {/* hosting Location - 호스팅 지역 */}
        <div className="my-12 w-full max-w-[1080px] m-auto">
          <div className="mb-6 text-xl font-medium">호스팅 지역</div>
          <div className="h-[480px]">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: process.env.REACT_APP_MAP_API_KEY,
              }}
              defaultCenter={{
                lat: room.latitude,
                lng: room.longitude,
              }}
              defaultZoom={15}
            >
              <CustomMarker
                key={room.id}
                lat={room.latitude}
                lng={room.longitude}
              />
            </GoogleMapReact>
          </div>
          <div className="my-6">
            <div className="mb-4 font-semibold">신천4동, 대구, 한국</div>
            <div>
              동대구 KTX역, 도시철도 1호선 동대구 버스환승센터, 신세계 백화점과
              인접합니다.
            </div>
            <div className="mt-4 font-medium">
              <span className="underline">더 보기</span>
              <ChevronLeft className="inline" />
            </div>
          </div>
        </div>
        {/* host - 호스트 정보 */}
        <div className="my-12 w-full max-w-[1080px] m-auto">
          <div className="w-[85%]">
            <div className="flex">
              <div className="rounded-full">
                <img src="" className="w-12 h-12 mr-4 rounded-full" alt="img" />
              </div>
              <div className="mb-4">
                <div className="font-semibold">호스트: 유정님</div>
                <div className="text-sm text-gray-400">
                  안녕하세요. 사람과의 소통과 관계를 중요시하는 대구에 거주하고
                  있는 호스트입니다. 스처가는 인연일지라도 좋은 기억과 추억을
                  안겨주고 싶네요^^
                </div>
              </div>
            </div>
            <div className="리뷰 내용"></div>
          </div>
        </div>
        <div className="알아두어야 할 사항"></div>
        <Footer />
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

export default RoomPage;
