import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, description, imageUrl, price, rating, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md p-6 mb-4 w-full max-w-md cursor-pointer"
      onClick={onClick}
    >
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-gray-800 font-semibold mb-1">Price: ${price}</p>
      <p className="text-yellow-500">Rating: {rating} ⭐</p>
    </div>
  );
};

export default Card;