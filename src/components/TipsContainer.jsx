import Tips from "./Tips";

const tipsFetch = async () => {
  const res = await fetch("http://qurbani-hat-tarunna.vercel.app/tips.json");
  const data = res.json();

  return data;
};

const TipsContainer = async () => {
  const tips = await tipsFetch();

  return (
    <>
      <div className="py-20 flex flex-col items-center justify-center bg-base-200 px-4 md:px-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-10">
          <span className="text-red-500">Qurbani</span> Tips
        </h1>
          {tips.map((tip) => {
            return (
              <Tips key={tip.id} qus={tip.question} ans={tip.answer}></Tips>
            );
          })}
      </div>
    </>
  );
};

export default TipsContainer;
