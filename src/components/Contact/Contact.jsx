import React from 'react';
function Contact() {
  return (
    <div>
       <div className ="py-3 bg-cover bg-no-repeat w-full" style={{backgroundImage: 'url(https://chandigarhengineeringcollege.com/public/course/assets/images/cec/club-bg.png)'}}>
  <div className="container mx-auto ">
    <div className=" flex flex-wrap">

      <div className="p-5 w-full sm:w-1/2">
        <h2 className="text-lg font-bold mb-4">Contact Form</h2>
        <form action="mailto:icic3s2024@iiitu.ac.in" method="post" enctype="text/plain">
          <label className="block mb-2">Full Name</label>
          <input type="text" placeholder="Enter Name" name="Name" className="form-control input-sm w-full mb-4 p-2 border rounded-md" />
          
          <label className="block mb-2">Email Address</label>
          <input type="text" name="Email" placeholder="Enter Email Address" className="form-control input-sm w-full mb-4 p-2 border rounded-md" />
          
          <label className="block mb-2">Mobile Number</label>
          <input type="text" name="Phone" placeholder="Enter Mobile Number" className="form-control input-sm w-full mb-4 p-2 border rounded-md" />
          
          <label className="block mb-2">Enter Message</label>
          <textarea rows="5" placeholder="Enter Your Message" className="form-control input-sm w-full mb-4 p-2 border rounded-md" name="Message"></textarea>
          
          <input type="submit" value="Send Message" className=" text-center p-3 border-none text-white bg-blue-500 rounded-md cursor-pointer" />
        </form>
      </div>

      <div className="w-full sm:w-1/2 p-5">
        <div className="serv m-12">
          <h2 className="text-lg font-bold mb-4">Address</h2>
          <p>Chandigarh Group of Colleges Jhanjeri</p>
          <p>Punjab, Jhanjeri(PB)-140307</p>
          <p>Phone: +91 98724 95684</p>
          <p>Phone: +91 8264239901</p>
          <p>Email at: <a href="Pardeep.j1881@cgc.ac.in" className="text-blue-500">Pardeep.j1881@cgc.ac.in</a></p>
          <p>Email at: <a href="Shivani.j2587@cgc.ac.in" className="text-blue-500">Shivani.j2587@cgc.ac.in</a></p>
        </div>
      </div>
      
    </div>
  </div>
</div>
    </div>
  );
}
export default Contact;