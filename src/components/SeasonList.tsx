import React from "react";
import { fetchSeasons } from "../lib/openf1";
import Link from "next/link";

export default async function SeasonsList() {
  const years = (await fetchSeasons()) as string[];

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Available seasons:</h1>
      <ul className="list-disc ml-6">
        {years.map((year, key) => (
          <li key={year}>
            <Link
              href={`/seasons/${year}`}
              className="text-blue-500 hover:underline"
            >
              {year}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
