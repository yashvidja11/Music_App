import React from "react";
import img1 from "../assets/img/81fPKd-2AYL._AC_SL1500_.jpg";
// import {faFacebookF}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInstag } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
const DetailsPage = () => {
  const [activeTab, setActiveTab] = useState("description"); // Default active tab is 'description'
  const [data, setData] = useState("");
  const[totalData , setTotalData] = useState([])
  useEffect(() => {
    fetch("http://rutesh.pythonanywhere.com/products/4")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data.data);
        setData(data.data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        // Handle the error state or show an error message to the user
      });
  }, []);
  

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="container p-20">
      
      <div className=" flex flex-col sm:flex-row gap-10">
        <div className="flex flex-col-reverse sm:flex-row gap-3">
          <div className="flex flex-row sm:flex-col justify-center gap-3">
            {console.log(data )}
            {/* <img
              src={data?.image}
              alt=""
              className="w-24 opacity-50 hover:opacity-100 h-[127px]"
            />
            <img
              src={data?.data.image}
              alt=""
              className="w-24 opacity-50 hover:opacity-100 h-[127px]"
            />
            <img
              src={data?.data.image}
              alt=""
              className="w-24 opacity-50 hover:opacity-100 h-[127px]"
            />
            <img
              src={data?.data.image}
              alt=""
              className="w-24 opacity-50 hover:opacity-100 h-[127px]"
            /> */}
          </div>
          <div className="flex justify-center">
            {/* <img src={data?.data.image} alt="" className="w-full" /> */}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-3xl font-400">{data?.title}</p>
          <p>rating</p>
          <p className="text-2xl text-[#39f] font-400">${data?.price}</p>
          <p className="font-thin">{data?.description}</p>
          <button className="text-[#39f] hover:text-white hover:bg-blue-500 border border-blue-500 px-5 py-2 rounded-sm w-60">
            ADD TO CART
          </button>
          <hr className="w-full mt-5" />
          <div className="flex gap-2">
            <p className="font-400 text-[#ccc]">Category:</p>
            <p className="text-[#666]">{data?.description}</p>
          </div>
          <div>
          
          </div>
        </div>
      </div>
      
      
        <div className="mt-10">
          <div className="flex justify-center gap-5">
            <button
              className={`${
                activeTab === "description"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              } py-2 px-4 rounded-md`}
              onClick={() => handleTabClick("description")}
            >
              Description
            </button>
            <button
              className={`${
                activeTab === "shipping"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              } py-2 px-4 rounded-md`}
              onClick={() => handleTabClick("shipping")}
            >
              Shipping & Return
            </button>
            <button
              className={`${
                activeTab === "reviews"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              } py-2 px-4 rounded-md`}
              onClick={() => handleTabClick("reviews")}
            >
              Reviews
            </button>
          </div>
          <div className="mt-5 border border-gray-300 p-5">
            {activeTab === "description" && (
              <div className="p-5">
                <div className="text-[#777]">
                  <p>Product Information</p>
                  <p className="font-300">{data?.description}</p>
                  <ul>
                    <li className="font-300">
                      Nunc nec porttitor turpis. In eu risus enim. In vitae
                      mollis elit. Vivamus finibus vel mauris ut vehicula.
                      Nullam a magna porttitor, dictum risus nec, faucibus
                      sapien.
                    </li>
                    <li className="font-300">
                      Vivamus finibus vel mauris ut vehicula.
                    </li>
                    <li className="font-300">
                      Nullam a magna porttitor, dictum risus nec, faucibus
                      sapien.
                    </li>
                  </ul>
                  <p className="font-300">{data?.description}</p>
                </div>
              </div>
            )}
            {activeTab === "shipping" && (
              <div className="p-5 text-[#777]">
                We deliver to over 100 countries around the world. For full
                details of the delivery options we offer, please view
                ourDelivery informationWe hope you’ll love every purchase, but
                if you ever need to return an item you can do so within a month
                of receipt. For full details of how to make a return, please
                view ourReturns information
              </div>
            )}
            {activeTab === "reviews" && (
              <div className="review">
                <div className="row no-gutters">
                  <div className="col-auto">
                    <h4>
                      <a href="#">John Doe</a>
                    </h4>
                    <div className="ratings-container">
                      <div className="ratings">
                        <div
                          className="ratings-val"
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>
                    <span className="review-date">5 days ago</span>
                  </div>
                  <div className="col">
                    <h4>Very good</h4>
                    <div className="review-content">
                      <p className="text-[#777]">
                        Sed, molestias, tempore? Ex dolor esse iure hic veniam
                        laborum blanditiis laudantium iste amet. Cum non
                        voluptate eos enim, ab cumque nam, modi, quas iure illum
                        repellus, blanditiis perspiciatis beatae!
                      </p>
                    </div>
                    <div className="review-action">
                      <a href="#" style={{ textDecoration: "none" }}>
                        <i className="icon-thumbs-up" />
                        Helpful (0)
                      </a>
                      <a href="#" style={{ textDecoration: "none" }}>
                        <i className="icon-thumbs-down" />
                        Unhelpful (0)
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      <div>
        
      </div>
    </div>
  );
};

export default DetailsPage;
