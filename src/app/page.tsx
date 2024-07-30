'use client'
import { useState, useEffect } from "react";
import { FcSearch } from "react-icons/fc";
import wholeList from "../../public/constants";
import Card from "./components/Card";

export default function Home() {
  const [list, setList] = useState(wholeList);
  const [searchVal, setSearchVal] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/swiper_imgs/img1.jpg",
    "/swiper_imgs/img2.png",
    "/swiper_imgs/img3.png",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [images.length]);

  function handleSearchClick() {
    if (searchVal === "") {
      setList(wholeList);
      return;
    }
    const filterBySearch = wholeList.filter((item) => {
      if (item.pincode.toLowerCase().includes(searchVal.toLowerCase())) {
        return item;
      }
    });
    setList(filterBySearch);
  }

  function resetList() {
    setList(wholeList);
  }

  return (
    <div>
      <style jsx global>{`
        body {
          background-image: url(${images[currentImageIndex]});
          background-size: cover;
          background-position: center;
          transition: background-image 1s;
        }
        .overlay {
          background-color: rgba(0, 0, 0, 0.6); /* Dark overlay */
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }
        .content {
          position: relative;
          z-index: 1;
        }
        .black-and-white {
          filter: grayscale(100%);
        }
      `}</style>
      <div className="overlay black-and-white"></div>
      <div className="content flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
        <div className="w-full sm:w-3/4 md:w-1/2 mt-10 md:mt-20 flex items-center gap-3">
          <input
            className="border-4 border-green-500 rounded-full p-3 text-black size-12 flex-grow w-full"
            onChange={(e) => setSearchVal(e.target.value)}
            placeholder="Click on search after filling in Pin-Code"
          />
          <FcSearch onClick={handleSearchClick} className="h-14 w-16 cursor-pointer" />
          <div onClick={resetList} className="bg-green-500 hover:bg-blue-400 text-white p-2">Reset</div>
        </div>
        <div className="overflow-auto h-96 w-full sm:w-3/4 md:w-full mt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center justify-between">
            {list.map((item) => (
              <div
                key={item.id}
                className="bg-white bg-opacity-80 p-4 rounded shadow-lg"
              >
                <Card
                  name={item.name}
                  address={item.address}
                  pincode={item.pincode}
                  phone={item.phone}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
