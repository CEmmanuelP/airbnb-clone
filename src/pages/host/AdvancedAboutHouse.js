import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/ic-logo-noword.svg";
import { getAdvancedRoomInfoAction } from "../../store/actions/hosting";

export default function AdvancedAboutHouse() {
    const [hostAlone, setHostAlone] = useState();
    const [hostName, setHostName] = useState();
    const [hostCategory, setHostCategory] = useState();
    const [hostCategory2, setHostCategory2] = useState();
    const [hostExplain, setHostExplain] = useState();
    const [hostCost, setHostCost] = useState();
    const [hostAnimal, setHostAnimal] = useState();

    const dispatch = useDispatch();
    const history = useHistory();
    const state = useSelector((state) => state.HostingReducer);

    useEffect(() => {
        console.log(state);
    }, [state]);

    const onClickNextButton = (e) => {
        e.preventDefault();
        dispatch(
            getAdvancedRoomInfoAction({
                hostAlone,
                hostName,
                hostCategory,
                hostCategory2,
                hostExplain,
                hostCost,
                hostAnimal,
            })
        );
        history.push("/hosting/location");
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
                                placeholder="혼자왔니?(Y | N)"
                                className="w-full h-full pl-4 border border-gray-200 border-solid rounded-md "
                                onChange={(e) => {
                                    setHostAlone(e.target.value);
                                }}
                            />
                        </div>
                        <div className="flex items-center justify-center w-full h-12 my-2">
                            <input
                                type="text"
                                placeholder="집 이름"
                                className="w-full h-full pl-4 border border-gray-200 border-solid rounded-md "
                                onChange={(e) => {
                                    setHostName(e.target.value);
                                }}
                            />
                        </div>
                        <div className="flex items-center justify-center w-full h-12 my-2">
                            <input
                                type="text"
                                placeholder="카테고리(앤틱)"
                                className="w-full h-full pl-4 border border-gray-200 border-solid rounded-md "
                                onChange={(e) => {
                                    setHostCategory(e.target.value);
                                }}
                            />
                        </div>
                        <div className="flex items-center justify-center w-full h-12 my-2">
                            <input
                                type="text"
                                placeholder="카테고리2(도심에 위치)"
                                className="w-full h-full pl-4 border border-gray-200 border-solid rounded-md "
                                onChange={(e) => {
                                    setHostCategory2(e.target.value);
                                }}
                            />
                        </div>
                        <div className="flex items-center justify-center w-full h-12 my-2">
                            <input
                                type="text"
                                placeholder="따뜻하고 낭만적인 한옥"
                                className="w-full h-full pl-4 border border-gray-200 border-solid rounded-md "
                                onChange={(e) => {
                                    setHostExplain(e.target.value);
                                }}
                            />
                        </div>
                        <div className="flex items-center justify-center w-full h-12 my-2">
                            <input
                                type="text"
                                placeholder="1000000"
                                className="w-full h-full pl-4 border border-gray-200 border-solid rounded-md "
                                onChange={(e) => {
                                    setHostCost(e.target.value);
                                }}
                            />
                        </div>
                        <div className="flex items-center justify-center w-full h-12 my-2">
                            <input
                                type="text"
                                placeholder="반려동물 가부(Y | N)"
                                className="w-full h-full pl-4 border border-gray-200 border-solid rounded-md "
                                onChange={(e) => {
                                    setHostAnimal(e.target.value);
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
                            to="/hosting/upload-image"
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
