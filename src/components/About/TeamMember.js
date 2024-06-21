import Image from "next/image";

const TeamMember = ({ member }) => {
  return (
    <div className="p-6 text-white">
      <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden relative">
        <Image
          src={member.image}
          alt={member.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-center  font-roboto">
        {member.name}
      </h3>
      <p className="text-white text-sm mb-4 font-normal text-center font-roboto">
        {member.position}
      </p>
      <ul className="text-left text-white list-disc list-inside space-y-1">
        {member.details.map((detail, index) => (
          <li
            key={index}
            className="text-white text-base font-light font-roboto"
          >
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamMember;
