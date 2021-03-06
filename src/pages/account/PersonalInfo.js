import Footer from "../../components/account/Footer";
import Header from "../../components/account/Header";
import { ReactComponent as ChevronLeft } from "../../assets/ic-chevronleft.svg";
import { ReactComponent as Lock } from "../../assets/ic-lock.svg";
import { ReactComponent as IDCard } from "../../assets/ic-idcard.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const PersonalInfo = () => {
    const token = localStorage.getItem("token");
    const [users, setUsers] = useState();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [nameEdit, setNameEdit] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        console.log(firstName);
    }, [firstName]);

    const fetchUsers = async () => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_BACK_URL}/users`,
                {
                    headers: {
                        "X-ACCESS-TOKEN": `${token}`,
                    },
                }
            );

            console.log(response.data);

            if (response.data.code === 1000) {
                setUsers(response.data.result);
                setFirstName(response.data.result.userName);
                setLastName(response.data.result.userLastname);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const onClickNameEdit = (e) => {
        e.preventDefault();
        setNameEdit(!nameEdit);
    };

    const onSubmitNameEdit = async (e) => {
        try {
            e.preventDefault();

            const response = await axios.patch(
                `${process.env.REACT_APP_BACK_URL}/users/name`,
                {
                    userName: firstName,
                    userLastname: lastName,
                },
                {
                    headers: {
                        "X-ACCESS-TOKEN": `${token}`,
                    },
                }
            );

            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Header />
            <div className="w-full h-auto max-w-screen-lg px-[23px] m-auto">
                <div className="my-[40px]">
                    <div className="text-sm">
                        ??????
                        <ChevronLeft className="inline mx-4" />
                        ????????????
                    </div>
                    <div className="mt-3 text-3xl font-bold">????????????</div>
                </div>
                <div className="flex w-full my-8">
                    <div className="float-left w-2/3">
                        <div className="py-6 border-b border-gray-200 border-solid w-[90%]">
                            <div className="flex justify-between">
                                <div className="mb-2 font-medium">??????</div>
                                <div className="text-[#008489] font-medium">
                                    <Link
                                        to="#"
                                        onClick={(e) => {
                                            onClickNameEdit(e);
                                        }}
                                    >
                                        ??????
                                    </Link>
                                </div>
                            </div>
                            {nameEdit ? (
                                <form
                                    className="font-light text-gray-600"
                                    onSubmit={(e) => {
                                        onSubmitNameEdit(e);
                                    }}
                                >
                                    <div className="mt-2 mb-6">
                                        ??????????????? ?????? ??? ?????? ????????? ????????????
                                        ?????? ????????? ????????????.
                                    </div>
                                    <div className="mb-3">
                                        <div className="float-left w-1/2 pr-2">
                                            <div className="mb-2">??????</div>
                                            <div className="border border-gray-200 border-solid rounded-md">
                                                <input
                                                    className="w-full p-3 rounded-md"
                                                    value={
                                                        lastName ? lastName : ""
                                                    }
                                                    onChange={(e) => {
                                                        setLastName(
                                                            e.target.value
                                                        );
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="float-right w-1/2 px-2">
                                            <div className="mb-2">???</div>
                                            <div className="border border-gray-200 border-solid rounded-md">
                                                <input
                                                    className="w-full p-3 rounded-md"
                                                    value={
                                                        users ? firstName : ""
                                                    }
                                                    onChange={(e) => {
                                                        setFirstName(
                                                            e.target.value
                                                        );
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-[#008489] px-6 py-3 text-white rounded-md mt-3"
                                    >
                                        ??????
                                    </button>
                                </form>
                            ) : (
                                <div className="font-light text-gray-600">
                                    {users && users.userLastname}{" "}
                                    {users && users.userName}
                                </div>
                            )}
                        </div>
                        <div className="py-6 border-b border-gray-200 border-solid w-[90%]">
                            <div className="flex justify-between">
                                <div className="mb-2 font-medium">??????</div>
                                <div className="text-[#008489] font-medium">
                                    <Link to="#">??????</Link>
                                </div>
                            </div>
                            <div className="font-light text-gray-600">??????</div>
                        </div>
                        <div className="py-6 border-b border-gray-200 border-solid w-[90%]">
                            <div className="flex justify-between">
                                <div className="mb-2 font-medium">????????????</div>
                                <div className="text-[#008489] font-medium">
                                    <Link to="#">??????</Link>
                                </div>
                            </div>
                            <div className="font-light text-gray-600">
                                1992??? 5??? 12???
                            </div>
                        </div>
                        <div className="py-6 border-b border-gray-200 border-solid w-[90%]">
                            <div className="flex justify-between">
                                <div className="mb-2 font-medium">
                                    ????????? ??????
                                </div>
                                <div className="text-[#008489] font-medium">
                                    <Link to="#">??????</Link>
                                </div>
                            </div>
                            <div className="font-light text-gray-600">
                                chrisp3@daum.net
                            </div>
                        </div>
                        <div className="py-6 border-b border-gray-200 border-solid w-[90%]">
                            <div className="flex justify-between">
                                <div className="mb-2 font-medium">????????????</div>
                                <div className="text-[#008489] font-medium">
                                    <Link to="#">??????</Link>
                                </div>
                            </div>
                            <div className="font-light text-gray-600">
                                01026887399
                            </div>
                        </div>
                        <div className="py-6 border-b border-gray-200 border-solid w-[90%]">
                            <div className="flex justify-between">
                                <div className="mb-2 font-medium">
                                    ?????? ?????? ?????????
                                </div>
                                <div className="text-[#008489] font-medium">
                                    <Link to="#">??????</Link>
                                </div>
                            </div>
                            <div className="font-light text-gray-600">
                                ???????????? ??????
                            </div>
                        </div>
                        <div className="py-6 border-b border-gray-200 border-solid w-[90%]">
                            <div className="flex justify-between">
                                <div className="mb-2 font-medium">??????</div>
                                <div className="text-[#008489] font-medium">
                                    <Link to="#">??????</Link>
                                </div>
                            </div>
                            <div className="font-light text-gray-600">
                                ???????????? ??????
                            </div>
                        </div>
                    </div>
                    <div
                        className="float-right w-1/3 px-6 border border-gray-200 border-solid h-fit"
                        style={{ height: "fit-content" }}
                    >
                        <div className="w-full my-8">
                            <Lock />
                            <div className="my-4 text-[1.05rem] font-semibold">
                                ????????? ??? ?????? ?????? ????????? ????????????????
                            </div>
                            <div className="font-light text-gray-600">
                                ????????????????????? ?????? ?????? ??? ???????????? ?????? ?????????
                                ????????? ??? ????????????. ????????? ????????? ??????
                                ??????????????? ????????? ??? ?????????, ????????? ?????? ??????
                                ????????? ????????? ??? ?????? ?????? ????????? ????????? ??? ??????
                                ????????????.
                            </div>
                        </div>
                        <div className="my-6">
                            <div className="w-12 border-b border-gray-200"></div>
                        </div>
                        <div className="my-8">
                            <IDCard />
                            <div className="my-4 text-[1.05rem] font-semibold">
                                ?????? ???????????? ?????? ????????? ????????????????
                            </div>
                            <div className="font-light text-gray-600">
                                ?????????????????? ????????? ????????? ????????? ????????? ???
                                ???????????? ????????? ????????? ???????????????.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default PersonalInfo;
