"use client";

import ErrorComponent from "@/components/ErrorComponent";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import { fetchHousesWithSwornMembers } from "@/hooks/useHousesWithSwornMembers";
import { useQuery } from "@tanstack/react-query";
import HouseCard from "./HouseCard";

const HousesList = () => {
  const {
    data: houses,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["housesWithSwornMembers"],
    queryFn: fetchHousesWithSwornMembers,
  });

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return <ErrorComponent message={error.message} onRetry={refetch} />;
  }

  return (
    <>
      <h1 className="text-3xl font-semibold text-center mt-8">
        Universe of Ice And Fire
      </h1>
      <div className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {houses?.map((house, index) => (
            <HouseCard key={index} house={house} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HousesList;
