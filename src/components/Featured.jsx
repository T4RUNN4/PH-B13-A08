import FeaturedCard from "./FeaturedCard";
import { animalsFetch } from "@/utils/animalsFetch";

const animals = await animalsFetch();
const Featured = () => {
  return (
    <div className="pt-20 flex flex-col items-center justify-center bg-base-200 px-10 md:px-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
        <span className="text-red-500">Featured</span> Animals
      </h1>
      <p className="text-sm text-gray-700 mb-10">Top animals of the Hat</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {animals.map((animal) => {
          if (animal.isFeatured) {
            return (
              <FeaturedCard
                key={animal.id}
                name={animal.name}
                price={animal.price}
                img={animal.image}
                id={animal.id}
                type={animal.type}
                category={animal.category}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Featured;
