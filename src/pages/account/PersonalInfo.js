import Footer from "../../components/account/Footer";
import Header from "../../components/account/Header";
import { ReactComponent as ChevronLeft } from "../../assets/ic-chevronleft.svg";
import { ReactComponent as Lock } from "../../assets/ic-lock.svg";
import { ReactComponent as IDCard } from "../../assets/ic-idcard.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const PersonalInfo = () => {
  //   const token = localStorage.getItem("token");
  const [users, setUsers] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nameEdit, setNameEdit] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");

      console.log("start fetchUsers");

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
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onClickNameEdit = (e) => {
    e.preventDefault();
    setNameEdit(!nameEdit);
  };

  const onSubmitNameEdit = (e) => {
    console.log("onSubmitNameEdit");
  };

  return (
    <>
      <Header />
      <div className="w-full h-auto max-w-screen-lg px-[23px] m-auto">
        <div className="my-[40px]">
          <div className="text-sm">
            계정
            <ChevronLeft className="inline mx-4" />
            개인정보
          </div>
          <div className="mt-3 text-3xl font-bold">개인정보</div>
        </div>
        <div className="flex w-full my-8">
          <div className="float-left w-2/3">
            <div className="py-6 border-b border-gray-200 border-solid w-[90%]">
              <div className="flex justify-between">
                <div className="mb-2 font-medium">실명</div>
                <div className="text-[#008489] font-medium">
                  <Link
                    to="#"
                    onClick={(e) => {
                      onClickNameEdit(e);
                    }}
                  >
                    수정
                  </Link>
                </div>
              </div>
              {nameEdit ? (
                <form
                  className="font-light text-gray-600"
                  onSubmit={onSubmitNameEdit}
                >
                  <div className="mt-2 mb-6">
                    허가증이나 여권 등 여행 서류에 기재되어 있는 이름을
                    말합니다.
                  </div>
                  <div className="mb-3">
                    <div className="float-left w-1/2 pr-2">
                      <div className="mb-2">이름</div>
                      <div className="border border-gray-200 border-solid rounded-md">
                        <input
                          className="w-full p-3 rounded-md"
                          value="Yujin"
                        />
                      </div>
                    </div>
                    <div className="float-right w-1/2 px-2">
                      <div className="mb-2">성</div>
                      <div className="border border-gray-200 border-solid rounded-md">
                        <input className="w-full p-3 rounded-md" value="Kim" />
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-[#008489] px-6 py-3 text-white rounded-md mt-3"
                  >
                    저장
                  </button>
                </form>
              ) : (
                <div className="font-light text-gray-600">Yujin Kim</div>
              )}
            </div>
            <div className="py-6 border-b border-gray-200 border-solid w-[90%]">
              <div className="flex justify-between">
                <div className="mb-2 font-medium">성별</div>
                <div className="text-[#008489] font-medium">
                  <Link to="#">수정</Link>
                </div>
              </div>
              <div className="font-light text-gray-600">남자</div>
            </div>
            <div className="py-6 border-b border-gray-200 border-solid w-[90%]">
              <div className="flex justify-between">
                <div className="mb-2 font-medium">생년월일</div>
                <div className="text-[#008489] font-medium">
                  <Link to="#">수정</Link>
                </div>
              </div>
              <div className="font-light text-gray-600">1992년 5월 12일</div>
            </div>
            <div className="py-6 border-b border-gray-200 border-solid w-[90%]">
              <div className="flex justify-between">
                <div className="mb-2 font-medium">이메일 주소</div>
                <div className="text-[#008489] font-medium">
                  <Link to="#">수정</Link>
                </div>
              </div>
              <div className="font-light text-gray-600">chrisp3@daum.net</div>
            </div>
            <div className="py-6 border-b border-gray-200 border-solid w-[90%]">
              <div className="flex justify-between">
                <div className="mb-2 font-medium">전화번호</div>
                <div className="text-[#008489] font-medium">
                  <Link to="#">수정</Link>
                </div>
              </div>
              <div className="font-light text-gray-600">01026887399</div>
            </div>
            <div className="py-6 border-b border-gray-200 border-solid w-[90%]">
              <div className="flex justify-between">
                <div className="mb-2 font-medium">정부 발급 신분증</div>
                <div className="text-[#008489] font-medium">
                  <Link to="#">수정</Link>
                </div>
              </div>
              <div className="font-light text-gray-600">제공되지 않음</div>
            </div>
            <div className="py-6 border-b border-gray-200 border-solid w-[90%]">
              <div className="flex justify-between">
                <div className="mb-2 font-medium">주소</div>
                <div className="text-[#008489] font-medium">
                  <Link to="#">수정</Link>
                </div>
              </div>
              <div className="font-light text-gray-600">제공되지 않음</div>
            </div>
          </div>
          <div
            className="float-right w-1/3 px-6 border border-gray-200 border-solid h-fit"
            style={{ height: "fit-content" }}
          >
            <div className="w-full my-8">
              <Lock />
              <div className="my-4 text-[1.05rem] font-semibold">
                수정할 수 있는 세부 정보는 무엇인가요?
              </div>
              <div className="font-light text-gray-600">
                에어비앤비에서 본인 인증 시 사용하는 세부 정보는 변경할 수
                없습니다. 연락처 정보와 일부 개인정보는 수정할 수 있지만, 다음번
                예약 또는 숙소를 등록할 때 본인 인증 절차를 거쳐야 할 수도
                있습니다.
              </div>
            </div>
            <div className="my-6">
              <div className="w-12 border-b border-gray-200"></div>
            </div>
            <div className="my-8">
              <IDCard />
              <div className="my-4 text-[1.05rem] font-semibold">
                다른 사람에게 어떤 정보가 공개되나요?
              </div>
              <div className="font-light text-gray-600">
                에어비앤비는 예약이 확정된 후에만 호스트 및 게스트의 연락처
                정보를 공개합니다.
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
