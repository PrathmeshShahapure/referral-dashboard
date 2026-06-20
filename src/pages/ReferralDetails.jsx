import { useParams ,Link} from "react-router-dom";
import { useEffect, useState } from "react";
import { getReferralById } from "../api/referralApi";
import Navbar from "../components/Navbar";
import {MoveLeft } from "lucide-react";
const ReferralDetails = () => {
  const { id } = useParams();

  const [referral, setReferral] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
  const fetchReferral = async () => {
    try {
      const data =await getReferralById(id);

      setReferral(data.data.referrals[0]);
    } catch (err) {
      setError("Referral not found");
    } finally {
      setLoading(false);
    }
  };

  fetchReferral();
}, [id]);
 console.log(referral)
  return  <> 
  <Navbar/>

  
   <div className="max-w-6xl mx-auto p-4">
     <Link to="/" className=" flex  gap-2  items-center text-[#6e70f1] font-bold text-sm">
     {<MoveLeft />}
        Back to dashboard
      </Link>
      
      <h1 className="text-2xl font-bold mt-2">Referral Details </h1>
      <p className="text-gray-500">Full information about this referral patner</p>

      {
      loading? 
      <p> Loading </p> :(!referral || error)?<div>
      <h1 className="mt-2">
        Referral not found
      </h1>
    </div>:
      
      <div className="bg-white border border-gray-200 shadow w-full md:w-1/2  p-5 px-10 mt-2 rounded-lg "> 
      <div className="flex justify-between border-b pb-5 border-gray-200   ">
         <h2 className="font-bold text-2xl">{referral.name}</h2>
        <p className="bg-blue-100 p-1 mt-1 w-[80px] text-center text-blue-800 text-sm rounded-full">{referral.serviceName}</p>
        </div> 
        <div className="mt-5 flex justify-between w-[50%]">
          <h2 className="text-gray-600 text-xs font-bold"> REFERRAL ID</h2>
         <p className="font-medium">{referral.id}</p>
           </div>
            <div className="mt-5 flex justify-between w-[50%]">
          <h2 className="text-gray-600 text-xs font-bold"> NAME</h2>
         <p className="font-medium">{referral.id}</p>
           </div>
            <div className="mt-5 flex justify-between w-[50%]">
          <h2 className="text-gray-600 text-xs font-bold"> SERVICE NAME</h2>
         <p className="font-medium">{referral.id}</p>
           </div>
            <div className="mt-5 flex justify-between w-[50%]">
          <h2 className="text-gray-600 text-xs font-bold"> DATE</h2>
         <p className="font-medium">{referral.date}</p>
           </div>
            <div className="mt-5 flex justify-between w-[50%]">
          <h2 className="text-gray-600 text-xs font-bold"> PROFIT</h2>
         <p className="font-medium">{referral.profit}</p>
           </div>
      </div>
      }
      
      </div>;
    </>

};

export default ReferralDetails;
