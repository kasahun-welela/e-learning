import SectionHeader from "@/components/SectionHeader";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
// import web from "@/public/web.png";
// import web2 from "@/public/web2.png";
// import web3 from "@/public/web3.png";

export default function page() {
  return (
    <div className="max-w-[90%] mx-auto">
      <SectionHeader
        title="Online Courses on Design and Development"
        description="Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey."
      />
      <Card>
        <CardHeader className="md:flex justify-between">
          <div>
            <CardTitle>Web Design Fundamentals</CardTitle>
            <CardDescription>
              Learn the fundamentals of web design, including HTML, CSS, and
              responsive design principles. Develop the skills to create
              visually appealing and user-friendly websites.
            </CardDescription>
          </div>
          <div>
            <Link
              href="/"
              className="rounded p-3 border bg-gray-50 text-gray-800 hover:text-primary"
            >
              View Course
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <div className="md:px-6 flex justify-center gap-1 md:gap-2 lg:gap-5">
            <Image
              src="/web.png"
              className="w-24 h-[100px] md:w-96 md:h-[326px]"
              width={386}
              height={326}
              alt="web"
            />
            <Image
              src="/web2.png"
              className="w-24 h-[100px] md:w-96 md:h-[326px]"
              width={386}
              height={326}
              alt="web"
            />
            <Image
              src="/web3.png"
              className="w-24 h-[100px] md:w-96 md:h-[326px]"
              width={386}
              height={326}
              alt="web"
            />
          </div>
          <div className="pt-3 flex justify-between items-center text-sm">
            <div className="flex gap-2">
              <p className="text-gray-800 bg-white shadow py-1 px-2 border">
                10 Weeks
              </p>
              <p className="text-gray-800 bg-white shadow py-1 px-2 border">
                Beginner
              </p>
            </div>
            <p className="font-semibold">By Sara</p>
          </div>
        </CardContent>
        <CardFooter>
          <div className="px-4 rounded-xl border bg-card text-card-foreground">
            <div className="border-b-2 w-full">
              <h1 className="py-3 font-semibold">Curriculum</h1>
            </div>
            <div className="my-2 md:flex gap-4">
              <div className="p-3 space-y-3 border-b md:border-b-0  md:border-l bg-card text-card-foreground">
                <h1 className="text-4xl font-bold md:font-extrabold">01</h1>
                <p className="font-semibold">Introduction to HTML</p>
              </div>
              <div className="p-3 space-y-3 border-b md:border-b-0  md:border-l bg-card text-card-foreground">
                <h1 className="text-4xl font-bold md:font-extrabold">02</h1>
                <p className="font-semibold">Styling with CSS</p>
              </div>
              <div className="p-3 space-y-3 border-b md:border-b-0  md:border-l bg-card text-card-foreground">
                <h1 className="text-4xl font-bold md:font-extrabold">03</h1>
                <p className="font-semibold">
                  Introduction to Responsive Design
                </p>
              </div>
              <div className="p-3 space-y-3 border-b md:border-b-0  md:border-l bg-card text-card-foreground">
                <h1 className="text-4xl font-bold md:font-extrabold">04</h1>
                <p className="font-semibold">Design Principles for Web</p>
              </div>
              <div className="p-3 space-y-3 border-b md:border-b-0  md:border-l bg-card text-card-foreground">
                <h1 className="text-4xl font-bold md:font-extrabold">05</h1>
                <p className="font-semibold">Building a Basic Website</p>
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
