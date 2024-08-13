import React from 'react';

const ProfileCard = ({ name, title, imageSrc }) => {
  return (
    <div className="flex flex-col items-center text-center m-10 pb-10">
  <div className="inline-block relative shrink-0 rounded-[.95rem]">
    <img className="object-cover rounded-[.65rem] w-[10em] h-[10em]" src={imageSrc} alt={name} />
  </div>
  <div className="text-center mt-4">
    <a href="javascript:void(0)" className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">
      {name}
    </a>
    <span className="block font-medium">{title}</span>
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