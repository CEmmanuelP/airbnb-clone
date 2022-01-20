import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/ic-logo-noword.svg";
import Input from "../../components/host/Input";
import { getRoomInfoAction } from "../../store/actions/hosting";

export default function AboutHouse() {
    const [hostHouse, setHostHouse] = useState();
    const [hostRoom, setHostRoom] = useState();
    const [hostRoomType, setHostRoomType] = useState();
    const [hostGuest, setHostGuest] = useState();
    const [hostBed, setHostBed] = useState();
    const [hostBedRoom, setHostBedRoom] = useState();
    const [hostRestRoom, setHostRestRoom] = useState();

    const dispatch = useDispatch();
    const state = useSelector((state) => state.hostingReducer);
    const history = useHistory();

    useEffect(() => {
        console.log(state);
    }, [state]);

    const onClickNextButton = (e) => {
        e.preventDefault();
        dispatch(
            getRoomInfoAction({
                hostHouse,
                hostRoom,
                hostRoomType,
                hostGuest,
                hostBed,
                hostBedRoom,
                hostRestRoom,
            })
        );
        history.push("/hosting/advanced-about-house");
    };

    return (
        <>
            <div className="flex w-full h-screen">
                <div className="w-1/2 h-screen bg-gradient-to-t from-indigo-900 via-purple-900 to-pink-800 place-content-center">
                    <div className="w-full  h-[12%] flex justify-start items-center">
                        <Logo className="ml-12" />
                    </div>
                    <div className="flex flex-col items-left justify-center ml-12 w-full text-white h-[76%]">
                        <div className="text-5xl leading-[3.5rem] font-semibold text-left">
                            호스팅할 숙소 유형을
                            <br /> 알려주세요.
                        </div>
                    </div>
                </div>
                <div className="relative flex flex-col items-center justify-center w-1/2 h-full">
                    <div className="w-full  h-[12%] flex justify-end items-center">
                        <button className="px-4 py-2 mr-6 text-xs font-semibold border border-gray-200 border-solid elevation-2 rounded-2xl">
                            슈퍼 호스트에게 물어보기
                        </button>
                        <button className="px-4 py-2 mr-6 text-xs font-semibold bg-gray-100 rounded-2xl">
                            도움말
                        </button>
                        <button className="px-4 py-2 mr-12 text-xs font-semibold bg-gray-100 rounded-2xl">
                            저장 및 나가기
                        </button>
                    </div>
                    <div className="flex flex-col items-left justify-around w-full px-32 py-12 h-[76%]">
                        <div className="flex items-center justify-center w-full h-12 my-2">
                            <input
                                type="text"
                                placeholder="집의 종류(호텔)"
                                className="w-full h-full pl-4 border border-gray-200 border-solid rounded-md "
                                onChange={(e) => {
                                    setHostHouse(e.target.value);
                                }}
                            />
                        </div>
                        <div className="flex items-center justify-center w-full h-12 my-2">
                            <input
                                type="text"
                                placeholder="방의 종류(스위트룸)"
                                className="w-full h-full pl-4 border border-gray-200 border-solid rounded-md "
                                onChange={(e) => {
                                    setHostRoom(e.target.value);
                                }}
                            />
                        </div>
                        <div className="flex items-center justify-center w-full h-12 my-2">
                            <input
                                type="text"
                                placeholder="방의 타입(3인실)"
                                className="w-full h-full pl-4 border border-gray-200 border-solid rounded-md "
                                onChange={(e) => {
                                    setHostRoomType(e.target.value);
                                }}
                            />
                        </div>
                        <div className="flex items-center justify-center w-full h-12 my-2">
                            <input
                                type="text"
                                placeholder="수용인원 수"
                                className="w-full h-full pl-4 border border-gray-200 border-solid rounded-md "
                                onChange={(e) => {
                                    setHostGuest(e.target.value);
                                }}
                            />
                        </div>
                        <div className="flex items-center justify-center w-full h-12 my-2">
                            <input
                                type="text"
                                placeholder="침대 수"
                                className="w-full h-full pl-4 border border-gray-200 border-solid rounded-md "
                                onChange={(e) => {
                                    setHostBed(e.target.value);
                                }}
                            />
                        </div>
                        <div className="flex items-center justify-center w-full h-12 my-2">
                            <input
                                type="text"
                                placeholder="침실 수"
                                className="w-full h-full pl-4 border border-gray-200 border-solid rounded-md "
                                onChange={(e) => {
                                    setHostBedRoom(e.target.value);
                                }}
                            />
                        </div>
                        <div className="flex items-center justify-center w-full h-12 my-2">
                            <input
                                type="text"
                                placeholder="객실 수"
                                className="w-full h-full pl-4 border border-gray-200 border-solid rounded-md "
                                onChange={(e) => {
                                    setHostRestRoom(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="w-full h-[12%] flex justify-between items-center border-solid border-t border-gray-300">
                        <Link
                            to="#"
                            onClick={() => {
                                history.goBack();
                            }}
                            className="ml-8 font-semibold underline"
                        >
                            뒤로
                        </Link>
                        <Link
                            to="/hosting/about-house"
                            className="px-6 py-3 mr-8 text-white rounded-md bg-primary"
                            onClick={(e) => {
                                onClickNextButton(e);
                            }}
                        >
                            다음
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
