'use client'
import { useState, useEffect } from "react";
import { FcSearch } from "react-icons/fc";
import wholeList from "../../public/constants";
import Card from "./components/Card";

export interface DataItem {
  id: number;
  name: string;
  address: string;
  pincode: string;
  phone: number;
  fax: string;
  imageUrl?: string;
  city?: string;
}

export default function Home() {
  const itemsPerPage = 4; // Number of items per page
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [list, setList] = useState<DataItem[]>([]); // Specify the type for list
  const [searchVal, setSearchVal] = useState<string>("");
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

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

  useEffect(() => {
    const sortedList = (wholeList as DataItem[]).slice().sort((a, b) => {
      const pincodeA = a.pincode ? parseInt(a.pincode, 10) : Infinity;
      const pincodeB = b.pincode ? parseInt(b.pincode, 10) : Infinity;
      return pincodeA - pincodeB;
    });
    setList(sortedList);
  }, []);

  function handleSearchClick() {
    if (searchVal === "") {
      setList(wholeList as DataItem[]);
      return;
    }
    const filterBySearch = (wholeList as DataItem[]).filter((item) =>
      item.pincode.toLowerCase().includes(searchVal.toLowerCase())
    );
    setList(filterBySearch);
    setCurrentPage(1); // Reset to first page on search
  }

  function resetList() {
    const sortedList = (wholeList as DataItem[]).slice().sort((a, b) => {
      const pincodeA = a.pincode ? parseInt(a.pincode, 10) : Infinity;
      const pincodeB = b.pincode ? parseInt(b.pincode, 10) : Infinity;
      return pincodeA - pincodeB;
    });
    setList(sortedList);
    setCurrentPage(1); // Reset to first page on reset
  }

  // Calculate paginated data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedList = list.slice(startIndex, endIndex);

  // Calculate total number of pages
  const totalPages = Math.ceil(list.length / itemsPerPage);

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
        <div className="text-center mb-2 p-8 rounded-lg shadow-lg border bg-green-500 bg-opacity-60 border-green-400">
          <h1 className="text-4xl font-bold text-white mb-4">Welcome to Project RIGHT Health Tool</h1>
          <p className="text-lg text-white max-w-xl mx-auto">
            The <strong>Project RIGHT</strong> Health Tool is a user-friendly search engine that helps you find the nearest government hospitals and clinics by simply entering your postal code. This tool aims to improve access to healthcare services, making it easier for everyone to locate essential medical facilities in their area.
          </p>
        </div>
        <div className="text-4xl font-bold text-white rounded-lg p-3 shadow-lg border bg-green-500 bg-opacity-60 border-green-400">All India Database</div>
        <div className="w-full sm:w-3/4 md:w-1/2 mt-5 md:mt-20 flex items-center gap-3">
          <input
            className="border-4 border-green-500 rounded-full p-3 font-bold text-black size-12 flex-grow w-full"
            onChange={(e) => setSearchVal(e.target.value)}
            placeholder="Click on search after filling in Pin-Code"
          />
          <FcSearch onClick={handleSearchClick} className="h-14 w-16 cursor-pointer mt-1" />
          <div onClick={resetList} className="bg-green-500 hover:bg-blue-500 bg-opacity-60 text-white p-2">
            Reset
          </div>
        </div>

        <div className="overflow-auto h-96 w-full sm:w-3/4 md:w-full mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center justify-between">
            {paginatedList.map((item) => (
              <div
                key={item.id}
                className="bg-white bg-opacity-80 p-4 rounded shadow-lg"
              >
                <Card
                  name={item.name}
                  address={item.address}
                  pincode={item.pincode}
                  phone={item.phone}
                  imageUrl={item.imageUrl}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between w-full sm:w-3/4 md:w-1/2 mt-4">
          <button
            className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-white">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
