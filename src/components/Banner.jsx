import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Banner = () => {
  return (
    <div className="relative">
      {/* <img
        src={assets.hero_banner_3}
        alt=""
        className="hidden md:block w-full h-140  mt-[-25px]"
      />
      <img
        src={assets.hero_banner_3}
        alt=""
        className=" w-full h-40 sm:h-56 md:hidden "
      /> */}
      <div className="z-10 inset-0 flex flex-col items-center md:items-center justify-end md:justify-center  md:pb-0 md:pl-18 lg:pl-20">
        <h1 className="bg-black p-5 text-xl md:text-6xl md:mb-30 font-bold text-center md:text-left mt-20 text-white  lg:leading-15">
          the Real Thinks Looks Crazy ,For Sure!
        </h1>
        <div className="flex items-center   md:mt-6 font-medium gap-6 ">
          <Link
            to={"/products"}
            className="text-sm md:text-3xl hidden md:flex group items-center gap-2 px-7 rounded text-white  py-3 bg-black"
          >
            Shop Now
            <img
              src={assets.white_arrow_icon}
              alt="arrow"
              className="md:hidden transition group-focus:translate-x-1"
            />
          </Link>
          <Link
            to={"/products"}
            className="text-sm md:text-3xl hidden md:flex group items-center gap-2 px-7 rounded text-white  py-3 bg-black"
          >
            Explore Deals
            <img
              src={assets.white_arrow_icon}
              alt="arrow"
              className="md:hidden transition group-focus:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Banner;
