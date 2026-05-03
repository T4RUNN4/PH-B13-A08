import Image from "next/image";
import Link from "next/link";
import { MoveRight } from 'lucide-react';

export default function AnimalCard({ id, name, price, img, desc, featured }) {
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="p-3">
        <div className="w-62.5 h-62.5 relative overflow-hidden rounded-md">
          <Image src={img} alt={name} fill className="object-cover" />
        </div>
      </figure>
      <div className="card-body">
        {featured === true ? (
          <p className="badge badge-soft bg-red-600 text-white">Featured</p>
        ) : (
          ""
        )}
        <h2 className="card-title">{name}</h2>
        <p>{desc}</p>
        <p className="mt-2 font-bold">Price: {price}</p>

        <Link
          href={`/animals/${id}`}
          className="btn btn-primary bg-red-500 border-0 text-white hover:bg-red-600 mt-4"
        >
           View Details <MoveRight />
        </Link>
      </div>
    </div>
  );
}
