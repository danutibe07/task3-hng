import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-10 bg-white text-purple-600 py-4 text-center fixed bottom-0 w-full border-solid border-purple-600 border-2">
      <div className="container mx-auto">
        <p className="font-bold">
          Daniel | {" "}
          <Link href="https://github.com/danutibe07/task3-hng">
             Source Code
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
