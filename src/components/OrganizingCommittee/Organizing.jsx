import React from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
function Organizing() {
  return (
    <div>
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
    </div>
  );
}
export default Organizing;