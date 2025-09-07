import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import type { Property } from '@/interfaces';

type Props = {
  property?: Property | null;
};

export default function PropertyDetail({ property: initialProperty }: Props) {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState<Property | null>(initialProperty ?? null);
  const [loading, setLoading] = useState<boolean>(initialProperty ? false : true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // If a property was passed in, don't fetch.
    if (initialProperty) return;
    if (!id) return;

    const propertyId = Array.isArray(id) ? id[0] : id;

    const fetchProperty = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/properties/${propertyId}`);
        setProperty(response.data);
      } catch (err) {
        console.error('Error fetching property:', err);
        setError('Failed to load property details.');
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id, initialProperty]);

  if (loading) return <p>Loading property...</p>;
  if (error) return <p className="text-red-600">{error}</p>;
  if (!property) return <p>Property not found.</p>;

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={property.imageUrl ?? '/placeholder.png'}
          alt={property.title}
          className="w-full h-96 object-cover"
        />
        <div className="p-6">
          <h1 className="text-2xl font-semibold mb-2">{property.title}</h1>
          <p className="text-sm text-gray-500 mb-4">Rating: {property.rating ?? 'N/A'} ⭐</p>
          <p className="text-gray-700 mb-4">{property.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold">${property.price ?? '—'}</span>
            <div>
              <button
                onClick={() => router.push(`/booking?propertyId=${property.id}`)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Book now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}