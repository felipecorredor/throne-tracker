import { getInitials } from "@/utils/getInitials";

interface AvatarProps {
  name: string;
}

const Avatar: React.FC<AvatarProps> = ({ name }) => {
  return (
    <div className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center">
      <p className="text-gray-500 font-semibold text-center text-sm">
        {getInitials(name)}
      </p>
    </div>
  );
};

export default Avatar;
