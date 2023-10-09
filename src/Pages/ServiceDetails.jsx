import 'aos/dist/aos.css';
  import AOS from 'aos';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
  


// eslint-disable-next-line react/prop-types
const ServiceDetails = ({ services }) => {
  // eslint-disable-next-line react/prop-types
  const { id, name, image, description, price } = services;

  // console.log(id);

  useEffect(() => {
    AOS.init();
  }, [])




  return (
    <div className=' flex justify-center '>
     
     <div  className="card    w-5/6 from-white to-white  bg-gradient-to-tl hover:from-[#d6b48c]  hover:to-[#f0e0ce] transition-all duration-1000    shadow-2xl mt-11 " data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     style={{ transition:'2s'}}>
        <figure className="  p-3" >
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 id='' className="card-title font-Crimson text-3xl font-bold">{name}</h2>
          <p className='text-xl  font-medium'>{description}</p>
        <p className='text-xl  font-medium'>Price: {price}</p>
          <div className="card-actions">
           <Link to={`/details/${id}`}> <button className="btn  hover:bg-[#f0e0ce]">Fix a date</button></Link>
          </div>
        </div>
      </div>
     </div>
   
  );
};

export default ServiceDetails;
