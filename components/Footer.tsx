import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-white mt-12 ">
      <div className="md:flex justify-between max-w-[90%] mx-auto py-5">
        <div>
          <Image
            src="/logo.png"
            alt="logo"
            className="bg-primary"
            width={30}
            height={30}
          />
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li className="space-x-2">
              <i className="ri-mail-fill font-bold text-primary"></i>{" "}
              <Link href="#" className="hover:text-primary hover:font-semibold">
                hello@skillbridge.com
              </Link>
            </li>
            <li className="space-x-2">
              <i className="ri-phone-fill font-bold text-primary"></i>{" "}
              <Link href="#" className="hover:text-primary hover:font-semibold">
                +91 91813 23 2309
              </Link>
            </li>
            <li className="space-x-2">
              <i className="ri-map-pin-2-fill font-bold text-primary"></i>
              <Link href="#" className="hover:text-primary hover:font-semibold">
                Somewhere in the World
              </Link>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-10 mt-4 md:mt-0">
          <div>
            <h1 className="font-semibold pb-2">Home</h1>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary ">
                  Benefits
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary ">
                  Our Courses
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary ">
                  Our Testimonials
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary ">
                  Our FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            {" "}
            <h1 className="font-semibold pb-2">About US</h1>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary ">
                  Company
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary ">
                  Achievements
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary ">
                  Our Goals
                </Link>
              </li>
            </ul>
          </div>
          <div>
            {" "}
            <h1 className="font-semibold pb-2">Social Profiles</h1>
            <ul className="flex gap-4">
              <li>
                <Link
                  href="#"
                  className="hover:text-primary hover:font-semibold bg-gray-200 rounded p-2"
                >
                  <i className="ri-facebook-circle-fill text-xl"></i>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary hover:font-semibold bg-gray-200 rounded p-2"
                >
                  <i className="ri-twitter-x-fill text-xl"></i>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary hover:font-semibold bg-gray-200 rounded p-2"
                >
                  <i className="ri-linkedin-box-fill text-xl"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-[90%] mx-auto py-5">
        <hr />
        <p className="pt-6 text-center text-muted-foreground">
          © 2023 Skillbridge. All rights reserved.
        </p>
      </div>
    </div>
  );
}
