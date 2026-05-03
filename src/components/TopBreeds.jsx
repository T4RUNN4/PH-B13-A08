import FeaturedCard from "./FeaturedCard";
import BookingModal from "./BookingModal";
import Image from "next/image";
import { animalsFetch } from "@/utils/animalsFetch";

export default async function TopBreeds() {
  const animals = await animalsFetch();
  const targetAnimal = animals.filter(
    (animal) => animal.breed === "Friesian Cross",
  );

  return (
    <div className="py-20 flex flex-col items-center justify-center bg-base-200 px-10">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
        Top <span className="text-red-500">Breeds</span>
      </h1>
      <p className="mb-14 text-gray-700">Best breed of the Hat</p>
      {targetAnimal.map((animal) => (
        <div
          key={animal.id}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center"
        >
          <Image
            src={animal.image}
            alt={animal.breed}
            height={300}
            width={500}
            className="rounded-md drop-shadow-xl"
          ></Image>
          <div className="flex flex-col gap-1.5">
            <div className="flex gap-2">
              {animal.isFeatured === true ? (
                <p className="badge badge-soft bg-red-600 text-white">
                  Featured
                </p>
              ) : (
                ""
              )}
              <p
                className={`${animal.type === "Goat" ? "badge badge-soft badge-success" : "badge badge-soft badge-warning"}`}
              >
                {animal.type}
              </p>
              <p
                className={`${animal.category === "Large Animal" ? "badge badge-soft badge-success" : "badge badge-soft badge-warning"}`}
              >
                {animal.category}
              </p>
            </div>
            <h1 className="text-4xl font-bold">{animal.breed}</h1>
            <p className="text-lg">{animal.description}</p>
            <BookingModal name={animal.breed} />
          </div>
        </div>
      ))}
    </div>
  );
}
