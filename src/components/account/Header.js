import { ReactComponent as Logo } from "../../assets/ic-logo.svg";

const Header = () => {
    return (
        <div className="flex items-center justify-between w-full h-20 max-w-screen-xl m-auto text-2xl border border-red-200 border-solid">
            <div>
                <Logo />
            </div>
            <div>2</div>
        </div>
    );
};

export default Header;
