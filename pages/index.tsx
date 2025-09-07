import axios from "axios";
import { useEffect, useState } from "react";
import PropertyCard from "@/components/property/PropertyCard"; 
import { CardProps } from "@/interfaces"; 

export default function Home() {
  const [properties, setProperties] = useState<CardProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/properties/`);
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {properties.map((property) => (
        <PropertyCard key={property.id} {...property} />
      ))}
    </div>
  );
}
