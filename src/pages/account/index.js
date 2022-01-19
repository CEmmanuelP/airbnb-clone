import { Link } from "react-router-dom";
import Header from "../../components/account/Header";
import Footer from "../../components/account/Footer";
import { ReactComponent as Profile } from "../../assets/ic-profile.svg";
import { ReactComponent as Security } from "../../assets/ic-security.svg";
import { ReactComponent as Pay } from "../../assets/ic-pay.svg";
import { ReactComponent as Announcement } from "../../assets/ic-announcement.svg";
import { ReactComponent as Reveal } from "../../assets/ic-reveal.svg";
import { ReactComponent as Config } from "../../assets/ic-config.svg";
import { ReactComponent as BusinessTrip } from "../../assets/ic-business-trip.svg";
import { ReactComponent as Tools } from "../../assets/ic-tools.svg";
import { ReactComponent as Credits } from "../../assets/ic-credits.svg";

const AccountSettings = () => {
  return (
    <div className="h-auto">
      <Header />
      <div className="w-full max-w-screen-lg px-[23px] m-auto">
        <div className="mt-16 mb-[56px] ml-[16px]">
          <div className="text-4xl font-bold ">계정</div>
          <div className="mt-2 text-lg">
            <span className="font-semibold">Yujin Kim,</span>{" "}
            <span className="font-light">chrisp3@daum.net · </span>{" "}
            <Link to="" className="font-bold underline">
              프로필로 이동
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 ml-[16px]">
          <Link to="/account-settings/personal-info" className="cursor-pointer">
            <div className="flex flex-col justify-between p-4 rounded-lg h-36 elevation-4">
              <Profile />
              <div>
                <div className="font-semibold">개인정보</div>
                <div className="text-sm text-gray-500">
                  개인정보 및 연락처를 알려주세요
                </div>
              </div>
            </div>
          </Link>
          <div className="flex flex-col justify-between p-4 rounded-lg h-36 elevation-4">
            <Security />
            <div>
              <div className="font-semibold">로그인 및 보안</div>
              <div className="text-sm text-gray-500">
                비밀번호를 변경하고 계정을 안전하게 보호하세요
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between p-4 rounded-lg h-36 elevation-4">
            <Pay />
            <div>
              <div className="font-semibold">결제 및 대금 수령</div>
              <div className="text-sm text-gray-500">
                결제, 대금 수령, 쿠폰, 기프트카드 및 세금 검토하기
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between p-4 rounded-lg h-36 elevation-4">
            <Announcement />
            <div>
              <div className="font-semibold">알림</div>
              <div className="text-sm text-gray-500">
                알림 환경설정 및 연락 방식을 선택하세요
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between p-4 rounded-lg h-36 elevation-4">
            <Reveal />
            <div>
              <div className="font-semibold">개인정보 및 공개 설정</div>
              <div className="text-sm text-gray-500">
                연결된 앱, 공유하는 정보 및 공개 대상 관리하기
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between p-4 rounded-lg h-36 elevation-4">
            <Config />
            <div>
              <div className="font-semibold">글로벌 환경 설정</div>
              <div className="text-sm text-gray-500">
                기본 언어, 통화, 시간대 설정하기
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between p-4 rounded-lg h-36 elevation-4">
            <BusinessTrip />
            <div>
              <div className="font-semibold">출장</div>
              <div className="text-sm text-gray-500">
                회사 이메일을 입력하면 출장에서 혜택을 누리실 수 있습니다.
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between p-4 rounded-lg h-36 elevation-4">
            <Tools />
            <div>
              <div className="font-semibold">전문 호스팅 도구</div>
              <div className="text-sm text-gray-500">
                에어비앤비에서 여러 숙소를 관리하신다면 전문 도구를 이용해보세요
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between p-4 rounded-lg h-36 elevation-4">
            <Credits />
            <div>
              <div className="font-semibold">추천 크레딧 및 쿠폰</div>
              <div className="text-sm text-gray-500">
                ₩0의 추천 크레딧과 쿠폰이 있습니다. 자세히 알아보기
              </div>
            </div>
          </div>
        </div>
        <div className="ml-[16px] my-16">
          <div className="flex flex-col items-center justify-center">
            <div className="text-sm">계정을 비활성화하셔야 하나요?</div>
            <div className="mt-2 text-sm font-medium underline">
              <Link to="#">지금 처리하기</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AccountSettings;
