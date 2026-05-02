import FeaturedCard from "./FeaturedCard";
import BookingModal from "./BookingModal";
import Image from "next/image";

export default function TopBreeds() {
  return (
    <div className="py-20 flex flex-col items-center justify-center bg-base-200 px-10">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
        Top <span className="text-red-500">Breeds</span>
      </h1>
      <p className="mb-14 text-gray-700">Best breed of the Hat</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Cow_female_black_white.jpg/1280px-Cow_female_black_white.jpg"
          alt="Friesian Cross"
          height={300}
          width={500}
          className="rounded-md drop-shadow-xl"
        ></Image>
        <div className="flex flex-col gap-1.5">
          <div className="flex gap-2">
            <p className="badge badge-soft bg-red-600 text-white">Featured</p>
            <p className="badge badge-soft badge-warning">Cow</p>
            <p className="badge badge-soft badge-success">Large Animal</p>
          </div>
          <h1 className="text-4xl font-bold">Friesian Cross</h1>
          <p className="text-lg">
            Well-maintained Friesian cross cow with strong build.
          </p>
            <BookingModal name="Friesian Cross" />
        </div>
      </div>
    </div>
  );
}
