import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { courses } from "@/dummyData";

export default function CourseCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
      {courses.map((course) => (
        <Card className="" key={course.title}>
          <CardHeader>
            <Image
              src={course.img}
              alt={course.title}
              className="w-full h-auto"
            />
            <div className="pt-3 flex justify-between items-center text-sm">
              <div className="flex gap-2">
                <p className="text-gray-800 bg-white shadow py-1 px-2 border">
                  {course.duration}
                </p>
                <p className="text-gray-800 bg-white shadow py-1 px-2 border">
                  {course.level}
                </p>
              </div>
              <p className="font-semibold">By {course.instructor}</p>
            </div>
          </CardHeader>

          <CardContent>
            <h1 className="font-semibold leading-none tracking-tight">
              {course.title}
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              {course.description}
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
