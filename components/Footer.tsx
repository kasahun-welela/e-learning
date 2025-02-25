import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-white">
      <div className="md:flex justify-between max-w-[90%] mx-auto py-5">
        <div>
          <Image
            src="/logo.png"
            alt="logo"
            className="bg-primary"
            width={40}
            height={40}
          />
          <ul>
            <li>
              <Link href="#">hello@skillbridge.com</Link>
            </li>
            <li>
              <Link href="#">+91 91813 23 2309</Link>
            </li>
            <li>
              <Link href="#">Somewhere in the World</Link>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-10">
          <div>
            <h1 className="font-semibold pb-2">Home</h1>
            <ul>
              <li>
                <Link href="#">Benefits</Link>
              </li>
              <li>
                <Link href="#">Our Courses</Link>
              </li>
              <li>
                <Link href="#">Our Testimonials</Link>
              </li>
              <li>
                <Link href="#">Our FAQ</Link>
              </li>
            </ul>
          </div>
          <div>
            {" "}
            <h1 className="font-semibold pb-2">About US</h1>
            <ul>
              <li>
                <Link href="#">Company</Link>
              </li>
              <li>
                <Link href="#">Achievements</Link>
              </li>
              <li>
                <Link href="#">Our Goals</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
