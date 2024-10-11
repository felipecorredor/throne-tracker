import Avatar from "@/components/Avatar";
import MemberInfo from "./MemberInfo";

interface SwornMemberItemProps {
  member: SwornMemberInfo;
}

const SwornMemberItem: React.FC<SwornMemberItemProps> = ({ member }) => {
  return (
    <li className="flex items-center gap-2">
      <Avatar name={member.name} />
      <MemberInfo
        name={member.name}
        isAlive={member.isAlive}
        deathInfo={member.deathInfo}
      />
    </li>
  );
};

export default SwornMemberItem;
