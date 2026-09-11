"use client";

export default function Header() {
  return (
    <div className="fixed top-0 right-0 left-0 z-50 w-full bg-white shadow-sm">
      <nav role="navigation">
        <div className="container-section">
          <div className="relative flex h-14 items-center justify-between md:h-20">
            <div className="flex items-center">
              <a
                className="focus-ring-base flex cursor-pointer items-center"
                aria-label="LG 유플러스 회사소개 메인 페이지로 이동 "
                href="/about/ko"
              >
                <svg
                  width="87"
                  height="24"
                  viewBox="0 0 73 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden md:block"
                >
                  <path
                    d="M10.0196 20.0078C12.001 20.0062 13.9374 19.4182 15.5841 18.3182C17.2307 17.2182 18.5136 15.6556 19.2705 13.828C20.0275 12.0003 20.2245 9.98971 19.8366 8.05034C19.4487 6.11096 18.4935 4.32991 17.0915 2.93237C15.6896 1.53484 13.9039 0.583575 11.9604 0.198858C10.0168 -0.185859 8.00258 0.0132479 6.17238 0.770999C4.34218 1.52875 2.77818 2.81112 1.67813 4.45598C0.578076 6.10083 -0.00862906 8.0343 -0.00781165 10.0119C-0.00699704 11.3254 0.253014 12.6259 0.757379 13.8391C1.26174 15.0523 2.00058 16.1545 2.93171 17.0827C3.86284 18.0109 4.96803 18.7469 6.18416 19.2488C7.4003 19.7507 8.70358 20.0086 10.0196 20.0078Z"
                    fill="#C30036"
                  ></path>
                  <path
                    d="M9.625 5.61328V14.387H12.4194V13.5984H10.4296V5.61328H9.625Z"
                    fill="white"
                  ></path>
                  <path
                    d="M6.82672 8.00822C7.06448 8.00822 7.2969 7.93782 7.49457 7.80594C7.69223 7.67405 7.84626 7.4866 7.93716 7.26732C8.02805 7.04803 8.05172 6.80677 8.00519 6.57405C7.95865 6.34132 7.844 6.12761 7.67573 5.95995C7.50746 5.79229 7.29314 5.67822 7.05989 5.63217C6.82664 5.58612 6.58495 5.61017 6.3654 5.70127C6.14586 5.79237 5.95832 5.94642 5.82652 6.14394C5.69473 6.34145 5.62459 6.57355 5.625 6.81087C5.62555 7.12861 5.7524 7.43316 5.97771 7.65765C6.20301 7.88214 6.50836 8.00822 6.82672 8.00822Z"
                    fill="white"
                  ></path>
                  <path
                    d="M10.4351 1.63739C10.3296 1.63739 10.131 1.625 10.0359 1.625C8.3763 1.625 6.754 2.11615 5.3741 3.03635C3.9942 3.95655 2.91867 5.26448 2.28349 6.79474C1.64831 8.32501 1.48201 10.0089 1.80562 11.6335C2.12923 13.2581 2.92823 14.7504 4.10157 15.9218C5.27491 17.0932 6.7699 17.891 8.39753 18.2144C10.0251 18.5378 11.7123 18.3723 13.2456 17.7387C14.779 17.1051 16.0897 16.0319 17.012 14.6549C17.9343 13.2778 18.4268 11.6588 18.4272 10.0024V9.63078H12.4289V10.4008H17.6226C17.6226 10.4194 17.6226 10.4999 17.6226 10.5205C17.524 11.9765 17.0071 13.3732 16.1338 14.5436C15.2605 15.7139 14.0679 16.6083 12.6985 17.1197C11.3292 17.6311 9.84124 17.7379 8.41272 17.4272C6.98419 17.1165 5.67563 16.4015 4.64365 15.3678C3.57975 14.3065 2.85516 12.954 2.56155 11.4816C2.26795 10.0091 2.41852 8.48285 2.99423 7.09584C3.56993 5.70883 4.54489 4.52341 5.79576 3.68959C7.04663 2.85576 8.51719 2.41099 10.0214 2.41154C10.1083 2.41154 10.3234 2.41154 10.4206 2.41154L10.4351 1.63739Z"
                    fill="white"
                  ></path>
                  <path
                    d="M69.0832 3.51863V0.238281H66.657V3.51863H63.4531V5.83077H66.657V9.07189H69.0832V5.83077H72.3098V3.51863H69.0832Z"
                    fill="#727171"
                  ></path>
                  <path
                    d="M58.4182 3.49219V10.9241C58.4182 13.0029 57.3841 14.0207 55.6342 14.0207C53.8844 14.0207 52.8523 12.9885 52.8523 10.9241V3.49219H49.8945V10.9592C49.8945 15.0632 52.0829 16.6053 55.5287 16.6053H55.7356C59.1835 16.6053 61.3718 15.0632 61.3718 10.9592V3.49219H58.4182Z"
                    fill="#727171"
                  ></path>
                  <path
                    d="M28.212 16.4175H33.7014V13.9009H27.5046V3.49219H24.5117V16.4175H28.212Z"
                    fill="#727171"
                  ></path>
                  <path
                    d="M40.2878 11.4919H42.7243V13.7524C42.0273 13.9801 41.2983 14.0951 40.565 14.0931C37.8761 14.0931 36.9743 12.7285 36.9743 9.96425C36.9743 7.31974 37.8306 5.76111 40.5215 5.76111C42.019 5.76111 42.8732 6.22973 43.5786 7.12568L45.4401 5.42048C44.3066 3.79992 42.3189 3.30859 40.4595 3.30859C36.271 3.30859 34.0703 5.58977 34.0703 9.94154C34.0703 14.2933 36.058 16.6199 40.4388 16.6199C42.4472 16.6199 44.4142 16.1079 45.4835 15.3606V9.08068H40.2878V11.4919Z"
                    fill="#727171"
                  ></path>
                </svg>
                <svg
                  width="80"
                  height="22"
                  viewBox="0 0 73 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="block md:hidden"
                >
                  <path
                    d="M10.0196 20.0078C12.001 20.0062 13.9374 19.4182 15.5841 18.3182C17.2307 17.2182 18.5136 15.6556 19.2705 13.828C20.0275 12.0003 20.2245 9.98971 19.8366 8.05034C19.4487 6.11096 18.4935 4.32991 17.0915 2.93237C15.6896 1.53484 13.9039 0.583575 11.9604 0.198858C10.0168 -0.185859 8.00258 0.0132479 6.17238 0.770999C4.34218 1.52875 2.77818 2.81112 1.67813 4.45598C0.578076 6.10083 -0.00862906 8.0343 -0.00781165 10.0119C-0.00699704 11.3254 0.253014 12.6259 0.757379 13.8391C1.26174 15.0523 2.00058 16.1545 2.93171 17.0827C3.86284 18.0109 4.96803 18.7469 6.18416 19.2488C7.4003 19.7507 8.70358 20.0086 10.0196 20.0078Z"
                    fill="#C30036"
                  ></path>
                  <path
                    d="M9.625 5.61328V14.387H12.4194V13.5984H10.4296V5.61328H9.625Z"
                    fill="white"
                  ></path>
                  <path
                    d="M6.82672 8.00822C7.06448 8.00822 7.2969 7.93782 7.49457 7.80594C7.69223 7.67405 7.84626 7.4866 7.93716 7.26732C8.02805 7.04803 8.05172 6.80677 8.00519 6.57405C7.95865 6.34132 7.844 6.12761 7.67573 5.95995C7.50746 5.79229 7.29314 5.67822 7.05989 5.63217C6.82664 5.58612 6.58495 5.61017 6.3654 5.70127C6.14586 5.79237 5.95832 5.94642 5.82652 6.14394C5.69473 6.34145 5.62459 6.57355 5.625 6.81087C5.62555 7.12861 5.7524 7.43316 5.97771 7.65765C6.20301 7.88214 6.50836 8.00822 6.82672 8.00822Z"
                    fill="white"
                  ></path>
                  <path
                    d="M10.4351 1.63739C10.3296 1.63739 10.131 1.625 10.0359 1.625C8.3763 1.625 6.754 2.11615 5.3741 3.03635C3.9942 3.95655 2.91867 5.26448 2.28349 6.79474C1.64831 8.32501 1.48201 10.0089 1.80562 11.6335C2.12923 13.2581 2.92823 14.7504 4.10157 15.9218C5.27491 17.0932 6.7699 17.891 8.39753 18.2144C10.0251 18.5378 11.7123 18.3723 13.2456 17.7387C14.779 17.1051 16.0897 16.0319 17.012 14.6549C17.9343 13.2778 18.4268 11.6588 18.4272 10.0024V9.63078H12.4289V10.4008H17.6226C17.6226 10.4194 17.6226 10.4999 17.6226 10.5205C17.524 11.9765 17.0071 13.3732 16.1338 14.5436C15.2605 15.7139 14.0679 16.6083 12.6985 17.1197C11.3292 17.6311 9.84124 17.7379 8.41272 17.4272C6.98419 17.1165 5.67563 16.4015 4.64365 15.3678C3.57975 14.3065 2.85516 12.954 2.56155 11.4816C2.26795 10.0091 2.41852 8.48285 2.99423 7.09584C3.56993 5.70883 4.54489 4.52341 5.79576 3.68959C7.04663 2.85576 8.51719 2.41099 10.0214 2.41154C10.1083 2.41154 10.3234 2.41154 10.4206 2.41154L10.4351 1.63739Z"
                    fill="white"
                  ></path>
                  <path
                    d="M69.0832 3.51863V0.238281H66.657V3.51863H63.4531V5.83077H66.657V9.07189H69.0832V5.83077H72.3098V3.51863H69.0832Z"
                    fill="#727171"
                  ></path>
                  <path
                    d="M58.4182 3.49219V10.9241C58.4182 13.0029 57.3841 14.0207 55.6342 14.0207C53.8844 14.0207 52.8523 12.9885 52.8523 10.9241V3.49219H49.8945V10.9592C49.8945 15.0632 52.0829 16.6053 55.5287 16.6053H55.7356C59.1835 16.6053 61.3718 15.0632 61.3718 10.9592V3.49219H58.4182Z"
                    fill="#727171"
                  ></path>
                  <path
                    d="M28.212 16.4175H33.7014V13.9009H27.5046V3.49219H24.5117V16.4175H28.212Z"
                    fill="#727171"
                  ></path>
                  <path
                    d="M40.2878 11.4919H42.7243V13.7524C42.0273 13.9801 41.2983 14.0951 40.565 14.0931C37.8761 14.0931 36.9743 12.7285 36.9743 9.96425C36.9743 7.31974 37.8306 5.76111 40.5215 5.76111C42.019 5.76111 42.8732 6.22973 43.5786 7.12568L45.4401 5.42048C44.3066 3.79992 42.3189 3.30859 40.4595 3.30859C36.271 3.30859 34.0703 5.58977 34.0703 9.94154C34.0703 14.2933 36.058 16.6199 40.4388 16.6199C42.4472 16.6199 44.4142 16.1079 45.4835 15.3606V9.08068H40.2878V11.4919Z"
                    fill="#727171"
                  ></path>
                </svg>
              </a>
            </div>
            <div
              className="absolute left-48 hidden items-center space-x-4 md:flex lg:left-52 lg:space-x-6 xl:left-56 xl:space-x-8 2xl:space-x-10"
              role="menubar"
            >
              <div className="relative">
                <button
                  className="focus-ring-base hover:text-bright-magenta relative -mx-2 grid cursor-pointer place-items-center p-2 text-base font-semibold transition-all text-uplus-black font-semibold"
                  aria-expanded="false"
                  aria-haspopup="true"
                  aria-controls="menu-기업정보"
                  id="menu-기업정보-button"
                  role="menuitem"
                >
                  <span className="col-start-1 row-start-1">기업정보</span>
                  <span
                    className="pointer-events-none col-start-1 row-start-1 font-extrabold opacity-0"
                    aria-hidden="true"
                  >
                    기업정보
                  </span>
                </button>
              </div>
              <div className="relative">
                <button
                  className="focus-ring-base hover:text-bright-magenta relative -mx-2 grid cursor-pointer place-items-center p-2 text-base font-semibold transition-all text-uplus-black font-semibold"
                  aria-expanded="false"
                  aria-haspopup="true"
                  aria-controls="menu-서비스/기술"
                  id="menu-서비스/기술-button"
                  role="menuitem"
                >
                  <span className="col-start-1 row-start-1">서비스/기술</span>
                  <span
                    className="pointer-events-none col-start-1 row-start-1 font-extrabold opacity-0"
                    aria-hidden="true"
                  >
                    서비스/기술
                  </span>
                </button>
              </div>
              <div className="relative">
                <button
                  className="focus-ring-base hover:text-bright-magenta relative -mx-2 grid cursor-pointer place-items-center p-2 text-base font-semibold transition-all text-uplus-black font-semibold"
                  aria-expanded="false"
                  aria-haspopup="true"
                  aria-controls="menu-esg"
                  id="menu-esg-button"
                  role="menuitem"
                >
                  <span className="col-start-1 row-start-1">ESG</span>
                  <span
                    className="pointer-events-none col-start-1 row-start-1 font-extrabold opacity-0"
                    aria-hidden="true"
                  >
                    ESG
                  </span>
                </button>
              </div>
              <div className="relative">
                <button
                  className="focus-ring-base hover:text-bright-magenta relative -mx-2 grid cursor-pointer place-items-center p-2 text-base font-semibold transition-all text-bright-magenta font-bold"
                  aria-expanded="false"
                  aria-haspopup="true"
                  aria-controls="menu-투자정보"
                  id="menu-투자정보-button"
                  role="menuitem"
                  aria-current="page"
                >
                  <span className="col-start-1 row-start-1">투자정보</span>
                  <span
                    className="pointer-events-none col-start-1 row-start-1 font-extrabold opacity-0"
                    aria-hidden="true"
                  >
                    투자정보
                  </span>
                </button>
              </div>
              <div className="relative">
                <button
                  className="focus-ring-base hover:text-bright-magenta relative -mx-2 grid cursor-pointer place-items-center p-2 text-base font-semibold transition-all text-uplus-black font-semibold"
                  aria-expanded="false"
                  aria-haspopup="true"
                  aria-controls="menu-인재채용"
                  id="menu-인재채용-button"
                  role="menuitem"
                >
                  <span className="col-start-1 row-start-1">인재채용</span>
                  <span
                    className="pointer-events-none col-start-1 row-start-1 font-extrabold opacity-0"
                    aria-hidden="true"
                  >
                    인재채용
                  </span>
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-uplus-black mr-13 hidden items-center text-sm font-semibold md:flex">
                <a
                  className="focus-ring-base -my-3 cursor-pointer p-3 transition-all hover:font-bold focus:font-bold"
                  href="https://www.lguplus.com/"
                >
                  개인
                </a>
                <div
                  className="bg-uplus-black h-2 w-px"
                  aria-hidden="true"
                ></div>
                <a
                  className="focus-ring-base -my-3 cursor-pointer p-3 transition-all hover:font-bold focus:font-bold"
                  href="https://www.lguplus.com/biz"
                >
                  기업
                </a>
                <div
                  className="bg-uplus-black h-2 w-px"
                  aria-hidden="true"
                ></div>
                <a
                  className="focus-ring-base -my-3 cursor-pointer p-3 transition-all hover:font-bold focus:font-bold"
                  href="https://www.lguplus.com/internet-iptv/soho"
                >
                  소상공인
                </a>
              </div>
              <div className="hidden sm:block">
                <div className="flex items-center">
                  <button
                    className="focus-ring-base px-3 py-1 text-sm text-uplus-black cursor-pointer grid place-items-center font-semibold hover:font-bold"
                    aria-label="EN 언어로 변경"
                  >
                    <span className="col-start-1 row-start-1">EN</span>
                    <span
                      className="col-start-1 row-start-1 font-bold opacity-0 pointer-events-none"
                      aria-hidden="true"
                    >
                      EN
                    </span>
                  </button>
                </div>
              </div>
              <div className="sm:hidden"></div>
              <button
                className="focus-ring-base mr-[-16px] cursor-pointer p-2 sm:mr-[-8px]"
                aria-label="메뉴 열기"
                aria-expanded="false"
                aria-controls="mobile-menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
