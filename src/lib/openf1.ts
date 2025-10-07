export async function fetchSeasons() {
  const res = await fetch("https://api.openf1.org/v1/sessions");
  
  if (!res.ok) throw new Error("An error ocurred while fetching seasons");

  const data = await res.json();
  const years = [...new Set(data.map((s: any) => s.year))].sort();

  return years;
}

export async function fetchRaces(year: string) {
  const res = await fetch(`https://api.openf1.org/v1/sessions?year=${year}`);

  if (!res.ok) throw new Error("An error ocurred while fetching races");

  const data = await res.json();

  const races = Array.from(
    new Map(
      data.map((s: any) => [`${s.country_name}-${s.circuit_short_name}`, { country: s.country_name, track: s.circuit_short_name }])
    ).values()
  );

  return races;
}

export async function fetchSessions(year: string, track: string) {
  const res = await fetch(`https://api.openf1.org/v1/sessions?year=${year}&circuit_short_name=${track}`);
  
  if (!res.ok) throw new Error("An error occurred while fetching sessions");

  const data = await res.json();

  const sessions = data.map((s: any) => ({
    session_name: s.session_name,
    date: s.date_start,
    session_key: s.session_key
  }));

  return sessions;
}