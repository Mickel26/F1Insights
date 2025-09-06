import React from 'react'
import { fetchRaces } from '../../../lib/openf1'

export default async function Page({ params }: { params: Promise<{ year: string }> }) {
    const { year } = await params
    const races = await fetchRaces(year) as string[]
    console.log(races)

    return (
        <div>
            <h1>Races in {year}</h1>
            <ul>
                {races.map((race, index) => (
                    <li key={`${year}-${race}-${index}`}>{race}</li>
                ))}
            </ul>
        </div>
    )
}