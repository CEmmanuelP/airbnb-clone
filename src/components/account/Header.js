import { ReactComponent as Logo } from "../../assets/ic-logo.svg";

const Header = () => {
    return (
        <div className="flex items-center justify-between w-full max-w-screen-xl m-auto text-2xl border border-solid border-black-200 h-18">
            <div>
                <Logo />
            </div>
            <div>2</div>
        </div>
    );
};

export default Header;
