export const animalsFetch = async () => {
  const res = await fetch("http://qurbani-hat-tarunna.vercel.app/animals.json");
  const data = await res.json();

  return data;
};
