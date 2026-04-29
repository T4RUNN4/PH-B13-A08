import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-red-500">404 Not Found!</h1>
          <p className="pt-3 pb-6">
            You came too far away from the Hat in the wrong direction.
          </p>
          <Link
          href="/"
          className="btn btn-primary bg-red-500 border-0 text-white hover:bg-red-600"
        >
          Return to Qurbani Hat
        </Link>
        </div>
      </div>
    </div>
  );
}
