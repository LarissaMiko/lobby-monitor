import React from "react";

const MVVMonitor: React.FC = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white text-black">
      <h1 className="text-4xl mt-5 font-bold mb-8">Abfahrten: </h1>

      {/* Abfahrtstafel im iframe */}
      <iframe
        src="/mvv_monitor_test.html"
        title="MVV Abfahrtsmonitor"
        className="w-full max-w-4xl h-[800px] border border-gray-300 rounded-lg shadow-lg"
      ></iframe>

      {/* Zurück-Button */}
      <button
        className="mt-8 px-6 py-3 text-2xl border-2 border-black bg-transparent rounded-lg hover:bg-black hover:text-white transition duration-300"
        onClick={() => window.history.back()}
      >
        Zurück 
      </button>
    </div>
  );
};

export default MVVMonitor;
