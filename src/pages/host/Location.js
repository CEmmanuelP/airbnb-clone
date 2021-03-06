import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/ic-logo-noword.svg";
import GoogleMap from "../../components/host/GoogleMap";
import Postcode from "../../components/host/Postcode";
import {
    getLocationDataAction,
    getRoomInfoAction,
} from "../../store/actions/hosting";

export default function Location() {
    const [address, setAddress] = useState();

    const dispatch = useDispatch();
    const history = useHistory();
    const state = useSelector((state) => state.HostingReducer);

    useEffect(() => {
        console.log(address);
    }, [address]);

    useEffect(() => {
        console.log(state);
    }, [state]);

    const onClickNextButton = (e) => {
        e.preventDefault();
        dispatch(
            getLocationDataAction({
                longitude: 32,
                latitude: 123,
                addressName: address.address,
                buildingName: address.buildingName,
                mainBuildingNo: address.bcode,
                regionDepthName1: address.sido,
                regionDepthName2: address.sigungu,
                regionDepthName3: address.bname2,
                roadName: address.roadAddress,
                subBuildingNo: address.buildingCode,
                undergrounYn: "Y",
                zoneNo: address.zonecode,
            })
        );
        history.push("/hosting/image-upload");
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
                            ?????? ????????? ????????????????
                        </div>
                    </div>
                </div>
                <div className="relative flex flex-col items-center justify-center w-1/2 h-full">
                    <div className="w-full  h-[12%] flex justify-end items-center">
                        <button className="px-4 py-2 mr-6 text-xs font-semibold border border-gray-200 border-solid elevation-2 rounded-2xl">
                            ?????? ??????????????? ????????????
                        </button>
                        <button className="px-4 py-2 mr-6 text-xs font-semibold bg-gray-100 rounded-2xl">
                            ?????????
                        </button>
                        <button className="px-4 py-2 mr-12 text-xs font-semibold bg-gray-100 rounded-2xl">
                            ?????? ??? ?????????
                        </button>
                    </div>
                    <div className="flex flex-col items-left justify-around w-full px-32 py-12 h-[76%]">
                        <Postcode address={address} setAddress={setAddress} />
                    </div>
                    <div className="w-full h-[12%] flex justify-between items-center border-solid border-t border-gray-300">
                        <Link
                            to="#"
                            onClick={() => {
                                history.goBack();
                            }}
                            className="ml-8 font-semibold underline"
                        >
                            ??????
                        </Link>
                        <Link
                            to="/hosting/upload-image"
                            className="px-6 py-3 mr-8 text-white rounded-md bg-primary"
                            onClick={(e) => {
                                onClickNextButton(e);
                            }}
                        >
                            ??????
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
