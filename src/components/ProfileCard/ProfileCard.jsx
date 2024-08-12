// ProfileCard.jsx
import React from 'react';

const ProfileCard = ({ name, title, imageSrc }) => {
  return (
    <div className="flex flex-col mr-5 text-center mb-11 lg:mr-16">
      <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
        <img className="object-cover rounded-[.65rem] w-[14em] h-[14em]" src={imageSrc} alt={name} />
      </div>
      <div className="text-center">
        <a href="javascript:void(0)" className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">
          {name}
        </a>
        <span className="block font-medium text-muted">{title}</span>
      </div>
    </div>
  );
};

export default ProfileCard;