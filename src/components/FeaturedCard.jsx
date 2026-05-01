import Image from "next/image";
import Link from "next/link";

export default function FeaturedCard({ id, name, price, img }) {
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="p-3 rounded-md">
        <Image src={img} alt={name} height={250} width={250} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Price: {price}</p>

        <Link href={`/animals/${id}`} className="btn btn-primary bg-red-500 border-0 text-white hover:bg-red-600 mt-4">
          View Details
        </Link>
      </div>
    </div>
  );
}
