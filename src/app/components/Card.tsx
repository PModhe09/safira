import React from 'react';
import Image from 'next/image';

interface CardProps {
  name?: string;
  address?: string;
  pincode?: string;
  phone?: number | string;
  imageUrl?: string;
}

const Card: React.FC<CardProps> = ({ name = "Unknown Hospital", address = "Unknown Address", pincode, phone, imageUrl }) => {
  const getDirectionsUrl = (name: string, address: string) => {
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(name + address)}`;
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border rounded-2xl shadow bg-green-500 bg-opacity-60">
      <div className="flex-1">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="mb-1">{address}</p>
        <p className="mb-1">Pincode: {pincode}</p>
        <p className="mb-1">Phone: {phone}</p>
      </div>
      <div className="flex flex-col items-center mt-4 sm:mt-0 sm:ml-4">
        <div className="w-full sm:w-40 h-auto relative">
          <img src={imageUrl} alt={name} className="object-cover rounded w-full h-auto" />
        </div>
        <button onClick={() => window.open(getDirectionsUrl(name, address), '_blank')} className="bg-blue-500 text-white px-4 py-2 rounded mt-2 sm:mt-4 w-full sm:w-auto">Get Directions</button>
      </div>
    </div>
  );
};

export default Card;
