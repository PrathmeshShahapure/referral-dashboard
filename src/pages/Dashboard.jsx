import { useEffect, useState } from "react";
import { getDashboardData } from "../api/referralApi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import OverviewCards from "../components/OverviewCards";
import ServiceSummary from "../components/ServiceSummary";
import ShareReferral from "../components/ShareReferral";
import ReferralTable from "../components/ReferralTable";
const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


   const fetchDashboard = async () => {
     setLoading(true);
      setError("");
      try {
        const data = await getDashboardData();
        setDashboardData(data.data);
        console.log("res",data);
      } catch (err) {
        setError(
          err?.response?.data?.message || "Failed to fetch dashboard data.",
        );
      } finally {
        setLoading(false);
      }
    };
  useEffect(() => {
     console.log("useEffect running");
    fetchDashboard();
  },[]);

 

  console.log( "dashboardData", dashboardData);
  if (loading ) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4" role="alert text-center" >
        <p className="text-red-500">{error}</p>
      </div>
    );
  }
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-2xl font-bold"> Referral Dashboard</h1>
        <p className="text-gray-600">
          Track your referrals, earnings, and partner activity in one place.
        </p>
       <OverviewCards metrics={dashboardData?.metrics || []} />
          <ServiceSummary serviceSummary={dashboardData?.serviceSummary} />

       <ShareReferral referral={dashboardData?.referral} />
        <ReferralTable  />
         
      </div>
      <Footer/>
    </>
  );
};

export default Dashboard;
