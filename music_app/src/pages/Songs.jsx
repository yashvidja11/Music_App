import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataContext } from "../provider/provider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Songs = () => {
  const [songDetails, setsongDetails] = useState();
  const { isLoading, setIsLoading } = useContext(DataContext);
  const [data, setData] = useState();
  const navigate = useNavigate();
  let { songId } = useParams();
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
    slidesToShow: 5,
    slidesToScroll: 2,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
  useEffect(() => {
    setIsLoading(true);
    setTimeout(async () => {
      try {
        const response = await fetch(`https://saavn.me/albums?id=${songId}`);
        const responseData = await response.json();
        setsongDetails(responseData.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }, 1000);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      fetch(`https://saavn.me/playlists?id=${songId}`).then((res) => {
        res.json().then((data) => {
          setData(data.data);
          setIsLoading(false);
        });
      });
    }, 1000);
  }, []);

  return (
    <div className="container px-20">
      <h1 className="text-5xl py-5 font-extrabold">Songs</h1>
      {isLoading && (
        <div className="w-full  flex justify-center items-center mt-48">
          <div className="loader"></div>
        </div>
      )}
      {songDetails && songId === songDetails.id ? (
        <div className="mb-5">
          <h1 className="text-4xl font-bold text-white mb-8">Album Playlist</h1>
          <Slider {...settings}>
            {songDetails?.songs?.map((item) => (
              <div
                key={item.id}
                className="flex flex-col px-5 gap-10 text-center transition duration-300 transform hover:-translate-y-1 hover:shadow-lg mb-3"
              >
                <div className="flex justify-center h-[250px]">
                  <img
                    src={item?.image[2]?.link}
                    alt=""
                    className="object-cover w-full h-full"
                    style={{cursor:"pointer"}}
                    onClick={() => {
                      navigate(`/details/${item.id}`);
                    }}
                  />
                </div>
                <div className="bg-white p-3 shadow rounded-lg flex flex-col justify-between">
                  
                    <p className="mb-2 truncate">{item.primaryArtists}</p>
                
                 
                    <h2 className="text-lg font-bold mb-2 truncate" dangerouslySetInnerHTML={{__html: item.name}}/>
                     
                   
                 
                </div>
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <div>
          <Slider {...settings}>
            {data?.songs?.map((item) => (
                <div
                key={item.id}
                className="flex flex-col px-5 gap-10 text-center transition duration-300 transform hover:-translate-y-1 hover:shadow-lg mb-3"
              >
                <div className="flex justify-center h-[250px]">
                  <img
                    src={item?.image[2]?.link}
                    alt=""
                    className="object-cover w-full h-full"
                    style={{cursor:"pointer"}}
                    onClick={() => {
                      navigate(`/details/${item.id}`);
                    }}
                  />
                </div>
                <div className="bg-white p-3 shadow rounded-lg flex flex-col justify-between">
                  
                    <p className="mb-2 truncate">{item.primaryArtists}</p>
                
                 
                    <h2 className="text-lg font-bold mb-2 truncate" dangerouslySetInnerHTML={{__html: item.name}}/>
                      
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default Songs;
