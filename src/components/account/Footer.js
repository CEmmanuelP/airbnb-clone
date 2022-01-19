import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as Language } from "../../assets/ic-language.svg";
import { ReactComponent as NaverBlog } from "../../assets/ic-naver-blog.svg";
import { ReactComponent as NaverPost } from "../../assets/ic-naver-post.svg";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-gray-100 border-t border-gray-300 border-solid">
      <div className="flex flex-col items-center w-full max-w-screen-xl m-auto">
        <div className="grid w-full grid-cols-4 gap-0 mt-8">
          <div>
            <div className="text-sm font-semibold">에어비앤비 지원</div>
            <div>
              <div className="mt-4 text-sm font-light">도움말 센터</div>
              <div className="mt-4 text-sm font-light">안전 정보</div>
              <div className="mt-4 text-sm font-light">예약 취소 옵션</div>
              <div className="mt-4 text-sm font-light">
                에어비앤비의 코로나19 대응 방안
              </div>
              <div className="mt-4 text-sm font-light">장애인 지원</div>
              <div className="mt-4 text-sm font-light">이웃 민원 신고</div>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold">커뮤니티</div>
            <div>
              <div className="mt-4 text-sm font-light">
                Airbnb.org: 재난 구호 숙소
              </div>
              <div className="mt-4 text-sm font-light">아프간 난민 지원</div>
              <div className="mt-4 text-sm font-light">
                다양성과 소속감 증진
              </div>
              <div className="mt-4 text-sm font-light">
                차별 철폐를 위한 노력
              </div>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold">호스팅</div>
            <div>
              <div className="mt-4 text-sm font-light">호스팅 시작하기</div>
              <div className="mt-4 text-sm font-light">
                에어커버: 호스트를 위한 보호 프로그램
              </div>
              <div className="mt-4 text-sm font-light">
                호스팅 자료 둘러보기
              </div>
              <div className="mt-4 text-sm font-light">
                커뮤니티 포럼 방문하기
              </div>
              <div className="mt-4 text-sm font-light">책임감 있는 호스팅</div>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold">소개</div>
            <div>
              <div className="mt-4 text-sm font-light">뉴스룸</div>
              <div className="mt-4 text-sm font-light">
                새로운 기능에 대해 알아보기
              </div>
              <div className="mt-4 text-sm font-light">
                에어비앤비 공동창업자의 메시지
              </div>
              <div className="mt-4 text-sm font-light">채용정보</div>
              <div className="mt-4 text-sm font-light">투자자 정보</div>
              <div className="mt-4 text-sm font-light">에어비앤비 Luxe</div>
            </div>
          </div>
        </div>
        <div className="w-full mt-10 text-sm border-t border-gray-300 border-solid">
          <div className="flex justify-between py-4">
            <div>
              © 2022 Airbnb, Inc.·개인정보 처리방침·이용약관·사이트맵·한국의
              변경된 환불 정책·회사 세부정보
            </div>
            <div>
              <div className="flex">
                <div className="flex">
                  <div className="flex items-center justify-center">
                    <Language />
                    <span className="ml-2 underline">한국어(KR)</span>
                  </div>
                  <div className="flex items-center justify-center ml-4">
                    <span>₩</span>
                    <span className="ml-2 underline">KRW</span>
                  </div>
                </div>
                <div className="flex items-center justify-center ml-8">
                  <FontAwesomeIcon icon={faFacebook} className="ml-4" />
                  <FontAwesomeIcon icon={faTwitter} className="ml-4" />
                  <FontAwesomeIcon icon={faInstagram} className="ml-4" />
                  <NaverBlog className="ml-4" />
                  <NaverPost className="ml-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
