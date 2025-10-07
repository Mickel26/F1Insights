import React from 'react'
import { fetchRaces } from '../../../lib/openf1'
import Link from 'next/link'

export default async function Page({ params }: { params: { year: string } }) {
    const { year } = params
    const races = await fetchRaces(year) as { country: string; track: string }[]

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-2">Races in {year}</h1>
            <ul className="list-disc ml-6">
                {races.map((race, index) => (
                    <Link 
                        key={`${year}-${race.track}-${index}`} 
                        href={`/seasons/${year}/${race.track}/race`}
                        className="hover:text-blue-500 transition-colors"
                    >
                        <li>{race.country} ({race.track})</li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}