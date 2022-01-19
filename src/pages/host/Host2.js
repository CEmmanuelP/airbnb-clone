import * as React from "react";
import Layout from "../../components/host/Layout";

export default function Host2() {
  return (
    <Layout question="다음 숙소를 가장 잘 설명하는 문구는 무엇인가요?">
      <div className="flex flex-col space-y-2 px-28">
        <button className="flex border-solid border-[1px] border-gray-200 px-5 py-4 rounded rounded-xl flex-col">
          <div className="">공동 주택</div>
          <span className="text-xs text-left text-gray-400">
            다세대 건물 또는 단지 내의 임대 공간입니다.
          </span>
        </button>
        <button className="flex border-solid border-[1px] border-gray-200 px-5 py-4 rounded rounded-xl flex-col">
          <div className="">공동 주택(콘도)</div>
          <span className="text-xs text-left text-gray-400">
            거주자 소유의 다세대 건물 또는 단지 내의 공간을 의미합니다.
          </span>
        </button>
        <button className="flex border-solid border-[1px] border-gray-200 px-5 py-4 rounded rounded-xl flex-col">
          <div className="">로프트</div>
          <span className="text-xs text-left text-gray-400">
            개방적인 구조의 아파트나 콘도로 내부가 낮은 벽으로 마감되었을 수
            있습니다.
          </span>
        </button>
        <button className="flex border-solid border-[1px] border-gray-200 px-5 py-4 rounded rounded-xl flex-col">
          <div className="">레지던스</div>
          <span className="text-xs text-left text-gray-400">
            전문 관리업체가 운영하는 아파트로, 호텔 같은 편의시설을 갖추고
            있습니다.
          </span>
        </button>
        <button className="flex border-solid border-[1px] border-gray-200 px-5 py-4 rounded rounded-xl flex-col">
          <div className="">카사 파르티쿨라르</div>
          <span className="text-xs text-left text-gray-400">
            B&B와 비슷한 쿠바 숙소로, 호스트가 거주하는 집 안 개인실을
            의미합니다.
          </span>
        </button>
        <button className="flex border-solid border-[1px] border-gray-200 px-5 py-4 rounded rounded-xl flex-col">
          <div className="">휴가용 주택</div>
          <span className="text-xs text-left text-gray-400">
            주방과 욕실이 있고, 가구가 완비된 임대 숙소로, 리셉션 데스크와 같은
            일부 서비스를 게스트에게 제공할 수 있습니다.
          </span>
        </button>
      </div>
      <div className="absolute bottom-0 flex justify-between min-w-[50%] min-h-fit px-10 py-3 border-solid border-t-2 text-sm">
        <button className="underline">뒤로</button>
        <button className="px-5 py-3 text-white bg-black rounded rounded-md">
          다음
        </button>
      </div>
    </Layout>
  );
}
