import AnimalCard from "@/components/AnimalCard";

const animalsFetch = async () => {
  const res = await fetch("http://qurbani-hat-tarunna.vercel.app/animals.json");
  const data = res.json();

  return data;
};

const AnimalsPage = async () => {
  const animals = await animalsFetch();

  return (
    <div className="py-20 flex flex-col items-center justify-center bg-base-200 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
        All Animals
      </h1>
      <p className="text-sm text-gray-700 mb-10">
        Qurbani animals available in the Hat
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {animals.map((animal) => {
          return (
            <AnimalCard
              key={animal.id}
              name={animal.name}
              price={animal.price}
              img={animal.image}
              desc={animal.description}
              id={animal.id}
              featured={animal.isFeatured}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AnimalsPage;
