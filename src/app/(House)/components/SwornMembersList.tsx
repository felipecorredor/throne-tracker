import SwornMemberItem from "./SwornMemberItem";

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
            <SwornMemberItem key={idx} member={member} />
          ))}
        </ul>
      </div>
    );
  }

  return <p className="text-gray-500">{swornMembers}</p>;
};

export default SwornMembersList;
