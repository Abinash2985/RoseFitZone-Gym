import React, { useEffect, useState } from "react";

export default function Footer() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
        <div className="flex flex-col gap-2 md:flex-row md:items-center">
          <p className="text-center md:text-left text-sm sm:text-base">
            &copy; 2025 RoseFitZone Gym. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-4 md:mt-0 items-center justify-center">
          <div className="flex gap-4">
            <a href="#" className="hover:text-yellow-400 text-sm sm:text-base">
              Facebook
            </a>
            <a href="#" className="hover:text-yellow-400 text-sm sm:text-base">
              Instagram
            </a>
            <a href="#" className="hover:text-yellow-400 text-sm sm:text-base">
              Twitter
            </a>
          </div>
          <button
            className="mt-2 sm:mt-0 ml-0 sm:ml-4 px-4 py-2 bg-yellow-400 text-gray-900 font-bold rounded shadow border border-yellow-300 w-full sm:w-auto text-sm sm:text-base"
            style={{ minWidth: 180 }}
            disabled
          >
            {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
          </button>
        </div>
      </div>
    </footer>
  );
}