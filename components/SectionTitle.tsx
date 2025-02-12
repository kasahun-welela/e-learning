import { Button } from "./ui/button";
interface propsData {
  title: string;
  description: string;
}

export default function SectionTitle({ title, description }: propsData) {
  return (
    <div className="py-6">
      <h1 className="font-semibold text-3xl md:text-4xl">{title}</h1>
      <div className="space-y-4 md:flex justify-between items-center ">
        <p className="text-sm md:text-base text-muted-foreground md:basis-3/5">
          {description}
        </p>
        <Button className="bg-white text-gray-900">View All</Button>
      </div>
    </div>
  );
}
