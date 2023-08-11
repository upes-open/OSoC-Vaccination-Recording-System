import axios from "axios";
import React, { useEffect, useState } from "react";

export default function VaccinesRecord() {
  const [records, setRecords] = useState(null);
  // const { port } = require('../server/server');
  const port = 5000;
  console.log(port)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:${port}/allvaccines`);
        setRecords(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {records &&
        records.map((feed) => (
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6" key={feed._id}>
            <h2 className="text-lg font-semibold mb-4">{feed.name}</h2>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <p className="mb-2">
                  <span className="font-semibold">Date of birth:</span> {feed.dob}
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Contact NUmber:</span> {feed.contact}
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Vaccine:</span> {feed.vaccinationType}
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Date of vaccination:</span> {feed.date}
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Time of vaccination:</span> {feed.time}
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Preferred Method:</span> {feed.preferredMethod}
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Description:</span> {feed.description}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
