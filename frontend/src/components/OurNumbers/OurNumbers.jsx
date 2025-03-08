export default function StatisticsSection() {
    const stats = [
      { percentage: "85%", text: "Of our members start with moderate to serve symptom", type: "outline" },
      { percentage: "72%", text: "Of our members start with moderate to serve symptom", type: "filled" },
      { percentage: "95%", text: "Of our members start with moderate to serve symptom", type: "outline" },
      { percentage: "76%", text: "Of our members start with moderate to serve symptom", type: "filled" },
    ];
  
    return (
      <section className="bg-white py-16 px-6 text-center">
        {/* Header */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-indigo-600 text-lg font-semibold flex items-center justify-center gap-2">
            <span role="img" aria-label="stethoscope">🩺</span> Our Numbers
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            By the numbers: excellence in health
          </h2>
          <p className="text-gray-600 mt-4">
            Excellence in healthcare is our standard, and our numbers back it up. From patient
            satisfaction rates to successful treatment outcomes.
          </p>
        </div>
  
        {/* Stats Circles */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center justify-center 
                w-52 h-52 md:w-60 md:h-60 rounded-full text-white 
                ${stat.type === "filled" ? "bg-indigo-700" : "border-4 border-indigo-700 text-indigo-700"}
                ${index % 2 !== 0 ? "mt-6" : ""}`} // Slightly offset alternate circles
            >
              <span className="text-4xl font-bold">{stat.percentage}</span>
              <p className="text-md text-center px-6">{stat.text}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  