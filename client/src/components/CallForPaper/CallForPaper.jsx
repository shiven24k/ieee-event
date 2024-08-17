import React from 'react';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';

function CallForPaper(){
    return (
      <div className=" mt-5 container mx-auto py-3 bg-cover bg-no-repeat w-full px-4">
      <div className="bg-gray-100 p-5 rounded-lg shadow-lg mt-10">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl font-bold">CALL FOR PAPER</h2>
          
        </div>
        <div className="flex justify-between items-center mb-5 ">
        <p className="mb-5">
          International Conference on Emerging Technology and Intelligent Systems (ICETIS) schedule on 11th -13th Sep, 2025. Its objective is to bring together leading academic scientists, researchers, research scholars, and educators to exchange and share their experiences and research results on all aspects of quality control and its management strategies. Experts will share the most recent innovations, trends on advancement in Communication Systems and Networking, Embedded Systems and IOT, Intelligent Computing, Artificial and Machine Learning, and Industrial and commercial applications of technologies.
        </p>
        <img src={img1} alt="Innovative Computing" className="w-[30em] ml-60 object-cover rounded-lg shadow-lg" />
        </div>
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-bold">TECHNICAL TRACKS</h3>
          
        </div>
        <p className="mb-5">
          RACCAI-2024 invites original and unpublished manuscripts for submission in the following tracks (but not limited to):
        </p>
        <ul className="list-none mb-5">
  <li className="flex items-center mb-2">
    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 001 1h2a1 1 0 100-2h-1V7z" clipRule="evenodd" />
    </svg>
    Track 1: Innovative Communication/Electronics/Electrical/Networks and Security
  </li>
  <li className="flex items-center mb-2">
    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 001 1h2a1 1 0 100-2h-1V7z" clipRule="evenodd" />
    </svg>
    Track 2: Innovative Computing
  </li>
  <li className="flex items-center mb-2">
    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 001 1h2a1 1 0 100-2h-1V7z" clipRule="evenodd" />
    </svg>
    Track 3: Artificial Intelligence/Machine Learning/Robotics/IOT/Blockchain
  </li>
</ul>
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-lg font-bold">Innovative Communication/Electronics/Electrical/Networks and Security</h4>
        </div>
        <div className='flex justify-between items-center'>
  <ul className="list-none p-5 list-inside mb-5 w-3/4 font-semibold ">
    <li>Wireless sensor networks</li>
    <li>Wireless communications</li>
    <li>Optical Communication</li>
    <li>Satellite Communication</li>
    <li>Microelectronics</li>
    <li>Embedded System</li>
    <li>Nanoelectronics</li>
    <li>Mechatronics</li>
    <li>Renewable and Sustainable Energy</li>
    <li>Power Systems</li>
    <li>Smart Grid</li>
    <li>Mobile ad-hoc networks</li>
    <li>Software defined networks</li>
    <li>Information theory and coding</li>
    <li>Cloud communications and networking</li>
    <li>Wearable network and systems</li>
    <li>Personal communication systems</li>
    <li>Vehicular networks and applications</li>
    <li>Virtual and overlay networks</li>
    <li>Future Internet Architecture</li>
    <li>Next Generation Networking</li>
    <li>Quantum Networking</li>
    <li>QoS Provisioning and Architectures</li>
    <li>Telecommunication Services and Applications</li>
    <li>Network Performance</li>
    <li>Computer Security</li>
    <li>Digital Signature</li>
    <li>Information Security</li>
    <li>Network Security</li>
    <li>Cyber Security</li>
    <li>MANET’s</li>
  </ul>
  <div className="flex justify-center items-center w-1/4">
    <img src={img2} alt="Innovative Communication" className="w-[20em] object-cover rounded-lg shadow-xl" />
  </div>
</div>
        
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-lg font-bold">Innovative Computing</h4>
        </div>
        <div className='flex justify-between items-center'>
  <ul className="list-none p-5 list-inside mb-5 w-3/4 font-semibold ">
  <li>Computational Intelligence</li>
          <li>Signal Processing</li>
          <li>Computer vision</li>
          <li>Soft Computing</li>
          <li>Decision Support and Decision making</li>
          <li>Parallel computing</li>
          <li>Distributed computing</li>
          <li>Grid computing</li>
          <li>Cloud computing</li>
          <li>Mobile computing</li>
          <li>Biomedical computing</li>
          <li>Ubiquitous computing</li>
          <li>Image processing</li>
          <li>Information retrieval</li>
          <li>Deep learning</li>
          <li>Expert system</li>
          <li>Internet computing</li>
          <li>High performance computing</li>
  </ul>
  <div className="flex justify-center items-center w-1/4">
    <img src={img3} alt="Innovative Communication" className="w-[30em] object-cover rounded-lg shadow-xl" />
  </div>
</div>
        
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-lg font-bold">Artificial Intelligence/Machine Learning/Robotics/IOT/Blockchain</h4>
        </div>
        <div className='flex justify-between items-center'>
  <ul className="list-none p-5 list-inside mb-5 w-3/4 font-semibold ">
  <li>Machine Learning</li>
          <li>Artificial Intelligence</li>
          <li>Robotics</li>
          <li>Blockchain</li>
          <li>Intelligent Systems for IoT</li>
          <li>Environmental Monitoring</li>
          <li>Machine to Machine/Device Communications</li>
          <li>Network Design and Architecture</li>
          <li>Wireless Systems and Applications</li>
          <li>Infrastructure Management</li>
          <li>IoT and Big Data</li>
          <li>Home Automation</li>
          <li>Security and Privacy</li>
          <li>Social Implications of IoT</li>
          <li>Technological focus for Smart Environments</li>
          <li>Smart City Case Studies</li>
          <li>Data Analysis and Visualization</li>
          <li>Architecture for secure and interactive IoT</li>
          <li>Sensor, Wireless Technologies and APIs</li>
          <li>Emerging IoT</li>
  </ul>
  <div className="flex justify-center items-center w-1/4">
    <img src={img4} alt="Innovative Communication" className="w-[30em] object-cover rounded-lg shadow-xl" />
  </div>
</div>
        
        
        <p className="mb-5 text-right">
           Studies and new developments, which are relevant to science, engineering and technology are welcomed to the conference.
        </p>
      </div>
    </div>
    )
}
export default CallForPaper;