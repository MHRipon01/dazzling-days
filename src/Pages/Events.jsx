import { Link } from "react-router-dom";

const Events = () => {
 

  return (
    <div>
      <div className="w-full border-2 ">
        <h3
          className="bg-gradient-to-r  from-pink-500 via-blue-400
     to-indigo-300 bg-clip-text text-transparent flex font-Crimson w-full justify-center text-4xl font-bold mt-28 mb-16 items-center text-center"
        >
          Event&#39;s we are working on:
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* card 1 */}
        <div className="relative my-10 flex w-full max-w-[48rem] flex-row rounded-xl  bg-clip-border text-gray-700 shadow-md bg-gradient-to-l from-indigo-200 via-blue-300 to-pink-200 ">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none  bg-clip-border text-gray-700">
            <img
              src="https://i.ibb.co/8x5nNCZ/birthdayparty.jpg"
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6">
            <h4
              id="card-title"
              className="mb-2 block  text-3xl font-Cormorant font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
            >
              Birthday of a 7 year old boy.
            </h4>
            <h3 className="font-Crimson py-2 text-3xl">
              Date:8th october - 10th October,2023
            </h3>
            <p className="font-Crimson text-2xl py-1">
              Location: 25 Elephant Road,Dhaka
            </p>
            <p className="font-Crimson text-2xl py-1">
              Gatherings of 25 people.
            </p>
            <p
              className="font-Crimson text-2xl py-1
    "
            >
              Approximate budget: $40
            </p>
          </div>
        </div>

        {/* card 2 */}

        <div className="relative my-10 flex w-full max-w-[48rem] flex-row rounded-xl  bg-clip-border text-gray-700 shadow-md bg-gradient-to-l from-indigo-200 via-blue-300 to-pink-200 ">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none  bg-clip-border text-gray-700">
            <img
              src="https://i.ibb.co/tQsprLM/image.png"
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6">
            <h4
              id="card-title"
              className="mb-2 block  text-3xl font-Cormorant font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
            >
              Marriage of a young couple.
            </h4>
            <h3 className="font-Crimson py-2 text-3xl">
              Date:12th october - 25th October,2023
            </h3>
            <p className="font-Crimson text-2xl py-1">
              Location: Kandirpar, Cumilla
            </p>
            <p className="font-Crimson text-2xl py-1">
              Gatherings of 680 people.
            </p>
            <p
              className="font-Crimson text-2xl py-1
    "
            >
              Approximate budget: $900
            </p>
          </div>
        </div>

        {/* card 3 */}
        <div className="relative  flex w-full max-w-[48rem] flex-row rounded-xl  bg-clip-border text-gray-700 shadow-md bg-gradient-to-r from-indigo-200 via-blue-300 to-pink-100 ">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none  bg-clip-border text-gray-700">
            <img
              src="https://i.ibb.co/1vjdCQz/marriageanniver.jpg"
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6">
            <h4
              id="card-title"
              className="mb-2 block  text-3xl font-Cormorant font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
            >
              4th Marriage Anniversary of a couple.
            </h4>
            <h3 className="font-Crimson py-2 text-3xl">
              Date:28th october - 30th October,2023
            </h3>
            <p className="font-Crimson text-2xl py-1">
              Location: Nawabganj,Dhaka
            </p>
            <p className="font-Crimson text-2xl py-1">
              Gatherings of 50 people.
            </p>
            <p
              className="font-Crimson text-2xl py-1
    "
            >Approximate budget: $100</p>
          </div>
        </div>

        {/* card 4 */}
        <div className="relative  flex w-full max-w-[48rem] flex-row rounded-xl  bg-clip-border text-gray-700 shadow-md bg-gradient-to-r from-indigo-200 via-blue-300 to-pink-200 ">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none  bg-clip-border text-gray-700">
            <img
              src="https://i.ibb.co/c2xk91V/engagement.jpg"
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6">
            <h4
              id="card-title"
              className="mb-2 block  text-3xl font-Cormorant font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
            >
              Engagement Ceremony of a cute couple.
            </h4>
            <h3 className="font-Crimson py-2 text-3xl">
              Date:2nd November - 6th November,2023
            </h3>
            <p className="font-Crimson text-2xl py-1">
              Location: Muhammadpur , Dhaka
            </p>
            <p className="font-Crimson text-2xl py-1">
             Gatherings of 250 people.  
            </p>
            <p
              className="font-Crimson text-2xl py-1
    ">Approximate budget: $400</p>
          </div>
        </div>

        {/* card 5 */}
        <div className="relative my-10 flex w-full max-w-[48rem] flex-row rounded-xl  bg-clip-border text-gray-700 shadow-md bg-gradient-to-r from-indigo-200 via-blue-300 to-pink-200 ">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none  bg-clip-border text-gray-700">
            <img
              src="https://i.ibb.co/LrZ79Tw/retirement.jpg"
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6">
            <h4
              id="card-title"
              className="mb-2 block  text-3xl font-Cormorant font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
            >
              Retirement party of an Army person.
            </h4>
            <h3 className="font-Crimson py-2 text-3xl">
              Date:8th November - 13th November,2023
            </h3>
            <p className="font-Crimson text-2xl py-1">
              Location: 25 Elephant Road,Dhaka
            </p>
            <p className="font-Crimson text-2xl py-1">
              Gatherings of 35 people.
            </p>
            <p
              className="font-Crimson text-2xl py-1
    "
            >
              Approximate budget: $90
            </p>
          </div>
        </div>

        {/* card 6 */}
        <div className="relative my-10 flex w-full max-w-[48rem] flex-row rounded-xl  bg-clip-border text-gray-700 shadow-md bg-gradient-to-r from-indigo-200 via-blue-300 to-pink-200 ">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none  bg-clip-border text-gray-700">
            <img
              src="https://i.ibb.co/VjFR797/army.jpg"
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6">
            <h4
              id="card-title"
              className="mb-2 block  text-3xl font-Cormorant font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
            >
              Homecoming party of an Army.
            </h4>
            <h3 className="font-Crimson py-2 text-3xl">
              Date:15th November - 25th November,2023
            </h3>
            <p className="font-Crimson text-2xl py-1">
              Location: Mirpur-12,Dhaka 
            </p>
            <p className="font-Crimson text-2xl py-1">
              Gatherings of 25 people.
            </p>
            <p
              className="font-Crimson text-2xl py-1
    "
            >
              Approximate budget: $90
            </p>
          </div>
        </div>
      </div>
      <Link to='/contact'>
      <div className="w-full pb-16 flex justify-center items-center px-2 py-3 ">
      <button className=" px-5 py-5 rounded-xl  bg-purple-400 hover:bg-green-500  text-xl font-semibold font-Crimson text-gray-100 hover:text-white">Book Reservation </button>
      </div>
      </Link>
    </div>
  );
};

export default Events;
