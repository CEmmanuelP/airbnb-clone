import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Header from "../../components/account/Header";
import Footer from "../../components/account/Footer";

const AccountSettings = () => {
    return (
        <>
            <Header />
            <div className="border-solid border border-orange-200 w-full max-w-screen-lg px-[23px] m-auto">
                <div className="border-solid border border-aqua-200 mt-[64px] mb-[56px] ml-[16px]">
                    <div className="text-3xl font-bold ">계정</div>
                    <div className="mt-8 text-lg">
                        <span className="font-semibold">Yujin Kim,</span>{" "}
                        <span>chrisp3@daum.net</span>{" "}
                        <Link to="" className="font-bold underline">
                            {" "}
                            · 프로필로 이동
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4 border border-solid border-aqua-200 ml-[16px]">
                    <div className="w-8 h-4 border border-solid border-black-200">
                        1
                    </div>
                    <div className="w-4 h-4 border border-solid border-black-200">
                        2
                    </div>
                    <div className="w-4 h-4 border border-solid border-black-200">
                        3
                    </div>
                    <div className="w-4 h-4 border border-solid border-black-200">
                        4
                    </div>
                    <div className="w-4 h-4 border border-solid border-black-200">
                        5
                    </div>
                    <div className="w-4 h-4 border border-solid border-black-200">
                        6
                    </div>

                    <div className="w-4 h-4 border border-solid border-black-200">
                        1
                    </div>
                    <div className="w-4 h-4 border border-solid border-black-200">
                        1
                    </div>
                    <div className="w-4 h-4 border border-solid border-black-200">
                        1
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AccountSettings;
