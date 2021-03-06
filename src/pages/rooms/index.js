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
import { ReactComponent as CheckIn } from "../../assets/ic-checkin.svg";
import { ReactComponent as Keypad } from "../../assets/ic-keypad.svg";
import { ReactComponent as NoKid } from "../../assets/ic-nokid.svg";
import { ReactComponent as NoSmoking } from "../../assets/ic-nosmoking.svg";
import { ReactComponent as NoPet } from "../../assets/ic-nopet.svg";
import { ReactComponent as NoParty } from "../../assets/ic-noparty.svg";
import { ReactComponent as CarbonAlarm } from "../../assets/ic-carbonalarm.svg";
import { ReactComponent as FireAlarm } from "../../assets/ic-firealarm.svg";
import { ReactComponent as AuthComplete } from "../../assets/ic-authcomplete.svg";
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
      date: "2022??? 1???",
      review:
        "???????????? ???????????? ???????????? :) ??????????????? ?????? ????????? ??? ?????????!! ?????? ?????? ???????????? ????????? ?????? ??????????????? ???????????? ??? ????????? ??? ??? ?????????! ????????? ??? ???????????? ?????? ????????????:)",
    },
    {
      id: 2,
      profile:
        "https://a0.muscache.com/im/pictures/user/29bf7b63-a164-4b34-98ef-9a289b33e52f.jpg?im_w=240",
      name: "??????",
      date: "2021??? 12???",
      review: "?????? ??? ?????? ???????????? ??? ???????????? ?????????~ ~",
    },
    {
      id: 3,
      profile:
        "https://a0.muscache.com/im/pictures/user/92c16420-6991-4ae3-9d95-5cfcbdbcca99.jpg?im_w=240",
      name: "??????",
      date: "2021??? 12???",
      review: "?????? ?????? ????????? ???????????? ?????? ?????? ??????????????? ???",
    },
    {
      id: 4,
      profile:
        "https://a0.muscache.com/im/pictures/user/91aa1590-5ae9-4fa0-b8cf-e7629ced7296.jpg?im_w=240",
      name: "??????",
      date: "2021??? 11???",
      review: "????????? ?????????????????? ???????????? ????????? ????????? ??????!!",
    },
    {
      id: 5,
      profile:
        "https://a0.muscache.com/im/pictures/user/b7df3c7a-eae1-45cc-9cd8-139469ce80b8.jpg?im_w=240",
      name: "??????",
      date: "2021??? 11???",
      review: "????????? ???????????? ????????? ????????? ??? ???????????? ????????? ???????????? ! ????",
    },
    {
      id: 6,
      profile:
        "https://a0.muscache.com/im/pictures/user/4ff54046-7f02-408a-898d-670e0c75a38b.jpg?im_w=240",
      name: "??????",
      date: "2021??? 11???",
      review:
        "???????????? ????????????~! ????????? ??? ??????! ????????? ???????????? ???????????? ????????? ????????? ????????? ???????????????~",
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
                <span className="separator">??</span>
              </div>
              <div className="number">
                <Link to="#" className="underline">
                  ?????? 270???
                </Link>
                <span className="separator">??</span>
              </div>
              <div className="superhost">
                <FontAwesomeIcon icon={faMedal} className="ic-superhost" />
                <span>???????????????</span>
                <span className="separator">??</span>
              </div>
              <div className="address">
                <Link to="#">Sincheon 4(sa)-dong, Dong-gu, ??????, ??????</Link>
              </div>
            </div>
            <div className="review-buttons">
              <div className="share">
                <Share />
                <span>
                  <Link to="#">????????????</Link>
                </span>
              </div>
              <div className="save">
                <Save />
                <span>
                  <Link to="#">??????</Link>
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
                    Joo?????? ??????????????? ?????? ?????? ??????
                  </div>
                  <div className="my-1 font-light text-gray-700">
                    ?????? ?????? 5??? ?? ?????? 1??? ?? ?????? 1??? ?? ?????? 1???
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
                    <div className="text-lg font-medium">??? ??????</div>
                    <div className="text-gray-400">
                      ????????? ????????? ???????????? ??????????????? ?????????.
                    </div>
                  </div>
                </div>
                <div className="flex my-4 text-sm">
                  <Twinkle className="mr-4" />
                  <div>
                    <div className="text-lg font-medium">?????? ??????</div>
                    <div className="text-gray-400">
                      ?????????????????? ????????? 5?????? ?????? ????????? ?????????????????? ?????????
                      ??????????????????.{" "}
                      <Link to="#" className="ml-1 text-black underline">
                        ??? ??????
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex my-4 text-sm">
                  <Marker className="mr-4" />
                  <div>
                    <div className="text-lg font-medium">????????? ?????? ??????</div>
                    <div className="text-gray-400">
                      ?????? ????????? ????????? ??? 100%??? ????????? ?????? 5?????? ???
                      ???????????????.
                    </div>
                  </div>
                </div>
                <div className="flex my-4 text-sm">
                  <Key className="mr-4" />
                  <div>
                    <div className="text-lg font-medium">
                      ???????????? ????????? ??????
                    </div>
                    <div className="text-gray-400">
                      ?????? ????????? ????????? ??? 100%??? ????????? ????????? ?????? 5?????? ???
                      ???????????????.
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full py-8 border-t border-gray-200 border-solid">
                <div className="max-h-[144px] max-w-[90%] overflow-hidden text-ellipsis leading-6">
                  ?????????????????? ????????? 10??? ????????? ????????????. <br /> ????????????
                  ????????????, ????????? ??????, ?????????, ?????????, ???????????????,
                  ??????????????????, ????????????, ?????????, ??????, ????????? ????????????
                  ????????????. <br /> ????????? ?????? ????????? "????????? ????????????
                  ??????????????? ????????? ??????"??? ??????????????????. <br />??? ?????????
                  ???????????? ????????????.
                  <br /> ?????? 55?????? ??????????????? ??????????????? ????????? ??? ????????????.
                  <br /> ?????? ???????????? ??????????????? ?????? ????????? ????????? ???????????????
                  ????????????.^^
                  <br /> ????????? ?????? ?????? ??????/?????? ????????? ?????? ????????? ?????? ??????
                  ????????????
                </div>
                <div className="mt-4 font-medium">
                  <span className="underline">??? ??????</span>
                  <ChevronLeft className="inline" />
                </div>
              </div>
              {/* ?????? ???????????? */}
              <div className="grid grid-cols-2 gap-4 py-10 border-t border-gray-200 border-solid">
                <div className="flex">
                  <Kitchen className="mr-3" />
                  <span>??????</span>
                </div>
                <div className="flex">
                  <Wifi className="mr-3" />
                  <span>?????? ?????????</span>
                </div>
                <div className="flex">
                  <Tv className="mr-3" />
                  <span>TV</span>
                </div>
                <div className="flex">
                  <Elevator className="mr-3" />
                  <span>???????????????</span>
                </div>
                <div className="flex">
                  <WashingMachine className="mr-3" />
                  <span>?????????</span>
                </div>
                <div className="flex">
                  <Airconditional className="mr-3" />
                  <span>?????????</span>
                </div>
                <div className="flex">
                  <Balcony className="mr-3" />
                  <span>?????? ????????? ?????? ?????????</span>
                </div>
                <div className="flex">
                  <Carrier className="mr-3" />
                  <span>?????? ?????? ?????? ??????</span>
                </div>
                <div className="flex">
                  <HairDryer className="mr-3" />
                  <span>??????????????????</span>
                </div>
                <div className="flex">
                  <Refrigerator className="mr-3" />
                  <span>?????????</span>
                </div>
                <div>
                  <button className="px-5 py-3 mt-4 font-semibold border border-black border-solid rounded-xl">
                    ???????????? 46??? ?????? ??????
                  </button>
                </div>
              </div>
              {/* ?????? */}
              <div className="pt-12 border-t border-gray-200 border-solid">
                <div className="my-4">
                  <div className="text-xl font-medium">??????4????????? 3???</div>
                  <div className="text-sm text-gray-400">
                    2022??? 1??? 25??? - 2022??? 1??? 28???
                  </div>
                </div>
                <div className="flex my-6">
                  <Calendar className="mr-4" />
                  <Calendar />
                </div>
                <div className="flex justify-between">
                  <Keyboard />
                  <div className="font-semibold underline">?????? ?????????</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[30%] h-auto relative">
            <div className="sticky w-full p-4 mt-8 text-xl font-medium border border-gray-200 border-solid rounded-md top-12 elevation-2">
              <div>
                <span className="text-gray-400 line-through">???80,257</span>
                <span className="ml-1">???{room.hostCost}</span>
                <span className="text-sm font-light"> / ???</span>
              </div>
              <div className="flex items-center my-3 text-sm">
                <Star className="inline text-primary" />
                <span>{room.rating}</span>
                <span className="mx-1"> ?? </span>
                <span className="underline">?????? {room.reviewNumber}???</span>
              </div>
              <div>
                <div className="flex mt-2 text-xs border border-gray-400 border-solid rounded-tl-md rounded-tr-md">
                  <div className="w-1/2 p-3 border-r border-gray-400 border-solid">
                    <div>?????????</div>
                    <div className="font-light text-gray-600">2022. 1. 26.</div>
                  </div>
                  <div className="w-1/2 p-3">
                    <div>????????????</div>
                    <div className="font-light text-gray-600">2022. 1. 28.</div>
                  </div>
                </div>
                <div className="text-xs border-b border-l border-r border-gray-400 border-solid rounded-bl-md rounded-br-md">
                  <div className="flex justify-between p-3">
                    <div>
                      <div>??????</div>
                      <div className="font-light">????????? 1???</div>
                    </div>
                  </div>
                </div>
                <div>
                  <button className="w-full px-5 py-3 mt-4 text-sm font-semibold text-white rounded-md bg-primary">
                    ????????????
                  </button>
                </div>
                <div className="mt-4 text-sm font-normal text-center text-gray-600">
                  ?????? ?????? ????????? ????????? ???????????? ????????????.
                </div>
              </div>
              <div className="mt-6 text-base font-light text-gray-600 pay">
                <div className="flex justify-between mb-3">
                  <div className="underline">???{room.hostCost} x 2???</div>
                  <div>???112,500</div>
                </div>
                <div className="flex justify-between mb-3">
                  <div className="underline">?????????</div>
                  <div>???18,000</div>
                </div>
                <div className="flex justify-between mb-3">
                  <div className="underline">????????? ?????????</div>
                  <div>???18,424</div>
                </div>
                <div className="flex justify-between mb-3">
                  <div className="underline">???????????? ?????????</div>
                  <div>???1,842</div>
                </div>
              </div>
              <div className="pt-4 text-base border-t border-gray-200 border-solid total">
                <div className="flex justify-between">
                  <div>??? ??????</div>
                  <div>???150,766</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Reviews - ?????? */}
        <div className="w-full max-w-[1080px] m-auto border-solid border-gray-200 border-t border-b my-8 py-12">
          <div className="flex items-center mb-4 text-xl font-semibold">
            <Star className="mr-2 text-primary" />
            <span>{room.rating}</span>
            <span className="mx-2">??</span>
            <span>?????? {room.reviewNumber}???</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex justify-between items-center w-[90%]">
              <div>?????????</div>
              <div className="flex items-center w-1/3">
                <div className="relative h-[4px] w-full mr-2 bg-gray-200 rounded-sm">
                  <span className="absolute top-0 bottom-0 left-0 w-full bg-gray-800 rounded-sm"></span>
                </div>
                <div className="text-sm font-semibold">5.0</div>
              </div>
            </div>
            <div className="flex justify-between items-center w-[90%] ">
              <div>?????????</div>
              <div className="flex items-center w-1/3">
                <div className="relative h-[4px] w-full mr-2 bg-gray-200 rounded-sm">
                  <span className="absolute top-0 bottom-0 left-0 w-full bg-gray-800 rounded-sm"></span>
                </div>
                <div className="text-sm font-semibold">5.0</div>
              </div>
            </div>
            <div className="flex justify-between items-center w-[90%]">
              <div>????????????</div>
              <div className="flex items-center w-1/3">
                <div className="relative h-[4px] w-full mr-2 bg-gray-200 rounded-sm">
                  <span className="absolute top-0 bottom-0 left-0 w-full bg-gray-800 rounded-sm"></span>
                </div>
                <div className="text-sm font-semibold">5.0</div>
              </div>
            </div>
            <div className="flex justify-between items-center w-[90%]">
              <div>??????</div>
              <div className="flex items-center w-1/3">
                <div className="relative h-[4px] w-full mr-2 bg-gray-200 rounded-sm">
                  <span className="absolute top-0 left-0 bottom-0 bg-gray-800 w-[98%] rounded-sm"></span>
                </div>
                <div className="text-sm font-semibold">4.9</div>
              </div>
            </div>
            <div className="flex justify-between items-center w-[90%]">
              <div>?????????</div>
              <div className="flex items-center w-1/3">
                <div className="relative h-[4px] w-full mr-2 bg-gray-200 rounded-sm">
                  <span className="absolute top-0 bottom-0 left-0 w-full bg-gray-800 rounded-sm"></span>
                </div>
                <div className="text-sm font-semibold">5.0</div>
              </div>
            </div>
            <div className="flex justify-between items-center w-[90%]">
              <div>?????? ?????? ?????????</div>
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
                ?????? 20??? ?????? ??????
              </button>
            </div>
          </div>
        </div>
        {/* hosting Location - ????????? ?????? */}
        <div className="my-12 w-full max-w-[1080px] m-auto">
          <div className="mb-6 text-xl font-medium">????????? ??????</div>
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
            <div className="mb-4 font-semibold">??????4???, ??????, ??????</div>
            <div>
              ????????? KTX???, ???????????? 1?????? ????????? ??????????????????, ????????? ????????????
              ???????????????.
            </div>
            <div className="mt-4 font-medium">
              <span className="underline">??? ??????</span>
              <ChevronLeft className="inline" />
            </div>
          </div>
        </div>
        {/* host - ????????? ?????? */}
        <div className="my-12 w-full max-w-[1080px] m-auto border-t border-solid border-gray-200 pt-12">
          <div className="w-[80%]">
            <div className="flex items-center">
              <div className="rounded-full">
                <img
                  src="https://a0.muscache.com/im/pictures/user/870a253a-eafb-406e-b482-b883248eadb4.jpg?im_w=240"
                  className="w-20 h-20 mr-4 rounded-full"
                  alt="img"
                />
              </div>
              <div className="mb-4">
                <div className="text-xl font-semibold">?????????: ?????????</div>
                <div className="text-gray-400">?????? ?????????: 2018??? 11???</div>
              </div>
            </div>
            <div className="flex mt-4 text-gray-600">
              <div className="w-2/3 ">
                <div className="flex">
                  <div className="flex items-center mr-4">
                    <Star className="mr-2 text-primary" />
                    ?????? {room.reviewNumber}???
                  </div>
                  <div className="flex items-center mr-4">
                    <AuthComplete className="mr-2 text-primary" />
                    ?????? ?????? ??????
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faMedal}
                      className="mr-2 ic-superhost text-primary"
                    />
                    ???????????????
                  </div>
                </div>
                <div className="w-[75%] ">
                  <div className="mt-4">
                    ???????????????. ???????????? ????????? ????????? ??????????????? ?????????
                    ???????????? ?????? ??????????????????. ???????????? ?????????????????? ??????
                    ????????? ????????? ???????????? ?????????^^
                  </div>
                  <div className="mt-6">
                    <div className="font-semibold">?????? ??? ??????????????? ??????</div>
                    <div className="mt-2">
                      ????????? ?????????????????? ????????? ?????? ???????????? ?????????
                      ???????????????^^
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="font-semibold">
                      ???????????? ????????????????????????.
                    </div>
                    <div className="mt-2">
                      ?????????????????? ????????? ????????? ?????? ????????? ???????????? ????????????
                      ???????????? ????????? ????????? ??? ????????? ????????? ?????????
                      ??????????????????.
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/3">
                <div>?????????: 96%</div>
                <div className="mt-4">?????? ??????: 1?????? ??????</div>
                <div>
                  <button className="px-5 py-3 mt-6 font-semibold border border-black border-solid rounded-xl">
                    ?????? {room.reviewNumber}??? ?????? ??????
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ??????????????? ??? ?????? */}
        <div className="my-12 w-full max-w-[1080px] m-auto border-t border-solid border-gray-200 pt-12">
          <div className="text-2xl font-medium">??????????????? ??? ??????</div>
          <div className="grid grid-cols-3 gap-3 mt-4">
            <div>
              <div className="mb-2 font-semibold">?????? ????????????</div>
              <div>
                <div className="flex items-center mb-3">
                  <CheckIn className="mr-3" />
                  <span>?????????: ?????? 4:00 ??????</span>
                </div>
                <div className="flex items-center mb-3">
                  <Keypad className="mr-3" />
                  <span>?????????(???)??? ?????? ?????????</span>
                </div>
                <div className="flex items-center mb-3">
                  <NoKid className="mr-3" />
                  <span>???????????? ???????????? ???????????? ??????</span>
                </div>
                <div className="flex items-center mb-3">
                  <NoSmoking className="mr-3" />
                  <span>?????? ??????</span>
                </div>
                <div className="flex items-center mb-3">
                  <NoPet className="mr-3" />
                  <span>???????????? ?????? ??????</span>
                </div>
                <div className="flex items-center mb-3">
                  <NoParty className="mr-3" />
                  <span>????????? ????????? ??????</span>
                </div>
              </div>
              <div className="mt-4 font-medium">
                <span className="underline">??? ??????</span>
                <ChevronLeft className="inline ml-1" />
              </div>
            </div>
            <div>
              <div className="mb-2 font-semibold">????????? ??????</div>
              <div>
                <div className="flex items-center mb-3">
                  <CarbonAlarm className="mr-3" />
                  <span>??????????????? ?????????</span>
                </div>
                <div className="flex items-center mb-3">
                  <FireAlarm className="mr-3" />
                  <span>???????????????</span>
                </div>
              </div>
              <div className="mt-4 font-medium">
                <span className="underline">??? ??????</span>
                <ChevronLeft className="inline ml-1" />
              </div>
            </div>
            <div>
              <div className="mb-2 font-semibold">?????? ????????????</div>
              <div>
                ??? ????????? ?????? ?????? ?????? ????????? ??????????????? ?????? ?????????
                ???????????????.
              </div>
              <div className="mt-4 font-medium">
                <span className="underline">?????? ??????</span>
                <ChevronLeft className="inline ml-1" />
              </div>
            </div>
          </div>
        </div>
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
