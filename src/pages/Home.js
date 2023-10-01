import React from "react";
import { home14Banner, homeIphone14, homeM2, homeIpad, whiteLogo, homeIwatch, homeStudio, homeWatchDeal, blackLogo } from "../assets/images";
import FullPageBanner from "../componants/home/FullPageBanner";
import HalfPlageBanner from "../componants/home/HalfPlageBanner";
import WatchHalfPageBanner from "../componants/home/WatchHalfPageBanner";
import WhiteBGWatchBanner from "../componants/home/WhiteBGWatchBanner";

function Home() {
  return (
    <div className=" flex flex-col w-[100%] overflow-x-hidden ">
      {/* iPhone 14 Pro Banner */}
      <div className=" w-[100%] bg-black flex flex-col items-center justify-center">
        <div className=" flex-col justify-center items-center ">
          <h1 className=" font-semibold text-[60px] text-white mt-[50px] ">
            iPhone 14 Pro
          </h1>
          <h3 className=" text-white text-[25px] flex w-full justify-center ">
            Pro. Beyond
          </h3>
        </div>
        <img
          src={home14Banner}
          alt=" iphone 14 banner "
          className=" max-w-[800px] object-contain "
        />
      </div>
      {/* iphone 14 advert */}
      < FullPageBanner title="iPhone 14" description="Wonderfull." image={homeIphone14} link="product/101" />

      {/* macbook air 15 advert */}
      < FullPageBanner title=" MacBook Air 15" description="Impressively big. Impossibly thin." image={homeM2} link="product/112" />


      {/* iPad and Watch */}
      <div className=" w-full flex justify-evenly items-center mt-[10px] h-[500px] ">
        < HalfPlageBanner title="iPad" description="Lovable. Drawable. Magical" image={homeIpad} link="products/iPad" />
        <WatchHalfPageBanner image={homeIwatch} logo={whiteLogo} link="product/122" />
      </div>

      {/* Studio and iWatch */}
      <div className=" w-full flex justify-evenly items-center mt-[10px] h-[500px] ">
        < HalfPlageBanner title="Mac Studio" description="Supercharged by M2 Max and M2 ultra" image={homeStudio} link="product/113" />
        <WhiteBGWatchBanner image={homeWatchDeal} logo={blackLogo} link="products/Watch" />
      </div>
    </div>
  );
}

export default Home;
