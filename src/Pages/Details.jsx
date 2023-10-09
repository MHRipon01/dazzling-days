import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const services = useLoaderData();

  const [service, setService] = useState({});

  console.log(services);

  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    fetch("/service.json")
      .then((response) => response.json())
      .then((data) => {
        const singleService = data.find((item) => item.id == id);
        setService(singleService);
      });
  }, [id]);

  return (
    <div className="p-3">
      
      <div className="card p-5  bg-gradient-to-r from-indigo-200 via-blue-300 to-pink-300 border card-compact mx-auto mb-28  bg-base-100 shadow-xl">
        <figure>
          <img className="min-w-full p-4" src={service.image} alt="Shoes" />
        </figure>
        <div className="card-body items-center ">
          <h2 className="card-title text-3xl font-semibold">{service.name}</h2>
          <p className="text-xl font-medium">{service.description}</p>

          <ol className="text-xl ml-5" style={{ listStyleType: "decimal" }}>
            {service?.detailed_description?.map((detail, idx) => (
              <li key={idx} >
                {detail}
              </li>
            ))}
          </ol>

          <p className="text-xl font-semibold m-7 ">Price: {service.price}</p>
          <div className="card-actions justify-end">
           <Link to='/contact'> <button className="btn  bg-fuchsia-300 border  font-bold ">Start Celebrating</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
