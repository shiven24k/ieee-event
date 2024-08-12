import React from 'react';
import CGCimage from '../../assets/CGC-image.webp';
function About(){
    return(
        <div>
            <div className="flex justify-center p-5">
            <h1 className="text-3xl font-bold">About Us</h1>
        </div>
        <div className='flex text-2xl font-bold justify-center p-5'>
            <h4>CHANDIGARH GROUP OF COLLEGES JHANJERI
            </h4>
        </div>
        <div className='flex flex-wrap'>
    <div className='w-full md:w-1/2 p-5 bg-white sm:bg-[#e616169a] sm:text-white text-black rounded-md md:absolute md:right-5 md:bottom-1'>
        <p>CGC Jhanjeri (CGC-J) is a preferred choice among the best colleges in North India. With unique student training programs, well-equipped infrastructure, eminent corporate tie-ups and other potentials, we set our sight on inculcating proficiency, sapience and rational skill set in our students. To this, our UG and PG programs are tailor-made for all-in-all student development and industrial adeptness.</p>
    </div>
    
    <div className='w-full md:w-auto'>
        <img src={CGCimage} alt="CGC Jhanjeri" className='w-full md:w-auto' />
    </div>
</div>
        
        </div>
    )
}
export default About; 