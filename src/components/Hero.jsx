import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex flex-col gap-14 lg:flex-row px-14 mx-auto">
        <Image
          src="https://ecdn.dhakatribune.net/contents/cache/images/1200x630x1xxxxx1x694528/uploads/dten/2018/08/mehedi-hasan00044-1534795869338.jpg?watermark=media%2F2023%2F05%2F28%2F1280px-Dhaka_Tribune_Logo.svg-1-a9e61c86dded62d74300fef48fee558f.png"
          width={900}
          height={530}
          alt="Qurbani Hat"
          className="rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold text-gray-800">
            Tired of visiting <br />
            <span className="text-red-500">Physical Qurbani Hat</span>{" "}
          </h1>
          <p className="py-6 text-gray-600">
            Well, fear no more. Because Qurbani Hat is here to save you from hassele of physical labour. Now you can purchase your Qurbani animals just from your home with just a few clicks.
          </p>
          <Link
            href="/animals"
            className="btn btn-primary bg-red-500 border-0 text-white hover:bg-red-600"
          >
            Browse animals
          </Link>
        </div>
      </div>
    </div>
  );
}
