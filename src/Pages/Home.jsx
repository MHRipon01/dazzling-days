import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import ServiceDetails from "./ServiceDetails";
import Footer from "../components/Footer";
import Venue from "../components/Venue";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";
import Awards from "../components/Awards";

const Home = () => {
  const services = useLoaderData();
  console.log(services);

  useEffect(() => {
    AOS.init();
  }, [])



  return (
    <div className="overflow-x-hidden">
      
      <div className=" image-full w-fit">
        <Banner></Banner>
      </div>

      <div className="text-center ">
        <Awards></Awards>
      </div>


      <div className="lg:grid grid-cols-2">
        {services.map((service) => (
          <ServiceDetails key={service.id} services={service}></ServiceDetails>
        ))}
      </div>
      
      <div  >
            <Venue></Venue>
      </div>

      <div className="pt-16 ">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
