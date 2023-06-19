import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../provider/provider";

const Data = () => {
  let { songsId } = useParams();
  const [data, setData] = useState([]);
  const { isLoading, setIsLoading } = useContext(DataContext);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      fetch(`https://saavn.me/songs?id=${songsId}`).then((res) => {
        res
          .json()
          .then((data) => {
            setData(data.data);
            setIsLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
      });
    }, 2000);
  }, []);

  return (
    <div className="bg-gradient-to-b from-indigo-700 to-purple-700 min-h-screen py-8">
      {isLoading && (
        <div className="w-full  flex justify-center items-center mt-48">
          <div className="loader"></div>
        </div>
      )}
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center">
          {data?.map((item) => (
            <div key={item.id} className="p-4 bg-white rounded-lg shadow-lg">
              <div>
                <img
                  src={item.image[2].link}
                  alt=""
                  className="w-full h-auto mb-4 rounded-lg"
                />
                <div className=" flex flex-col justify-center items-center">
                  <h1 className="text-zinc-900 text-lg font-bold" dangerouslySetInnerHTML={{__html: item.name}}/>
                  <p className=" text-sm">{item.primaryArtists}</p>
                </div>
              </div>
              <audio controls className="w-full mt-4">
                <source src={item?.downloadUrl[4]?.link} type="audio/mp4" />
                Your browser does not support the audio element.
              </audio>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Data;
