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