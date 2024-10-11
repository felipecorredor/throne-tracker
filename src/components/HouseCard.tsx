import React from "react";
import SwornMembersList from "./SwornMembersList";

interface HouseCardProps {
  house: NobleHouse;
}

const HouseCard: React.FC<HouseCardProps> = ({ house }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
      <div className="bg-gray-900 text-white p-4">
        <h2 className="text-2xl font-semibold">{house.name}</h2>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          Sworn Members:
        </h3>
        <SwornMembersList swornMembers={house.swornMembers} />
      </div>
    </div>
  );
};

export default HouseCard;
