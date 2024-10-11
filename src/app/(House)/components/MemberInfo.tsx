import React from "react";

interface MemberInfoProps {
  name: string;
  isAlive: boolean;
  deathInfo: string | null;
}

const MemberInfo: React.FC<MemberInfoProps> = ({
  name,
  isAlive,
  deathInfo,
}) => {
  return (
    <div>
      <p className="font-medium text-gray-800">{name}</p>
      <p className="text-sm text-gray-500">
        {isAlive ? "Alive" : `Dead (${deathInfo})`}
      </p>
    </div>
  );
};

export default MemberInfo;
