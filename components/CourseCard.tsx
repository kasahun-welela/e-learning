import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { courses } from "@/dummyData";

export default function CourseCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {courses.map((course) => (
        <Card className="max-w-md">
          <CardHeader>
            <Image src="/mobile.png" alt="mobile" width={1000} height={1000} />
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-2">
                <p className="text-gray-800 bg-white shadow py-1 px-2 border">
                  10 Weeks
                </p>
                <p className="text-gray-800 bg-white shadow py-1 px-2 border">
                  Beginner
                </p>
              </div>
              <p>By michael</p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Become proficient in front-end web development. Learn HTML, CSS,
              JavaScript, and popular frameworks like Bootstrap and React. Build
              interactive and responsive websites.
            </p>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-slate-200 text-black">
              Get it Now
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
