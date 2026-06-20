

const ShareReferral = ({ referral }) => {
  const handleCopy = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    alert("Copied!");
  } catch (err) {
    console.error(err);
  }
};
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 my-4 bg-white rounded-lg">
      <h2 className="text-xl font-bold mb-4">Refer friends and earn more</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className=" p-4">
          <h3 className="text-sm text-gray-400">YOUR REFERRAL LINK</h3>
          <div className="flex gap-2 items-center"> 
          <p className="w-full bg-[#f4f6fb] border border-gray-200  shadow-md rounded-lg p-2">{referral.link}</p>
          <button onClick={() => handleCopy(referral.link)} className="bg-[#6e70f1] text-white px-4 py-2 rounded-lg hover:cursor-pointer">copy</button>
         </div>
        </div>
         <div className=" p-4">
          <h3 className="text-sm text-gray-400">YOUR REFERRAL CODE</h3>
          <div className="flex gap-2 items-center"> 
          <p className="w-full bg-[#f4f6fb] border border-gray-200  shadow-md rounded-lg p-2">{referral.code}</p>
          <button   onClick={() => handleCopy(referral.code)} className="bg-[#6e70f1] text-white px-4 py-2 rounded-lg hover:cursor-pointer">copy</button>
         </div>
        </div>
      </div>
    </div>
  )
}

export default ShareReferral