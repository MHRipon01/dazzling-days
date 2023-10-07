import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';


const Venue = () => {

  useEffect(() => {
    AOS.init({duration:2000});
  }, [])



    return (
        <div>
            <div >
                <h3 className="text-6xl font-bold text-[#FFD700] text-center mt-16">Our Venues</h3>
            </div>
            <footer  className="flex flex-col items-center text-center text-white dark:bg-neutral-600 dark:text-neutral-200">
        <div className="container p-6" >
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-3" >
            <div className="mb-6 lg:mb-0">
              <img data-AOS="zoom-out-right"
                src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
                className="w-full rounded-md shadow-lg"
              />
            </div>
            <div className="mb-6 lg:mb-0">
              <img data-aos="zoom-in-up"
                src="https://tecdn.b-cdn.net/img/new/fluid/city/111.webp"
                className="w-full rounded-md shadow-lg"
              />
            </div>
            <div className="mb-6 lg:mb-0">
              <img data-aos="flip-right"
                src="https://tecdn.b-cdn.net/img/new/fluid/city/112.webp"
                className="w-full rounded-md shadow-lg"
              />
            </div>
            <div className="mb-6 lg:mb-0">
              <img data-aos="zoom-in"
                src="https://tecdn.b-cdn.net/img/new/fluid/city/114.webp"
                className="w-full rounded-md shadow-lg"
              />
            </div>
            <div className="mb-6 lg:mb-0">
              <img  data-aos="flip-up"
                src="https://tecdn.b-cdn.net/img/new/fluid/city/115.webp"
                className="w-full rounded-md shadow-lg"
              />
            </div>
            <div className="mb-6 lg:mb-0">
              <img data-aos="flip-down"
                src="https://tecdn.b-cdn.net/img/new/fluid/city/116.webp"
                className="w-full rounded-md shadow-lg"
              />
            </div>
          </div>
        </div>

       
      </footer>
        </div>
    );
};

export default Venue;