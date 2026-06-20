import React from 'react'

const ServiceSummary = ({ serviceSummary }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 my-4 bg-white rounded-lg">
      <h2 className="text-xl font-bold mb-4">Service Summary</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
      <div className=" bg-[#f4f6fb] border border-gray-200 shadow-md rounded-lg p-4">
        <p className=''>Service:</p>
        <p className="font-semibold p-2 rounded text-blue-500">{serviceSummary.service}</p>
      </div>
       <div className="bg-[#f4f6fb] border border-gray-200  shadow-md rounded-lg p-4">
        <p className=''>Your Referrals:</p>
        <p className="font-semibold p-2 rounded ">{serviceSummary.yourReferrals}</p>
      </div>
       <div className="bg-[#f4f6fb] border border-gray-200  shadow-md rounded-lg p-4">
        <p className=''>Active Referrals:</p>
        <p className="font-semibold p-2 rounded">{serviceSummary.activeReferrals}</p>
      </div>
       <div className="bg-[#f4f6fb] border border-gray-200   shadow-md rounded-lg p-4">
        <p className=''>Total Referral Earnings:</p>
        <p className="font-semibold p-2 rounded">{serviceSummary.totalRefEarnings}</p>
      </div>
     </div>
     
      
    </div>
  )
}

export default ServiceSummary