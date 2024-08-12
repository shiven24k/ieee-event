import React from 'react';
import ieeelogo from '../../assets/ieeelogo.png';
import HunnyPahuja from '../../assets/HunnyPahuja.jpg';
import PradeepKumar from '../../assets/PradeepKumar.jpeg';
import Mirgendra from '../../assets/Mirgendra.jpg';
import ProfileCard from '../ProfileCard/ProfileCard';
import chairman from '../../assets/chairman.png';
import md from '../../assets/md.png';
import ed from '../../assets/ed.png';
import ed_dcpd from '../../assets/ed-dcpd.png';
import CGCimage from '../../assets/CGC-image.webp';

function Home() {
  return (
    <div>
  <div className="relative">
    <div className="relative w-full h-full">
      <img className="w-full h-full object-cover" src="https://library.cgc.ac.in/images/slider/slide-1.jpg" alt="Background Image" />
    </div>
    <div className="text-white absolute top-10 text-xl sm:text-2xl left-1/2 transform -translate-x-1/2 tracking-widest font-extrabold text-shadow-lg pb-5 title changeText text-center">
      <div className="leading-snug">
        INTERNATIONAL CONFERENCE <br /> <span className="text-red-600">ON</span> <br /> EMERGING TECHNOLOGY, AND INTELLIGENT SYSTEMS <br />
        (ICETIS-2025)
      </div>
      <pre className="text-xl sm:text-2xl text-center font-sans tracking-widest font-extrabold text-shadow-lg pb-5 mt-5">
        IEEE Conference ID:- 61846 <br />
        (Hybrid Mode)
      </pre>
    </div>
    <div className="absolute bottom-0 container mx-auto px-4">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 px-4 py-2">
          <h4 className="text-center font-sans text-white text-shadow-lg leading-relaxed font-normal text-base sm:text-xl px-2 sm:px-10 title tittleBoJa">
            <i>All accepted and presented papers will be considered for inclusion in IEEE Xplore (indexed by Scopus) subject to the quality requirement.</i>
          </h4>
        </div>
        <div className="w-full lg:w-1/2 px-4 py-2">
          <h4 className="text-center font-sans text-white font-semibold text-shadow-lg text-lg sm:text-2xl leading-snug title">
            Important Dates<br />
            <span className="font-normal text-lg sm:text-2xl">
              <div className="flex flex-col sm:flex-row items-center justify-center">
                <span className="text-center font-sans text-white font-semibold text-shadow-lg text-lg sm:text-2xl leading-snug">Full Paper Submission Deadline:&nbsp;</span>
                <div className="flex items-center flex-col">
                  <span className="text-center font-sans text-yellow-500 font-semibold text-shadow-lg text-lg sm:text-2xl leading-snug">&nbsp;29 February, 2024</span>
                  <span className="text-center font-sans text-white font-semibold text-shadow-lg text-sm sm:text-lg leading-snug line-through decoration-yellow-500">31 January, 2024</span>
                </div>
              </div>
            </span>
            Acceptance Notification Deadline: 10 April, 2024<br />
            Camera Ready Manuscript Deadline: 25 April, 2024<br />
            Conference Registration Deadline: 15 May, 2024<br />
            Conference Dates: 08-09 June, 2024
          </h4>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full flex flex-col items-center bg-silver p-0 pb-10 gap-8">
  <h4 class="text-center font-sans text-black font-bold text-shadow-lg text-2xl leading-snug pt-10">
    Technically Sponsored by
  </h4>
  <img src={ieeelogo} alt="IEEE Delhi"/>
</div>
   <div className="w-full flex flex-col items-center bg-gray-200 p-0 pb-10">
  <h4 className="text-center font-sans text-black font-bold text-shadow-lg text-2xl leading-snug pt-10 title">
    Conference Sponsors
  </h4>
  <div className="flex gap-16 p-0 px-8">
    <img src="" className="flex-1 w-1/5 h-auto object-contain" />
    <img src="" className="flex-1 w-1/5 h-auto object-contain" />
    <img src="" className="flex-1 w-1/5 h-auto object-contain" />
  </div>
</div>
<div class="w-full bg-silver py-8">
  <div class="flex flex-wrap">
    <div class="w-full lg:w-1/2 order-2 lg:order-1 p-0">
      <div class="w-full flex flex-col items-start py-8 pl-10%">
        <p class="text-justify font-sans text-black font-normal text-shadow-lg p-5">
          International Conference on <strong>“International Conference on Emerging Technology, and Intelligent Systems (ICETIS-2025)”</strong> is the leading platform for presenting the latest advancements and research discoveries in integrated circuits, microwave technology, communication, and next-generation computing, this conference will convene top researchers, engineers, and scientists from around the globe. The driving force behind this event is the urgent need to accommodate the rapidly increasing number of intelligent devices while ensuring the efficiency of communication systems.
        </p>
      </div>
    </div>
    <div className="w-full lg:w-1/2 order-1 lg:order-2 p-0 flex justify-center items-center">
  <img src={CGCimage} className="h-100 max-w-full rounded-lg" />
</div>
  </div>
</div>
<div class="flex flex-wrap">
  <div class="w-full max-w-full  mx-auto">
    <div class="relative flex flex-col m-5">
      
      <div class="flex-auto block py-8 px-9">
      <div>
  <div className="mb-9">
    <h1 className="mb-2 text-[1.75rem] font-semibold text-dark">Conference Chair</h1>
    <span className="text-[1.15rem] font-medium text-muted">
      Join us in welcoming our esteemed Conference Chair, who brings unparalleled expertise and leadership to guide this premier event
    </span>
  </div>
  <div className="flex w-full items-center justify-center">
      <ProfileCard name="Dr. Hunny Pahuja" title="HOD, ECE" imageSrc={HunnyPahuja} />
      <ProfileCard name="Dr. Pradeep Kumar Jindal" title="Associate Professor" imageSrc={PradeepKumar} />
      <ProfileCard name="Dr. Mirgendra" title="Associate Professor" imageSrc={Mirgendra} />
  </div>
</div>
      </div>
    </div>
  </div>
</div>

<div class="flex flex-wrap">
  <div class="w-full max-w-full  mx-auto">
    <div class="relative flex flex-col m-5">
      
      <div class="flex-auto block py-8 px-9">
      <div>
  <div className="mb-9">
    <h1 className="mb-2 text-[1.75rem] font-semibold text-dark">Leadership Team</h1>
    <span className="text-[1.15rem] font-medium text-muted">
    Chandigarh Group of Colleges, Jhanjeri is led by a commitment to empower individuals, fostering an environment conducive to the creation of exemplary work. Through collaborative efforts, our leadership aims to inspire greatness and facilitate impactful contributions within our community and beyond.
    </span>
  </div>
  <div className="flex w-full items-center justify-center">
      <ProfileCard name="S. Rashpal Singh Dhaliwal" title="Chairman, Chandigarh group of colleges" imageSrc={chairman} />
      <ProfileCard name="Mr. Arsh Dhaliwal" title="Managing Director, CGC Jhanjeri" imageSrc={md} />
      <ProfileCard name="Dr. Vinay Goyal" title="Executive Director - DCPD, CGC Jhanjeri" imageSrc={ed} />
      <ProfileCard name="Dr. Sushil Prashar" title="Executive Director - DCPD, CGC Jhanjeri" imageSrc={ed_dcpd} />

  </div>
</div>
      </div>
    </div>
  </div>
</div>



</div>
  );
}
export default Home;