import SectionHeader from "@/components/SectionHeader";
import {
  Card,
  CardContent,
  CardDescription,
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
        <CardHeader>
          <CardTitle>Web Design Fundamentals</CardTitle>
          <CardDescription>
            Learn the fundamentals of web design, including HTML, CSS, and
            responsive design principles. Develop the skills to create visually
            appealing and user-friendly websites.
          </CardDescription>
          <Link href="/">View Course</Link>
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
      </Card>
    </div>
  );
}
