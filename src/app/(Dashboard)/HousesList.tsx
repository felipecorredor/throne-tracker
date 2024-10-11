"use client";

import HouseCard from "@/components/HouseCard";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import { fetchHousesWithSwornMembers } from "@/hooks/useHousesWithSwornMembers";
import { useQuery } from "@tanstack/react-query";

const HousesList = () => {
  const {
    data: houses,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["housesWithSwornMembers"],
    queryFn: fetchHousesWithSwornMembers,
  });

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return (
      <div className="container mx-auto py-10 px-4">
        <p className="text-red-500 text-center">Error al cargar las casas.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {houses?.map((house, index) => (
          <HouseCard key={index} house={house} />
        ))}
      </div>
    </div>
  );
};

export default HousesList;
