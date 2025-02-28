import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { benefit } from "@/dummyData";

interface Path {
  id: string;
  title: string;
  description: string;
}

export default function PathCard() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {benefit.map((path: Path) => (
          <Card key={path.id}>
            <CardHeader className="md:text-6xl text-5xl">
              <CardTitle className="text-end ">{path.id}</CardTitle>
              <CardDescription className="font-semibold text-xl">
                {path.title}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700">{path.description} </p>
            </CardContent>
            <CardFooter className="flex justify-end ">
              <i className="ri-arrow-right-up-line bg-muted shadow py-3 px-4 text-primary"></i>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
