import { getInitials } from "@/utils/getInitials";
import React from "react";

interface SwornMembersListProps {
  swornMembers: SwornMemberInfo[] | string;
}

const SwornMembersList: React.FC<SwornMembersListProps> = ({
  swornMembers,
}) => {
  if (Array.isArray(swornMembers)) {
    return (
      <div className="h-80 overflow-y-auto">
        <ul className="space-y-2">
          {swornMembers.map((member, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center">
                <p className="text-gray-500 font-semibold text-center text-sm">
                  {getInitials(member.name)}
                </p>
              </div>
              <div>
                <p className="font-medium text-gray-800">{member.name}</p>
                <p className="text-sm text-gray-500">
                  {member.isAlive ? "Vivo" : `Muerto (${member.deathInfo})`}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return <p className="text-gray-500">{swornMembers}</p>;
};

export default SwornMembersList;
