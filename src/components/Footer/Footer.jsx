import React from "react";
import { Link } from 'react-router-dom';
function Footer() {
  return (
    

<footer class="bg-red-700 dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="https://www.cgc.ac.in/" class="flex items-center">
                  <img src="	https://www.cgc.ac.in/public/course/assets/images/header-footer/cgc-jhanjeri-logo-white.png" class="h-10 me-2" alt="FlowBite Logo" />
              </a>
              <p class="self-center text-white dark:text-gray-400 font-small">Chandigarh Group of Colleges Jhanjeri Mohali, <br/> State Highway 12A Jhanjeri, <br/>Sahibzada Ajit Singh Nagar, <br/> Punjab 140307 </p>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">E-mail Us At</h2>
                  <ul class="text-white dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Pardeep.j1881@cgc.ac.in</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Shivani.j2587@cgc.ac.in</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">call us at</h2>
                  <ul class="text-white dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline ">+91 98724 95684</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">+91 8264239901</a>
                      </li>
                  </ul>
              </div>
              <div>
  <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">quick link</h2>
  <div className="flex gap-5">
    <div>
      <ul className="text-white dark:text-gray-400 font-medium">
        <li className="mb-4">
          <Link to="/" className="hover:underline">Home</Link>
        </li>
        <li className="mb-4">
          <Link to="/about" className="hover:underline">About</Link>
        </li>
        <li>
          <Link to="/callforpaper" className="hover:underline">Call for Paper</Link>
        </li>
      </ul>
    </div>
    <div>
      <ul className="text-white dark:text-gray-400 font-medium">
        <li className="mb-4">
          <Link to="/papersubmission" className="hover:underline">Paper Submission</Link>
        </li>
        <li className="mb-4">
          <Link to="/registration" className="hover:underline">Registration</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-white sm:text-center dark:text-gray-400">© 2025 <a href="#" class="hover:underline">ICETIS</a>. All Rights Reserved.
          </span>
          <span class="text-sm text-white sm:text-center dark:text-gray-400"> Designed by <a href="https://www.linkedin.com/in/shiven-kashyap-964819220/">Shiven Kashyap</a></span>
      </div>
    </div>
</footer>

  );
}
export default Footer;
