import { GiButterflyFlower ,GiRose } from "react-icons/gi";

const Banner = () => {
    return (
        <div className="w-full">
          <div className="w-full text-6xl text-[#C0C0C0] flex justify-center p-3  ">
          <GiButterflyFlower ></GiButterflyFlower>
          <GiRose></GiRose>
          </div>
          <div className="text-[#A09B91] text-center">
                <h2 className="text-7xl ">TIMELESS MOMENTS</h2>
                <p className="font-serif text-xl py-4 ">Let us help you create a day that is truly unforgettable</p>
          </div>
            <img className="w-full lg:w-[90vw]  lg:ml-10 mt-10" src="https://i.ibb.co/QHM3wHg/slider.jpg" alt="" />
        </div>
    );
};

export default Banner;