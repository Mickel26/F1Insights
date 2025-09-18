import React from 'react'
import { fetchRaces } from '../../../lib/openf1'

export default async function Page({ params }: { params: Promise<{ year: string }> }) {
    const { year } = await params
    const races = await fetchRaces(year) as string[]
    console.log(races)

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-2">Races in {year}</h1>
            <ul className="list-disc ml-6">
                {races.map((race, index) => (
                    <li key={`${year}-${race}-${index}`}>{race}</li>
                ))}
            </ul>
        </div>
    )
}