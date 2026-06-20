import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getReferrals } from "../api/referralApi";

const formatCurrency = (amount) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);

const formatDate = (date) => {
  return date.replaceAll("-", "/");
};

const ReferralTable = () => {
  const [referrals, setReferrals] = useState([]);
  const [refLoading, setRefLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [sort, setSort] = useState("desc");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(referrals.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentReferrals = referrals.slice(startIndex, endIndex);

  const navigate = useNavigate();

  const fetchReferrals = async () => {
    setRefLoading(true);
    try {
      const data = await getReferrals(debouncedSearch, sort);
      setReferrals(data?.data?.referrals || []);
    } catch (err) {
      console.log(err);
    } finally {
      setRefLoading(false);
    }
  };

  useEffect(() => {
    fetchReferrals();
     setCurrentPage(1);
  }, [debouncedSearch, sort]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div className="max-w-6xl mx-auto  py-8 my-4 bg-white rounded-lg border border-gray-200">
      <h1 className="text-xl font-bold mb-4 px-4">All referrals</h1>
      <div className="flex items-center justify-between px-4 gap-4 ">
        <div className="flex items-center  gap-4 mb-4">
          <label
            htmlFor="search"
            className="block text-base font-medium text-gray-700 "
          >
            Search
          </label>

          <input
            type="text"
            id="search"
            placeholder="Name or service..."
            value={search}
            className="border border-gray-400 rounded-md py-1 px-2 focus:outline-none "
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center  gap-4 ">
          <label
            htmlFor="sort"
            className="block text-base font-medium text-gray-700 "
          >
            Sort by date
          </label>
          <select
           id="sort"
            className="border border-gray-400 rounded-md py-2 px-3 focus:outline-none "
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="desc">Newest first</option>
            <option value="asc">Oldest first</option>
          </select>
        </div>
      </div>
      {refLoading ? (
        <div className="min-h-screen flex items-center justify-center">
          <p>Loading...</p>
        </div>
      ) : referrals.length == 0 ? (
        <div className="text-center py-4">No matching entries</div>
      ) : (
        <table className="w-full text-left bg-white">
          <thead>
            <tr className="bg-[#f4f6fb] text-gray-700 h-10">
              <th className="w-1/4 px-4">Name</th>
              <th className="w-1/4 px-4">Service</th>
              <th className="w-1/4 px-4">Date</th>
              <th className="w-1/4 px-4">Profit</th>
            </tr>
          </thead>
          <tbody>
            {currentReferrals.map((referral) => (
              <tr
                className="border-b hover:bg-[#b9bae9] hover:text-white hover:cursor-pointer  border-gray-200   h-8"
                key={referral.id}
                onClick={() => navigate(`/referral/${referral.id}`)}
              >
                <td className="px-4">{referral.name}</td>
                <td className="px-4">{referral.serviceName}</td>
                <td className="px-4">{formatDate(referral.date)}</td>
                <td className="px-4  font-bold">
                  {formatCurrency(referral.profit)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="flex justify-between mr-5"> 
      <p className="text-sm text-gray-500 p-2">
        Showing {startIndex + 1}–{Math.min(endIndex, referrals.length)} of{" "}
        {referrals.length} entries
      </p>
      <div className="flex items-center gap-2">
  <button
    disabled={currentPage === 1}
     className="disabled:cursor-not-allowed hover:cursor-pointer"
    onClick={() => setCurrentPage((prev) => prev - 1)}
  >
    Previous
  </button>
  <p className="h-10 w-10 bg-[#6e70f1] flex justify-around items-center text-white font-bold mt-2 rounded-lg"> {currentPage}</p>

  <button
  className="disabled:cursor-not-allowed hover:cursor-pointer"
    disabled={currentPage === totalPages}
    onClick={() => setCurrentPage((prev) => prev + 1)}
  >
    Next
  </button>
</div>
    </div>
    </div>
  );
};

export default ReferralTable;
