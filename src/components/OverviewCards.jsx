
const OverviewCards = ({ metrics }) => {
    console.log(metrics);
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 my-4 bg-white rounded-lg">
      <h2 className="text-xl font-bold mb-4">Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {metrics.map((m)=> 
            <div key={m.id} className="bg-white shadow-lg border border-gray-200 rounded-lg p-4">
                <p>{m.value}</p>
              <h3 className="text-base text-gray-600">{m.label}</h3>
            
            </div>
          )}
        </div>
    </div>
  )
}

export default OverviewCards