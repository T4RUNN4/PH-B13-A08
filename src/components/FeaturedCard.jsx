import Image from "next/image";
import Link from "next/link";
import { MoveRight } from 'lucide-react';

export default function FeaturedCard({ id, name, price, img, type, category }) {
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="p-3 rounded-md">
        <Image src={img} alt={name} height={250} width={250} />
      </figure>
      <div className="card-body">
        <div className="flex gap-2">
          <p
            className={`${type === "Goat" ? "badge badge-soft badge-success" : "badge badge-soft badge-warning"}`}
          >
            {type}
          </p>
          <p
            className={`${category === "Large Animal" ? "badge badge-soft badge-success" : "badge badge-soft badge-warning"}`}
          >
            {category}
          </p>
        </div>
        <h2 className="card-title">{name}</h2>
        <p>Price: {price}</p>

        <Link
          href={`/animals/${id}`}
          className="btn btn-primary bg-red-500 border-0 text-white hover:bg-red-600 mt-4"
        >
          View Details  <MoveRight />
        </Link>
      </div>
    </div>
  );
}
