import { ReactComponent as Logo } from "../../assets/ic-logo.svg";
import { ReactComponent as Language } from "../../assets/ic-language.svg";
import { ReactComponent as Hamburger } from "../../assets/ic-hamburger.svg";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="sticky top-0 bg-white drop-shadow">
            <div className="flex items-center justify-between w-full h-20 max-w-screen-xl m-auto text-2xl">
                <div className="text-primary">
                    <Link to="/">
                        <Logo />
                    </Link>
                </div>
                <div className="flex items-center justify-center text-sm">
                    <div>호스트 되기</div>
                    <Language className="ml-4" />
                    <div className="flex items-center justify-center p-2 ml-4 border border-gray-200 border-solid rounded-3xl">
                        <Hamburger className="mr-1" />
                        <div className="w-6 h-6 ml-1 rounded-full">
                            <img
                                src="https://a0.muscache.com/defaults/user_pic-50x50.png?v=3"
                                alt="user"
                                className="rounded-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
