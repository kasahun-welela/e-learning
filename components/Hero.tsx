import Image from "next/image";
import { Button } from "./ui/button";
import heroIcon from "@/public/heroIcon.png";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center gap-7 my-7 md:my-16">
      <div className="shadow py-3 bg-white flex gap-2 items-center px-2 rounded">
        <Image src={heroIcon} alt="" />
        <h1 className="font-semibold text-lg md:text-4xl   py-2 pr-3">
          <span className="text-primary">Unlock</span> Your Creative Potential{" "}
        </h1>
      </div>

      <div className="text-center">
        <p className="font-medium md:text-3xl text-2xl">
          With Online Design and Development Courses.
        </p>
        <p className="md:text-base text-sm py-2">
          Learn from Industry Experts and Enhance Your Skills.
        </p>
      </div>
      <div className="space-x-4">
        <Button className="font-semibold text-sm text-white ">
          {" "}
          Explore Courses
        </Button>
        <Button className="font-semibold text-sm bg-white text-gray-700 hover:text-white">
          {" "}
          View Pricing
        </Button>
      </div>
    </div>
  );
}
