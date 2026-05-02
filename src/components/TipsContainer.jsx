import Tips from "./Tips";
import { tipsFetch } from "@/utils/tipsFetch";

const tips = await tipsFetch();
const TipsContainer = async () => {
  return (
    <>
      <div className="pt-28 pb-8 flex flex-col items-center justify-center bg-base-200 px-10 md:px-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-10">
          <span className="text-red-500">Qurbani</span> Tips
        </h1>
        {tips.map((tip, index) => {
          return <Tips key={index} qus={tip.question} ans={tip.answer}></Tips>;
        })}
      </div>
    </>
  );
};

export default TipsContainer;
