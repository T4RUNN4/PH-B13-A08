import Image from "next/image";
import {
  MapPinHouse,
  Weight,
  CalendarDays,
  VenusAndMars,
  CalendarCheck,
} from "lucide-react";

const animalsFetch = async () => {
  const res = await fetch(
    "https://qurbani-hat-tarunna.vercel.app/animals.json",
  );
  const data = await res.json();
  return data;
};

const AnimalDetails = async ({ params }) => {
  const { id } = await params;

  const animals = await animalsFetch();

  const animal = animals.find((animal) => animal.id === Number(id));

  return (
    <>
      <div className="py-20 flex flex-col items-center justify-center bg-base-200 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
          Animal Details
        </h1>
        <p className="mb-14 text-gray-700">
          Get more detailed info about your primary choice
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center">
          <Image
            src={animal.image}
            alt="animal name"
            height={500}
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
            <h1 className="text-4xl font-bold">{animal.name}</h1>
            <p className="text-lg">{animal.description}</p>

            <div className="flex items-center mt-6 text-sm">
              <VenusAndMars />
              <span className="font-bold ml-1.5 mr-2.5">Breed: </span>
              {animal.breed}
            </div>
            <div className="flex items-center text-sm">
              <MapPinHouse />
              <span className="font-bold ml-1.5 mr-2.5">Location: </span>
              {animal.location}
            </div>
            <div className="flex items-center text-sm">
              <Weight />
              <span className="font-bold ml-1.5 mr-2.5">Weight: </span>
              {animal.weight} kg
            </div>
            <div className="flex items-center text-sm">
              <CalendarDays />
              <span className="font-bold ml-1.5 mr-2.5">Age: </span>
              {animal.age} years
            </div>

            <h1 className="text-4xl font-bold mt-6">
              Price: <span className="text-gray-800">{animal.price} BDT</span>
            </h1>
            <button className="btn btn-primary bg-red-500 border-0 text-white hover:bg-red-600 mt-2">
              <CalendarCheck /> Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimalDetails;
