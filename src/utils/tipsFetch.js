export const tipsFetch = async () => {
  const res = await fetch("http://qurbani-hat-tarunna.vercel.app/tips.json");
  const data = res.json();

  return data;
};
