import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Loader from "./components/Loader";
import Title from "./components/Title/page";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <Title />
      <p className="text-center m-5 text-purple-600 text-xl">Click the skeleton loader to view the gallery</p>
      <Link href="/gallery">
        <Loader />
      </Link>
    </div>
  );
}

