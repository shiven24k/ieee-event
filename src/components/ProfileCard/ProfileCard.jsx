import React from 'react';

const ProfileCard = ({ name, title, imageSrc }) => {
  return (
    <div className="flex flex-col text-center mb-10 p-5">
      <div className="inline-block  relative shrink-0 rounded-[.95rem]">
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

ProfileCard.defaultProps = {
  name: 'Dignitaries',
  title: 'Position Title',
  imageSrc: 'https://via.placeholder.com/150'
};

export default ProfileCard;