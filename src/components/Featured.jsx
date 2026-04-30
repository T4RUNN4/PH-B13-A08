import FeaturedCard from "./FeaturedCard";

const animalsFetch = async () => {
  const res = await fetch("http://localhost:3000/animals.json");
  const data = res.json();

  return data;
};

const Featured = async () => {
  const animals = await animalsFetch();

  return (
    <div className="my-20 flex flex-col items-center justify-center gap-10">
      <h1 className="text-5xl font-bold text-gray-800">
        <span className="text-red-500">Featured</span> Animals
      </h1>
      <p className="text-sm text-gray-700">Top animals of the Hat</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {animals.map((animal) => {
          if (animal.isFeatured) {
            return (
              <FeaturedCard
                key={animal.id}
                name={animal.name}
                price={animal.price}
                img={animal.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Featured;
