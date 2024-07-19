import { Cobe } from "@/components/cobe";
import Image from "next/image";

export default function Home() {
  return (
    <main className="font-mono flex justify-center items-center min-h-screen flex-col p-24 lg:w-3/5">
      <h1 className="text-3xl font-bold text-center">
        Welcome to Feedev, the dev social media platform
      </h1>
      <div className="bg-gray-950 rounded-2xl p-6 mt-4 w-full">
        <div className="flex justify-center lg:justify-start">
          <a href="" className="px-4 py-2 mx-2 bg-gray-800 rounded-lg">
            Login
          </a>
          <a href="" className="px-4 py-2 mx-2 bg-gray-800 rounded-lg">
            Register
          </a>
          <a href="" className="px-4 py-2 mx-2 bg-gray-800 rounded-lg">
            About
          </a>
        </div>
      </div>
      <Cobe />
    </main>
  );
}
