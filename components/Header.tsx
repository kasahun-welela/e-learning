import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="max-w-[90%] mx-auto flex justify-between py-5">
        <div>
          <ul className="flex justify-between gap-4 items-center text-gray-700">
            <Image
              src="/logo.png"
              alt="logo"
              className="bg-primary"
              width={30}
              height={30}
            />
            <li>
              <Link className="hover:text-primary" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/">
                Courses
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/">
                About Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/">
                Pricing
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex justify-between gap-4 text-gray-700">
            <li>
              <Link className="hover:text-primary" href="/">
                Sign Up
              </Link>
            </li>
            <li>
              <Link
                className="bg-primary text-white py-3 px-4 rounded hover:bg-primary/75"
                className="hover:text-primary"
                href="/login"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
