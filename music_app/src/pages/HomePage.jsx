import React, { useState } from "react";
import Button from "../component/Button";
import { useNavigate } from "react-router-dom";
import Image from "../component/Image";

// }

const HomePage = () => {
  const [searchQuary, setSearchQuery] = useState();

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setSearchQuery(e.target.value);
  };

  const searchhandler = () => {
    navigate(`searchsong/${searchQuary}`);
  };

  return (
    <section style={{ backgroundColor: "#efefef", height: "100vh" }}>
      <div className="flex justify-between items-center bg-gradient-to-r from-yellow-400 to-pink-500 py-8 px-10">
        <h1 className="text-5xl font-extrabold text-white">Music App</h1>
        <div className="flex items-center">
          <input
            type="search"
            value={searchQuary}
            placeholder="Enter a song name"
            className="px-4 py-2 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={changeHandler}
          />
          <Button
            title="Search"
            buttonclass="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 ml-4 rounded-md"
            click={searchhandler}
          />
        </div>
      </div>

      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 px-5 pt-10">
          <div
            className="flex flex-col items-center gap-5"
            onClick={() => {
              navigate("/albums");
            }}
          >
            <Image imgurl="https://c.saavncdn.com/972/Adipurush-Hindi-2023-20230607184755-500x500.jpg" />
            <Button
              title="Albums"
              buttonclass="bg-indigo-600 text-white py-2 px-10 rounded-md mr-2 text-2xl"
            />
          </div>
          <div
            className="flex flex-col items-center gap-5"
            onClick={() => {
              navigate("/playlist");
            }}
          >
            <Image imgurl="https://c.saavncdn.com/editorial/MostStreamedLoveSongsEnglish_20230612082617.jpg" />
            <Button
              title="Playlists"
              buttonclass="bg-purple-600 text-white py-2 px-10 rounded-md mr-2 text-2xl"
            />
          </div>
          <div
            className="flex flex-col items-center gap-5"
            onClick={() => {
              navigate("/chart");
            }}
          >
            <Image imgurl="https://c.saavncdn.com/editorial/charts_TrendingToday_149406_20220319164713.jpg" />
            <Button
              title="Charts"
              buttonclass="bg-pink-600 text-white py-2 px-10 rounded-md mr-2 text-2xl"
            />
          </div>
          <div
            className="flex flex-col items-center gap-5"
            onClick={() => {
              navigate("/trending");
            }}
          >
            <Image imgurl="https://c.saavncdn.com/716/Radhe-Radhe-Hindi-2020-20230222194734-500x500.jpg?bch=468557" />
            <Button
              title="Trending"
              buttonclass="bg-red-600 text-white py-2 px-10 rounded-md mr-2 text-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
