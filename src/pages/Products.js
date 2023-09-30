import React from "react";
import Product from "../componants/products/Product";
import BagProductPreview from "../componants/products/BagProductPreview";

function Products() {
  return (
    <div className=" w-full h-full bg-[#f1f1f1] flex relative ">
      {/* left icon bar with icons */}
      <div className="flex flex-col items-center w-[70px] rounded-[10px] m-[20px] h-[90vh] bg-white">
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

      {/* center with search and products */}
      <div className="flex flex-col max-w-[70%]  ">
        <div className="flex w-full items-center justify-center h-[100px] p-[10px] mb-[30px]">
          {/* search */}
          <div className="flex flex-col justify-start p-[8px] w-[380px]">
            <p className=" pl-[3px] text-[#454545] text-[12px] ">Search Item</p>
            <input
              type="text"
              className="flex h-[35px] rounded-md text-[13px] py-[5px] px-[10px]"
              placeholder=" iPhone 15... "
            />
          </div>
        </div>
        {/* products */}
        <div className="flex w-full flex-wrap justify-evenly ">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>

      {/* right side with cart products */}
      <div className=" fixed right-0 flex border-l border-[#454545] max-w-[250px] h-[80vh] mt-[70px] pt-[30px] px-[20px] flex-col items-center">
        <h1 className=" text-[30px] font-semibold w-full text-center ">Bag</h1>
        <div className="flex w-full flex-wrap justify-center">
          <BagProductPreview />
          <BagProductPreview />
          <BagProductPreview />
          <BagProductPreview />
        </div>
        <button className="flex mt-[30px] w-[160px] h-[40px] justify-center items-center bg-black rounded-[12px] ">
          <svg
            width="20"
            height="22"
            viewBox="0 0 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.3117 6.94062C19.1727 6.8006 19.0073 6.68956 18.825 6.61392C18.6428 6.53829 18.4473 6.49957 18.25 6.5H15.25V5.75C15.25 4.35761 14.6969 3.02226 13.7123 2.03769C12.7277 1.05312 11.3924 0.5 10 0.5C8.60761 0.5 7.27226 1.05312 6.28769 2.03769C5.30312 3.02226 4.75 4.35761 4.75 5.75V6.5H1.75C1.35218 6.5 0.970644 6.65804 0.68934 6.93934C0.408035 7.22064 0.25 7.60218 0.25 8V18.125C0.25 19.9531 1.79688 21.5 3.625 21.5H16.375C17.2593 21.5003 18.1086 21.1545 18.7413 20.5367C19.0596 20.233 19.3132 19.8679 19.4865 19.4634C19.6599 19.059 19.7495 18.6236 19.75 18.1836V8C19.7506 7.80321 19.7122 7.60826 19.637 7.42642C19.5617 7.24458 19.4512 7.07946 19.3117 6.94062ZM6.25 5.75C6.25 4.75544 6.64509 3.80161 7.34835 3.09835C8.05161 2.39509 9.00544 2 10 2C10.9946 2 11.9484 2.39509 12.6517 3.09835C13.3549 3.80161 13.75 4.75544 13.75 5.75V6.5H6.25V5.75ZM15.25 10.25C15.25 11.6424 14.6969 12.9777 13.7123 13.9623C12.7277 14.9469 11.3924 15.5 10 15.5C8.60761 15.5 7.27226 14.9469 6.28769 13.9623C5.30312 12.9777 4.75 11.6424 4.75 10.25V9.5C4.75 9.30109 4.82902 9.11032 4.96967 8.96967C5.11032 8.82902 5.30109 8.75 5.5 8.75C5.69891 8.75 5.88968 8.82902 6.03033 8.96967C6.17098 9.11032 6.25 9.30109 6.25 9.5V10.25C6.25 11.2446 6.64509 12.1984 7.34835 12.9017C8.05161 13.6049 9.00544 14 10 14C10.9946 14 11.9484 13.6049 12.6517 12.9017C13.3549 12.1984 13.75 11.2446 13.75 10.25V9.5C13.75 9.30109 13.829 9.11032 13.9697 8.96967C14.1103 8.82902 14.3011 8.75 14.5 8.75C14.6989 8.75 14.8897 8.82902 15.0303 8.96967C15.171 9.11032 15.25 9.30109 15.25 9.5V10.25Z"
              fill="white"
            />
          </svg>
          <p className=" text-[16px] text-white ml-[10px] ">View Bag</p>
        </button>
      </div>
    </div>
  );
}

export default Products;
