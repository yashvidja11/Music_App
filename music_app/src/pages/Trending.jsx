import React, { useContext } from "react";
import { DataContext } from "../provider/provider";
import Button from "../component/Button";
import { useNavigate } from "react-router-dom";
import Card from "../component/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const Trending = () => {
  const { data, isLoading } = useContext(DataContext);
  const navigate = useNavigate();
  const PrevArrow = ({ onClick }) => (
    <div
      className="arrow-prev absolute z-50 top-[150px] left-[-50px] transform -translate-y-1/2 cursor-pointer text-white bg-gray-700 rounded-full w-10 h-10 flex justify-center items-center"
      onClick={onClick}
    >
      <FaArrowLeft className="text-xl" />
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div
      className="arrow-next absolute top-[150px] right-[-50px] transform -translate-y-1/2 cursor-pointer text-white bg-gray-700 rounded-full w-10 h-10 flex justify-center items-center"
      onClick={onClick}
    >
      <FaArrowRight className="text-xl" />
    </div>
  );
  const settings = {
    // dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  return (
    <div className="container px-20">
      <h1 className="text-5xl py-10 font-extrabold">Trending</h1>
      {isLoading && (
        <div className="w-full  flex justify-center items-center mt-48">
          <div className="loader"></div>
        </div>
      )}
      <Slider {...settings}>
        {data?.trending?.albums?.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 shadow rounded-lg flex flex-col items-center  transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            <Card title={`${item.name}`} imgurl={`${item?.image[2].link}`} />
            <div className="flex items-center mt-4">
              <Button
                title="Albums Song"
                buttonclass="bg-blue-500 text-white py-2 px-4 rounded-md mr-2"
                click={() => {
                  navigate(`/song/${item.id}`);
                }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Trending;
