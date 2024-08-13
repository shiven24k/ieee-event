import React from "react";
import ieeelogo from "../../assets/ieeelogo.png";
import HunnyPahuja from "../../assets/HunnyPahuja.jpg";
import PradeepKumar from "../../assets/PradeepKumar.jpeg";
import Mirgendra from "../../assets/Mirgendra.jpg";
import ProfileCard from "../ProfileCard/ProfileCard";
import chairman from "../../assets/chairman.png";
import md from "../../assets/md.png";
import ed from "../../assets/ed.png";
import ed_dcpd from "../../assets/ed-dcpd.png";
import CGCimage from "../../assets/CGC-image.webp";

function Home() {
  return (
    <div>
      <div className="relative w-full h-screen bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('https://library.cgc.ac.in/images/slider/slide-1.jpg')", backgroundPositionY: "center" }}>
  <div className="absolute inset-0 flex flex-col justify-center items-center text-center top-0">
    <div className="text-white text-sm sm:text-base md:text-lg lg:text-xl tracking-widest font-extrabold text-shadow-lg title changeText">
      <div>
        INTERNATIONAL CONFERENCE <br /> ON <br /> EMERGING TECHNOLOGY AND
        INTELLIGENT SYSTEMS <br />
        (ICETIS-2025)
      </div>
      <pre className="text-sm sm:text-base md:text-lg lg:text-xl font-sans tracking-widest font-extrabold text-shadow-lg pb-5 mt-5">
        IEEE Conference ID:- 61846 <br />
        (Hybrid Mode)
      </pre>
    </div>
    <div className="w-full container mx-auto px-4  mb-5">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 px-4 py-2">
          <h4 className="text-center font-sans text-white text-shadow-lg leading-relaxed font-normal text-sm sm:text-base md:text-lg lg:text-xl px-2 sm:px-10 title tittleBoJa">
            <i>
              All accepted and presented papers will be considered for
              inclusion in IEEE Xplore (indexed by Scopus) subject to the
              quality requirement.
            </i>
          </h4>
        </div>
        <div className="w-full lg:w-1/2 px-4">
          <h4 className="text-center font-sans text-white font-semibold text-shadow-lg text-sm sm:text-base md:text-lg lg:text-xl leading-snug title">
            Important Dates
            <br />
            <span className="font-normal text-sm sm:text-base md:text-lg lg:text-xl">
              <div className="flex flex-col sm:flex-row items-center justify-center">
                <span className="text-center font-sans text-white font-semibold text-shadow-lg text-sm sm:text-base md:text-lg lg:text-xl leading-snug">
                  Full Paper Submission Deadline:&nbsp;
                </span>
                <div className="flex items-center flex-col">
                  <span className="text-center font-sans text-white font-semibold text-shadow-lg text-sm sm:text-base md:text-lg lg:text-xl leading-snug">
                    &nbsp;12 May, 2025
                  </span>
                </div>
              </div>
            </span>
            Acceptance Notification Deadline: 9 June, 2025
            <br />
            Camera Ready Manuscript Deadline: 9 July, 2025
            <br />
            Conference Registration Deadline: 11 August, 2025
            <br />
            Conference Dates: 11-13 September, 2025
          </h4>
        </div>
      </div>
    </div>
    <h4 className="text-center font-sans font-semibold text-white text-shadow-lg text-sm sm:text-base md:text-lg lg:text-xl pt-3">
      Organised by <br /> ECE Department<br /> CGC-JHANJERI,MOHALI <br /> PUNJAB - 140307
    </h4>
  </div>
</div>
      <div class="w-full flex flex-col items-center bg-silver p-0 pb-10 gap-8">
        <h4 class="text-center font-sans text-black font-bold text-shadow-lg text-2xl pt-10">
          Technically Sponsored by
        </h4>
        <img src={ieeelogo} alt="IEEE Delhi" />
      </div>
      <div className="w-full flex flex-col items-center bg-gray-200 p-0 pb-10">
        <h4 className="text-center font-sans text-black font-bold text-shadow-lg text-2xl  pt-10 title">
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
                International Conference on{" "}
                <strong>
                  “International Conference on Emerging Technology, and
                  Intelligent Systems (ICETIS-2025)”
                </strong>{" "}
                is the leading platform for presenting the latest advancements
                and research discoveries in integrated circuits, microwave
                technology, communication, and next-generation computing, this
                conference will convene top researchers, engineers, and
                scientists from around the globe. The driving force behind this
                event is the urgent need to accommodate the rapidly increasing
                number of intelligent devices while ensuring the efficiency of
                communication systems.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2 p-0 flex justify-center items-center">
            <img src={CGCimage} className="h-100 max-w-full rounded-lg" />
          </div>
        </div>
      </div>

      {/* keynote speakers */}
      <div>
        <div className="flex flex-wrap mb-9 w-full relative flex-col flex-auto py-8 px-9">
          <h1 className="mb-2 text-[1.75rem] font-bold text-dark text-center text-4xl uppercase">
            KEYNOTE SPEAKER
          </h1>
        </div>
        <div className="flex w-full items-center justify-center text-2xl">
          <ProfileCard />
          <ProfileCard />
        </div>
      </div>

      {/* chief partons */}
      <div>
        <div className="flex flex-wrap mb-9 w-full relative flex-col flex-auto py-8 px-9">
          <h1 className="mb-2 text-[1.75rem] font-bold text-dark text-center text-4xl uppercase">
            CHIEF PARTONS
          </h1>
        </div>
        <div className="flex w-full items-center justify-center text-2xl">
          <ProfileCard
            name="S. Rashpal Singh Dhaliwal"
            title="Chairman, Chandigarh group of colleges"
            imageSrc={chairman}
          />
          <ProfileCard
            name="Mr. Arsh Dhaliwal"
            title="Managing Director, CGC Jhanjeri"
            imageSrc={md}
          />
        </div>
      </div>

      {/* general chair */}
      <div>
        <div className="flex flex-wrap mb-9 w-full relative flex-col flex-auto py-8 px-9">
          <h1 className="mb-2 text-[1.75rem] font-bold text-dark text-center text-4xl uppercase">
            GENERAL CHAIR
          </h1>
        </div>
        <div className="flex w-full items-center justify-center text-2xl">
          <ProfileCard />
          <ProfileCard />
        </div>
      </div>

      {/* conference chair */}
      <div>
        <div className="flex flex-wrap mb-9 w-full relative flex-col flex-auto">
          <h1 className="mb-2 text-[1.75rem] font-bold text-dark text-center text-4xl uppercase">
            CONFERENCE CHAIR
          </h1>
        </div>
        <div className="flex w-full items-center justify-center text-2xl">
          <ProfileCard
            name="Dr. Hunny Pahuja"
            title="HOD, ECE"
            imageSrc={HunnyPahuja}
          />
        </div>
      </div>

      {/* technical program chair */}
      <div>
        <div className="flex flex-wrap mb-9 w-full relative flex-col flex-auto py-8 px-9">
          <h1 className="mb-2 text-[1.75rem] font-bold text-dark text-center text-4xl uppercase">
            TECHNICAL PROGRAM CHAIR
          </h1>
        </div>
        <div className="flex w-full items-center justify-center text-2xl">
          <ProfileCard
            name="Dr. Pradeep Kumar Jindal"
            title="Associate Professor"
            imageSrc={PradeepKumar}
          />
        </div>
      </div>

      {/* publication chair */}
      <div>
        <div className="flex flex-wrap mb-9 w-full relative flex-col flex-auto py-8 px-9">
          <h1 className="mb-2 text-[1.75rem] font-bold text-dark text-center text-4xl uppercase">
            PUBLICATION CHAIR
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <ProfileCard
            name="Dr. Mirgendra"
            title="Associate Professor"
            imageSrc={Mirgendra}
          />
        </div>
      </div>

      {/* organising secretary */}
      <div>
        <div className="flex flex-wrap mb-9 w-full relative flex-col flex-auto py-8 px-9">
          <h1 className="mb-2 text-[1.75rem] font-bold text-dark text-center text-4xl uppercase">
            ORGANISING SECRETARY
          </h1>
        </div>
        <div className="flex w-full items-center justify-center text-2xl">
          <ProfileCard />
          <ProfileCard />
        </div>
      </div>

      {/* publicity chair */}
      <div>
        <div className="flex flex-wrap mb-9 w-full relative flex-col flex-auto py-8 px-9">
          <h1 className="mb-2 text-[1.75rem] font-bold text-dark text-center text-4xl uppercase">
            PUBLICITY CHAIR
          </h1>
        </div>
        <div className="flex w-full items-center justify-center text-2xl">
          <ProfileCard />
          <ProfileCard />
        </div>
      </div>

      {/* tutorial chair */}
      <div>
        <div className="flex flex-wrap mb-9 w-full relative flex-col flex-auto py-8 px-9">
          <h1 className="mb-2 text-[1.75rem] font-bold text-dark text-center text-4xl uppercase">
            TUTORIAL CHAIR
          </h1>
        </div>
        <div className="flex w-full items-center justify-center text-2xl">
          <ProfileCard />
          <ProfileCard />
        </div>
      </div>

      {/* registration desk */}
      <div>
        <div className="flex flex-wrap mb-9 w-full relative flex-col flex-auto py-8 px-9">
          <h1 className="mb-2 text-[1.75rem] font-bold text-dark text-center text-4xl uppercase">
            REGISTRATION DESK
          </h1>
        </div>
        <div className="flex w-full items-center justify-center text-2xl">
          <ProfileCard />
          <ProfileCard />
        </div>
      </div>

      {/* session management chair */}
      <div>
        <div className="flex flex-wrap mb-9 w-full relative flex-col flex-auto py-8 px-9">
          <h1 className="mb-2 text-[1.75rem] font-bold text-dark text-center text-4xl uppercase">
            SESSION MANAGEMENT CHAIR
          </h1>
        </div>
        <div className="flex w-full items-center justify-center text-2xl">
          <ProfileCard />
          <ProfileCard />
        </div>
      </div>

      {/* hospitality chair */}
      <div>
        <div className="flex flex-wrap mb-9 w-full relative flex-col flex-auto py-8 px-9">
          <h1 className="mb-2 text-[1.75rem] font-bold text-dark text-center text-4xl uppercase">
            HOSPITALITY CHAIR
          </h1>
        </div>
        <div className="flex w-full items-center justify-center text-2xl">
          <ProfileCard />
          <ProfileCard />
        </div>
      </div>

      {/* transportation committee */}
      <div>
        <div className="flex flex-wrap mb-9 w-full relative flex-col flex-auto py-8 px-9">
          <h1 className="mb-2 text-[1.75rem] font-bold text-dark text-center text-4xl uppercase">
            TRANSPORTATION COMMITTEE
          </h1>
        </div>
        <div className="flex w-full items-center justify-center text-2xl">
          <ProfileCard />
          <ProfileCard />
        </div>
      </div>

      <div className="flex flex-wrap mb-9 w-full relative flex-col flex-auto py-8 px-9">
        <h1 className="mb-2 text-[1.75rem] font-bold text-dark text-center text-4xl uppercase">
          Contact
        </h1>
      </div>
    </div>
  );
}
export default Home;
