import rose from "../assets/rose.png";

import rose3 from "../assets/rose-2.png";
import rose4 from "../assets/flower4.png";

import 'aos/dist/aos.css';
import { useEffect } from "react";
import Aos from "aos";




const Awards = () => {

useEffect(() => {
  Aos.init({duration:2500});
}, [])



  return (
  <div>
      <div className="w-full items-center justify-center flex ">
      <div className="my-28 max-w-[1150px] -2 ">
        <div className="text-[#CE8566]">
          <h3 className="text-xl text-[#CE8566] py-3">AWARDS AND REVIEWS</h3>
          <h2 className="font-Cormorant text-4xl font-medium">
            ONE OF THE TOP TEN MOST BEAUTIFUL <br /> WEDDING VENUES IN THE USA
          </h2>
        </div>

        <div className="  grid grid-cols-2 md:flex  lg:mx-auto">
          <div className="flex px-7">
            <img  data-aos="zoom-in-right"  className="w-[6.5em] -rotate-45" src={rose} alt="" />
            <div className="my-auto">
              <h5 className="font-Cormorant text-4xl font-semibold">156</h5>
              <h3 className="font-Crimson text-2xl">Weddings Per Year</h3>
            </div>
          </div>
          <div className="flex px-7">
            <img data-aos="fade-up-left" className="w-[6.5em] rotate-45" src={rose3} alt="" />
            <div className="my-auto">
              <h5 className="font-Cormorant text-4xl font-semibold">8</h5>
              <h3 className="font-Crimson text-2xl">Years of Celebration</h3>
            </div>
          </div>


          {/* this one  */}
          <div className="flex px-7">
            <img data-aos="fade-up-right" className="w-[6.5em] -rotate-45" src={rose3} alt="" />
            <div className="my-auto">
              <h5 className="font-Cormorant text-4xl font-semibold">1562</h5>
              <h3 className="font-Crimson text-2xl">Flower Bouquets</h3>
            </div>
          </div>
          <div className="flex px-7">
            <img data-aos="zoom-in-left" className="w-[6.5em] rotate-45" src={rose4} alt="" />
            <div className="my-auto">
              <h5 className="font-Cormorant text-4xl font-semibold">230</h5>
              <h3 className="font-Crimson text-2xl">Sunny Days per Year</h3>
            </div>
          </div>
        </div>
      </div>
    </div>




     {/* Image Card */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:flex justify-center">

<div className="w-96 h-96 m-3 text-primary-content image-full" style={{ backgroundImage: `url('https://i.ibb.co/KV434J8/bg1.jpg')`, backgroundSize: '100% 100%' }}>
  <div className="text-[#8C94B6]  h-full  flex items-center justify-center text-center ">
   <div>
   <h2 className="text-2xl font-bold font-Cormorant  mb-5">Decor</h2>
    <p className="font-Crimson text-xl px-3">Immerse in the magic of our Decor Service. Witness the transformation of ordinary spaces into extraordinary visual symphonies.</p>
    <button className="mt-28 text-gray-500 font-semibold ">VIEW MORE</button>
   </div>
  </div>
</div>



<div className="w-96 h-96 m-3 text-primary-content image-full" style={{ backgroundImage: `url('https://i.ibb.co/kK1Dkhf/bg2.jpg')`, backgroundSize: '100% 100%' }}>
  <div className="text-white  h-full  flex items-center justify-center text-center  ">
   <div>
   <h2 className="text-xl font-bold font-Cormorant mb-5">Catering</h2>
    <p className="font-Crimson text-xl px-3">Savor the flavors with our Catering Service. Delight in meticulously crafted dishes that turn any event into a feast.</p>
    <button className="mt-28 text-gray-200 font-semibold ">VIEW MORE</button>
   </div>
  </div>
</div>



<div className="w-96 h-96 m-3 text-primary-content image-full" style={{ backgroundImage: `url('https://i.ibb.co/sWrDyvy/bg3.jpg')`, backgroundSize: '100% 100%' }}>
  <div className="text-[#8C94B6]  h-full  flex items-center justify-center text-center ">
   <div>
   <h2 className="text-2xl font-bold font-Cormorant mb-5">Music</h2>
    <p className="font-Crimson text-xl px-3">Experience the rhythm of our Music Collection. Let melody touch your heart and harmony unite the world.</p>
    <button className="mt-28 text-gray-500 font-semibold ">VIEW MORE</button>
   </div>
  </div>
</div>







   
   
</div>

  </div>
   
  );
};

export default Awards;
