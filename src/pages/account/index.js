import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Header from "../../components/account/Header";

const AccountSettings = () => {
    return (
        <>
            <Header />
            <div className="border-solid border border-orange-200 w-full max-w-screen-lg px-[23px] m-auto">
                <div>
                    <div className="border-solid border border-aqua-200 mt-[64px] mb-[56px] ml-[16px]">
                        계정
                    </div>
                    <div>
                        <span>Yujin Kim,</span> <span>chrisp3@daum.net</span>{" "}
                        <Link> · 프로필로 이동</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccountSettings;
