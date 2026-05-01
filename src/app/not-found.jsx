import Link from "next/link";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center bg-base-200 py-20">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <DotLottieReact src="/404.lottie" loop autoplay />
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
