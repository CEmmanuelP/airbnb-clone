import * as React from "react";
import Layout from "../../components/host/Layout";

export default function Host() {
  return (
    <Layout question="호스트할 숙소 유형을 알려주세요.">
      <div className="flex flex-col space-y-2 px-28">
        <button className="flex border-solid border-[1px] border-gray-200 px-5 py-4 rounded rounded-xl justify-between">
          <div className="self-center">아파트</div>
          <img
            className="rounded-sm rounded max-h-10"
            src="https://a0.muscache.com/im/pictures/eadbcbdb-d57d-44d9-9a76-665a7a4d1cd7.jpg?im_w=240"
            alt="아파트"
          />
        </button>
        <button className="flex border-solid border-[1px] border-gray-200 px-5 py-4 rounded rounded-xl justify-between">
          <div className="self-center">주택</div>
          <img
            className="rounded-sm rounded max-h-10"
            src="https://a0.muscache.com/im/pictures/eadbcbdb-d57d-44d9-9a76-665a7a4d1cd7.jpg?im_w=240"
            alt="아파트"
          />
        </button>
        <button className="flex border-solid border-[1px] border-gray-200 px-5 py-4 rounded rounded-xl justify-between">
          <div className="self-center">별채</div>
          <img
            className="rounded-sm rounded max-h-10"
            src="https://a0.muscache.com/im/pictures/eadbcbdb-d57d-44d9-9a76-665a7a4d1cd7.jpg?im_w=240"
            alt="아파트"
          />
        </button>
        <button className="flex border-solid border-[1px] border-gray-200 px-5 py-4 rounded rounded-xl justify-between">
          <div className="self-center">독특한 숙소</div>
          <img
            className="rounded-sm rounded max-h-10"
            src="https://a0.muscache.com/im/pictures/eadbcbdb-d57d-44d9-9a76-665a7a4d1cd7.jpg?im_w=240"
            alt="아파트"
          />
        </button>
        <button className="flex border-solid border-[1px] border-gray-200 px-5 py-4 rounded rounded-xl justify-between">
          <div className="self-center">B&B</div>
          <img
            className="rounded-sm rounded max-h-10"
            src="https://a0.muscache.com/im/pictures/eadbcbdb-d57d-44d9-9a76-665a7a4d1cd7.jpg?im_w=240"
            alt="아파트"
          />
        </button>
        <button className="flex border-solid border-[1px] border-gray-200 px-5 py-4 rounded rounded-xl justify-between">
          <div className="self-center">부티크 호텔</div>
          <img
            className="rounded-sm rounded max-h-10"
            src="https://a0.muscache.com/im/pictures/eadbcbdb-d57d-44d9-9a76-665a7a4d1cd7.jpg?im_w=240"
            alt="아파트"
          />
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
