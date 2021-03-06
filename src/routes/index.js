import { BrowserRouter, Route, Switch } from "react-router-dom";
import IndexPage from "../pages";
import AccountSettings from "../pages/account";
import PersonalInfo from "../pages/account/PersonalInfo";
import HomePage from "../pages/home";
import HousesPage from "../pages/houses";
import LoginPage from "../pages/login";
import NoMatchPage from "../pages/noMatch";
import RoomPage from "../pages/rooms";
import HostPage from "../pages/host";
import AboutHouse from "../pages/host/AboutHouse";
import AdvancedAboutHouse from "../pages/host/AdvancedAboutHouse";
import Location from "../pages/host/Location";
import ImageUpload from "../pages/host/ImageUpload";

const RootRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                {/* 기본 루트페이지 */}
                <Route path="/" component={IndexPage} exact key="index" />

                {/* 추가되는 페이지 */}
                <Route path="/home" component={HomePage} exact key="home" />
                <Route path="/login" component={LoginPage} exact key="login" />
                <Route path="/houses" component={HousesPage} />
                <Route path="/rooms/:id" component={RoomPage} />
                <Route
                    exact
                    path="/account-settings"
                    component={AccountSettings}
                />
                <Route
                    path="/account-settings/personal-info"
                    component={PersonalInfo}
                />
                <Route exact path="/hosting" component={HostPage} />
                <Route path="/hosting/about-house" component={AboutHouse} />
                <Route
                    path="/hosting/advanced-about-house"
                    component={AdvancedAboutHouse}
                />
                <Route path="/hosting/location" component={Location} />
                <Route path="/hosting/image-upload" component={ImageUpload} />

                {/* 경로가 유효하지 않을 때 */}
                <Route path="*" component={NoMatchPage} key="noMatch" />
            </Switch>
        </BrowserRouter>
    );
};

export default RootRoute;
