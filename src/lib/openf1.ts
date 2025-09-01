export async function fetchSeasons() {
  const res = await fetch("https://api.openf1.org/v1/sessions");
  
  if (!res.ok) throw new Error("An error ocurred while fetching seasons");

  const data = await res.json();
  const years = [...new Set(data.map((s: any) => s.year))].sort();

  return years;
}