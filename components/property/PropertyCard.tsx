import Link from "next/link";
import React from "react";
import { CardProps } from "@/interfaces";

const PropertyCard: React.FC<CardProps> = ({
  id,
  title,
  description,
  imageUrl,
  price,
  rating,
  onClick,
}) => {
  const cardContent = (
    <div
      className="bg-white rounded-lg shadow-md p-6 mb-4 w-full max-w-md cursor-pointer"
      onClick={onClick}
    >
      <img
        src={imageUrl ?? "/placeholder.png"}
        alt={title ?? "Property image"}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-bold mb-2">{title ?? "Untitled"}</h2>
      <p className="text-gray-600 mb-2">{description ?? "No description."}</p>
      <p className="text-gray-800 font-semibold mb-1">Price: ${price ?? "—"}</p>
      <p className="text-yellow-500">Rating: {rating ?? "N/A"} ⭐</p>
    </div>
  );

  // If a custom onClick handler is provided, keep using it (no Link).
  if (onClick) return cardContent;

  // Otherwise wrap the card in a Next Link to the property detail page.
  return (
    <Link href={`/property/${id}`}>
      <a aria-label={`View ${title ?? "property"}`} className="block">
        {cardContent}
      </a>
    </Link>
  );
};

export default PropertyCard;