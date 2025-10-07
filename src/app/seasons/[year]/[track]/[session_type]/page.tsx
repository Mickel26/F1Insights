import React from 'react'
import { fetchSessions } from '../../../../../lib/openf1'
import Link from 'next/link'

export default async function Page({ params }: { params: { year: string; track: string; session_type: string } }) {
    const { year, track } = params
    const sessions = await fetchSessions(year, track)
    console.log('Sessions data:', sessions)

    return (
        <div className="p-4">
            <div className="mb-6">
                <Link href={`/seasons/${year}`} className="text-blue-500 hover:underline">
                    ← Back to {year} races
                </Link>
            </div>

            <h1 className="text-xl font-bold mb-2">Sessions at {track}</h1>
            <ul className="list-disc ml-6">
                {sessions.map((session: any, index: number) => (
                    <Link
                        key={`${year}-${session.session_name}-${index}`}
                        href={`/seasons/${year}/${track}/${session.session_name?.toLowerCase()}`}
                        className="hover:text-blue-500 transition-colors"
                    >
                        <li>{session.session_name}</li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

//uporządkować wyswietlane sesje