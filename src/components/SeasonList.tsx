"use client";

import React, { useEffect, useState } from "react";
import { fetchSeasons } from "../lib/openf1";

export default function SeasonsList() {
  const [years, setYears] = useState<number[]>([]);

  useEffect(() => {
    fetchSeasons()
      .then((data) => setYears(data.map(Number)))
      .catch(console.error);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Available seasons:</h1>
      <ul className="list-disc ml-6">
        {years.map((year) => (
          <li key={year}>{year}</li>
        ))}
      </ul>
    </div>
  );
}
