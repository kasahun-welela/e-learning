import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import dummyData from "@/dummyData";

interface Path {
  id: string;
  title: string;
  description: string;
}

export default function PathCard() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {dummyData.map((path: Path) => (
          <Card className="max-w-md" key={path.id}>
            <CardHeader className="md:text-6xl text-5xl">
              <CardTitle className="text-end ">{path.id}</CardTitle>
              <CardDescription className="font-semibold text-xl">
                {path.title}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700">{path.description} </p>
            </CardContent>
            <CardFooter className="text-end">
              <i className="ri-arrow-right-up-line shadow p-2 text-primary inline-block"></i>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
