import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center gap-7 py-20 md:py-28">
      <div className="shadow-md flex items-center justify-center gap-3 ">
        <i className="ri-flashlight-fill bg-red-50 p-2"></i>
        <h1 className="font-semibold text-base md:text-4xl bg-white  py-2 px-4">
          <span className="text-primary">Unlock</span> Your Creative Potential{" "}
        </h1>
      </div>

      <div className="text-center">
        <p className="font-medium md:text-3xl text-2xl">
          with Online Design and Development Courses.
        </p>
        <p className="md:text-base text-sm ">
          Learn from Industry Experts and Enhance Your Skills.
        </p>
      </div>
      <div className="space-x-4">
        <Button className="font-semibold text-sm text-white ">
          {" "}
          Explore Courses
        </Button>
        <Button className="font-semibold text-sm bg-white text-gray-700">
          {" "}
          View Pricing
        </Button>
      </div>
    </div>
  );
}
