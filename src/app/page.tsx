'use client'
import Image from "next/image";
import { useState } from "react";
import { FcSearch } from "react-icons/fc";
import wholeList from "../../public/constants";
import Card from "./components/Card";
import {Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function Home() {
  const [list, setList] = useState(wholeList);
  const [searchVal, setSearchVal] = useState("");

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

  function resetList(){
    setList(wholeList);
  }

  const images = [
    "/path/to/image1.jpg",
    "/path/to/image2.jpg",
    "/path/to/image3.jpg",
    "/path/to/image4.jpg",
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="w-full h-64"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image src={src} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center gap-3 w-full sm:w-3/4 md:w-1/2 mt-10 md:mt-20 ">
        <input
          className="border-4 border-green-500 rounded-full p-3 text-black size-12 flex-grow w-full"
          onChange={(e) => setSearchVal(e.target.value)}
          placeholder="Click on search after filling in Pin-Code"
        />
        <FcSearch onClick={handleSearchClick} className="h-14 w-16 cursor-pointer" />
        <div onClick={resetList} className="bg-green-500 text-white p-2">Reset</div>
      </div>
      <div className="overflow-auto h-96 w-full sm:w-3/4 md:w-full mt-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center justify-between">
          {list.map((item) => (
            <Card
              key={item.id}
              name={item.name}
              address={item.address}
              pincode={item.pincode}
              phone={item.phone}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
