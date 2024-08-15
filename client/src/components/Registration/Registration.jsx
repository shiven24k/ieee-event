import React from 'react';
function Regestration() {
  return (
    <div className =" container mx-auto py-3 bg-cover bg-no-repeat w-full" style={{backgroundImage: 'url(https://chandigarhengineeringcollege.com/public/course/assets/images/cec/club-bg.png)'}}>
      <h1 className="text-3xl font-bold mb-5 text-center">REGISTRATION</h1>
      <p className="mb-5 text-center">
        Authors whose papers are accepted and are of high standards and having practical data/implementation will have the option to submit additional fees to get their paper published in UGC/Scopus indexed journal/book chapter apart from the Registration fees as mentioned in the category below:
      </p>
      <div className="overflow-x-auto mb-5">
        <table className="min-w-full bg-transparent border border-gray-200 shadow-lg rounded-lg">
          <thead>
            <tr className=" bg-gray-100">
              <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">Delegates</th>
              <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">Fee</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 border-b border-gray-200">Faculty Members</td>
              <td className="px-6 py-4 border-b border-gray-200">1000 INR</td>
            </tr>
            <tr className=" bg-gray-50">
              <td className="px-6 py-4 border-b border-gray-200">Delegates from Industry</td>
              <td className="px-6 py-4 border-b border-gray-200">1500 INR</td>
            </tr>
            <tr>
              <td className="px-6 py-4 border-b border-gray-200">Ph.D. Scholars Students (UG/PG)</td>
              <td className="px-6 py-4 border-b border-gray-200">1000 INR</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 border-b border-gray-200">Foreign Delegates</td>
              <td className="px-6 py-4 border-b border-gray-200">100 USD</td>
            </tr>
            <tr>
              <td className="px-6 py-4 border-b border-gray-200">Foreign Student Author</td>
              <td className="px-6 py-4 border-b border-gray-200">90 USD</td>
            </tr>
          </tbody>
        </table>
      </div>
      <i className="flex text-center justify-center mb-5">
        Registration fee as stated above can be paid through NEFT/Online transaction and refers to:
      </i>
      <div className="bg-gray-100 p-5 rounded-lg shadow-lg">
        <p className="mb-2"><strong>Account Name:</strong> Chandigarh Engineering College</p>
        <p className="mb-2"><strong>Bank Name:</strong> State Bank of India</p>
        <p className="mb-2"><strong>Account number:</strong> 39625129110</p>
        <p className="mb-2"><strong>IFSC Code:</strong> SBIN0017008</p>
        <p className="mb-2"><strong>MICR Code:</strong> 160002082</p>
        <p className="mb-2"><strong>Bank Name and Address:</strong> Jhanjeri, Sirhind Road 140307</p>
      </div>
      <p className="text-center mt-5">
        <strong>Note:</strong> After making payment, participants are requested to attach the payment transaction and screenshot on the registration form link.
      </p>
    </div>
  );
}  
export default Regestration;