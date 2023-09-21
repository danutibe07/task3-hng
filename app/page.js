import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Loader from "./components/Loader";
import Title from "./components/Title/page";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <Title />
      <Link href="/gallery">
        <Loader />
      </Link>
    </div>
  );
}

