import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/ic-logo-noword.svg";

const HostPage = () => {
    return (
        <>
            <div className="flex w-full h-screen">
                <div
                    className="w-1/2 h-screen bg-cover bg-no-repeat bg-[url('https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907__340.jpg')]"
                    style={{
                        backgroundImage:
                            "url('https://cdn.pixabay.com/photo/2016/03/24/09/10/men-1276384_960_720.jpg')",
                    }}
                >
                    <div className="w-full  h-[15%] flex justify-start items-center">
                        <Link to="/">
                            <Logo className="ml-12" />
                        </Link>
                    </div>
                </div>
                <div className="relative flex flex-col items-center justify-center w-1/2 h-full bg-black">
                    <div className="w-full  h-[15%] flex justify-end items-center">
                        <button className="px-4 py-2 mr-12 text-xs font-semibold text-white bg-gray-800 rounded-2xl">
                            나가기
                        </button>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full px-48 text-white h-[70%]">
                        <div className="text-5xl font-semibold text-center">
                            간단한 10단계로
                            <br /> 호스팅 시작하기
                        </div>
                        <div className="mt-8 text-center">
                            에어비앤비 호스트가 되어보세요.
                            <br /> 에어비앤비에서 모든 과정을 도와드립니다.
                        </div>
                    </div>
                    <div className="w-full h-[15%] flex justify-end items-center border-solid border-t border-gray-700">
                        <Link
                            to="/hosting/about-house"
                            className="px-6 py-3 mr-8 text-white rounded-md bg-primary"
                        >
                            시작하기
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HostPage;
