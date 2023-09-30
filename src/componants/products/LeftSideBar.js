import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function LeftSideBar() {
  return (
    <div className="flex flex-col items-center justify-between w-[70px] rounded-[10px] m-[20px] h-[90vh] bg-white">
      <div className="flex flex-col items-center">
       <svg
          width="32"
          height="37"
          viewBox="0 0 32 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=" my-[30px] "
        >
          <rect width="32" height="36.7092" rx="4" fill="white" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.8793 8.98199H14.3992L13.4945 13.6847H12.4945L13.5868 8.00699H14.1876L14.1889 8H23.0544L23.053 8.00699H23.0669L21.9746 13.6847H20.9746L21.8793 8.98199Z"
            fill="#105E46"
          />
          <rect
            width="12.3346"
            height="14.8015"
            transform="matrix(1 0 -0.188924 0.981992 11.6655 14.1742)"
            fill="#12805D"
          />
          <rect
            width="12.3346"
            height="14.8015"
            transform="matrix(1 0 -0.188924 0.981992 10.7963 13.4034)"
            fill="#02D693"
          />
        </svg>

        <svg
          width="40"
          height="41"
          viewBox="0 0 40 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.125 15.8342H20H27.875M12.125 20.7092H27.875M12.125 25.5842H27.875"
            stroke="#1A1F16"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
        </svg>

        <svg
          width="40"
          height="41"
          viewBox="0 0 40 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=" my-[30px] "
        >
          <path
            d="M29.3117 16.6498C29.1727 16.5098 29.0073 16.3987 28.825 16.3231C28.6428 16.2475 28.4473 16.2087 28.25 16.2092H25.25V15.4592C25.25 14.0668 24.6969 12.7314 23.7123 11.7469C22.7277 10.7623 21.3924 10.2092 20 10.2092C18.6076 10.2092 17.2723 10.7623 16.2877 11.7469C15.3031 12.7314 14.75 14.0668 14.75 15.4592V16.2092H11.75C11.3522 16.2092 10.9706 16.3672 10.6893 16.6485C10.408 16.9298 10.25 17.3113 10.25 17.7092V27.8342C10.25 29.6623 11.7969 31.2092 13.625 31.2092H26.375C27.2593 31.2094 28.1086 30.8637 28.7413 30.2459C29.0596 29.9421 29.3132 29.577 29.4865 29.1726C29.6599 28.7682 29.7495 28.3328 29.75 27.8928V17.7092C29.7506 17.5124 29.7122 17.3174 29.637 17.1356C29.5617 16.9537 29.4512 16.7886 29.3117 16.6498ZM16.25 15.4592C16.25 14.4646 16.6451 13.5108 17.3483 12.8075C18.0516 12.1043 19.0054 11.7092 20 11.7092C20.9946 11.7092 21.9484 12.1043 22.6517 12.8075C23.3549 13.5108 23.75 14.4646 23.75 15.4592V16.2092H16.25V15.4592ZM25.25 19.9592C25.25 21.3516 24.6969 22.6869 23.7123 23.6715C22.7277 24.656 21.3924 25.2092 20 25.2092C18.6076 25.2092 17.2723 24.656 16.2877 23.6715C15.3031 22.6869 14.75 21.3516 14.75 19.9592V19.2092C14.75 19.0103 14.829 18.8195 14.9697 18.6788C15.1103 18.5382 15.3011 18.4592 15.5 18.4592C15.6989 18.4592 15.8897 18.5382 16.0303 18.6788C16.171 18.8195 16.25 19.0103 16.25 19.2092V19.9592C16.25 20.9537 16.6451 21.9076 17.3483 22.6108C18.0516 23.3141 19.0054 23.7092 20 23.7092C20.9946 23.7092 21.9484 23.3141 22.6517 22.6108C23.3549 21.9076 23.75 20.9537 23.75 19.9592V19.2092C23.75 19.0103 23.829 18.8195 23.9697 18.6788C24.1103 18.5382 24.3011 18.4592 24.5 18.4592C24.6989 18.4592 24.8897 18.5382 25.0303 18.6788C25.171 18.8195 25.25 19.0103 25.25 19.2092V19.9592Z"
            fill="#1A1F16"
          />
        </svg>
      </div>
       
      <div className="flex justify-center items-center border-black w-[35px] h-[35px] rounded-[50%] border mb-[30px]">
      <FontAwesomeIcon
            icon={faUser}
            className="text-[20px]   "
          /></div>
        
      </div>
  )
}

export default LeftSideBar