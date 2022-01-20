import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/ic-logo-noword.svg";
import UploadButton from "../../components/host/UploadButton";

export default function ImageUpload() {
    const [imageUrlArray, setImageUrlArray] = useState([]);
    const token = localStorage.getItem("token");

    const history = useHistory();
    const state = useSelector((state) => state.HostingReducer);

    useEffect(() => {
        console.log(state);
        console.log(state.hostHouse);
    }, [state]);

    useEffect(() => {
        console.log(imageUrlArray);
    }, [imageUrlArray]);

    const onClickCompleteButton = async (e) => {
        try {
            e.preventDefault();

            const response = await axios.post(
                `${process.env.REACT_APP_BACK_URL}/home`,
                {
                    hostHouse: state.hostHouse,
                    hostRoom: state.hostRoom,
                    hostRoomType: state.hostRoomType,
                    hostGuest: state.hostGuest,
                    hostBed: state.hostBed,
                    hostBedRoom: state.hostBedRoom,
                    hostRestRoom: state.hostRestRoom,
                    hostAlone: state.hostAlone,
                    hostName: state.hostName,
                    hostCategory: state.hostCategory,
                    hostCategory2: state.hostCategory2,
                    hostExplain: state.hostExplain,
                    hostCost: state.hostCost,
                    hostAnimal: state.hostAnimal,
                    roomFacilities: state.roomFacilities,
                    roomImages: imageUrlArray,
                    roomLocation: state.roomLocation,
                    roomSecurity: state.roomSecurity,
                },
                {
                    headers: {
                        "X-ACCESS-TOKEN": `${token}`,
                    },
                }
            );

            console.log(response.data);

            if (response.data.code === 1000) {
                history.push("/");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div className="flex w-full h-screen">
                <div className="w-1/2 h-screen bg-gradient-to-t from-indigo-900 via-purple-900 to-pink-800 place-content-center">
                    <div className="w-full  h-[12%] flex justify-start items-center">
                        <Link to="/">
                            <Logo className="ml-12" />
                        </Link>
                    </div>
                    <div className="flex flex-col items-left justify-center ml-12 w-full text-white h-[76%]">
                        <div className="text-5xl leading-[3.5rem] font-semibold text-left">
                            집을 자랑할 멋진 사진이
                            <br /> 필요합니다!
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
                        <UploadButton
                            number={1}
                            setImageUrlArray={setImageUrlArray}
                        />
                        <UploadButton
                            number={2}
                            setImageUrlArray={setImageUrlArray}
                        />
                        <UploadButton
                            number={3}
                            setImageUrlArray={setImageUrlArray}
                        />
                        <UploadButton
                            number={4}
                            setImageUrlArray={setImageUrlArray}
                        />
                        <UploadButton
                            number={5}
                            setImageUrlArray={setImageUrlArray}
                        />
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
                            to="/"
                            className="px-6 py-3 mr-8 text-white rounded-md bg-primary"
                            onClick={(e) => {
                                onClickCompleteButton(e);
                            }}
                        >
                            완료
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
