import React from 'react';
import CGCimage from '../../assets/CGC-image.png';
function About(){
    return(
        <div>
            <div className="flex justify-center p-5">
    
        </div>
        <div className="flex justify-center">
  
  <h1 className="shadow-custom-text text-red-600 mb-0 text-center text-4xl  font-bold">
          CHANDIGARH ENGINEERING COLLEGE
        </h1>
</div>
        <div className='flex flex-wrap'>
    
    <div className='w-full md:w-auto'>
        <img src={CGCimage} alt="CGC Jhanjeri" className='w-full md:w-auto' />
    </div>

</div>
<div className="flex flex-col md:flex-row items-center justify-center mt-10 p-4">
  <div className="md:w-2/3">
    <h2 className="shadow-custom-text text-2xl font-extrabold text-center mb-5">
      ABOUT THE INSTITUTE
    </h2>
    <div className="p-5 mt-10 bg-gray-100 rounded-md">
      <p>
        Established in 2012 with engineering as a flagship program, Chandigarh Engineering College, Jhanjeri (CEC-J) accredited NAAC A+ has come a long way in its journey of delivering quality higher education at affordable fees. CEC-J, whose roots date back to 2001 and has evolved from CEC Group, is today one of North India’s leading higher education providers that offer world-class education and endless placement opportunities to the students of all corners of the country.
      </p>
      <p className="mt-4">
        CEC-J is the epitome of strong international alliances as we have tied-up with 40+ top international colleges and universities in 15 countries around the globe. These alliances give our students an opportunity to broaden their horizons. The college embraces seasoned faculty who are alumni of IITs and IIMs, a student-centric and research-intensive environment and, most importantly, an education model that blends the theory and hands-on exposure effectively.
      </p>
      <p className="mt-4">
        Apart from this, CEC-J has been placing utmost importance on 360° pre-placement training, as well as, building strong industry-academia alliances – that’s why we are trendsetters in campus placements. We have tied up with many top-notch companies in diverse fields to understand the industry trends and implement an industry-standard curriculum.
      </p>
      <div className="pt-5">
        <p>
          <span className="font-bold">VISION :</span> To become a top-notch technical institution offering professional training for the long-term advancement of society
        </p>
        <p>
          <span className="font-bold">MISSION :</span> To attain academic flexibility via robust industry-academia interactions and emphasize employability, and entrepreneurship
        </p>
        <p>
          <span className="font-bold">QUALITY POLICY :</span> To give children access to first-rate facilities, state-of-the-art technology, and highly trained teachers
        </p>
      </div>
    </div>
  </div>
  <div className="md:w-1/3 mt-5 md:mt-0 md:ml-5">
    <img src="https://chandigarhengineeringcollege.com/uploads/banners/1719649726_df07b8e561efce2b733d.jpg" alt="Institute Image" className="w-full h-auto rounded-md shadow-md" />
  </div>
</div>

        
        </div>
    )
}
export default About; 