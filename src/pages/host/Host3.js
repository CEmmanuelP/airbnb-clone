import * as React from "react";
import Layout from "../../components/host/Layout";

export default function Host3() {
  return (
    <Layout question="게스트가 머무르게 될 숙소의 종류가 무엇인가요?">
      <div className="flex flex-col space-y-2 px-28">
        <button className="flex border-solid border-[1px] border-gray-200 px-5 py-6 rounded rounded-xl justify-between">
          <div className="self-center">공간 전체</div>
        </button>
        <button className="flex border-solid border-[1px] border-gray-200 px-5 py-6 rounded rounded-xl justify-between">
          <div className="self-center">개인실</div>
        </button>
        <button className="flex border-solid border-[1px] border-gray-200 px-5 py-6 rounded rounded-xl justify-between">
          <div className="self-center">다인실</div>
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
