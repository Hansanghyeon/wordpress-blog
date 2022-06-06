import React from "react";

export default function Page(): JSX.Element {
  return (
    <div className="container lg:max-w-screen-lg">
      <div className="relative">
        <img src="/images/not-found.png" alt="not found" />
        <div
          className="
          #sm:w-full mx-auto max-w-[90%] -translate-y-1/2 rounded-[6px] border-[#d0d7de] bg-white bg-opacity-95
          px-[24px] py-[20px] shadow-sm dark:border-[#444c56] dark:bg-[#2d333b] md:absolute md:left-1/2
          md:top-1/2 md:-translate-x-1/2
          md:translate-y-[-100%]
        "
        >
          <h1 className="mb-[24px] text-[24px] font-semibold lg:whitespace-nowrap lg:text-[32px]">
            요청하신 페이지를
            <br className="block lg:hidden" /> 찾을 수 없습니다.
          </h1>
          <div className="prose lg:text-[20px]">
            이용에 불편을 드려 죄송합니다.
            <br />
            페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다.
            <br />
            입력하신 주소가 정확한지 다시 한 번 확인해 주세요.
          </div>
        </div>
      </div>
    </div>
  );
}
