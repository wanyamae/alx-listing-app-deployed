import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
import PropertyDetail from "@/components/property/PropertyDetail";
import type { Property } from "@/interfaces";

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    const propertyId = Array.isArray(id) ? id[0] : id;

    const fetchProperty = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`/api/properties/${propertyId}`);
        setProperty(response.data);
      } catch (err) {
        console.error(err);
        setError("Error fetching property details.");
        setProperty(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-600">{error}</p>;
  if (!property) return <p>Property not found</p>;

  return <PropertyDetail property={property} />;
}