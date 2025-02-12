import Hero from "@/components/Hero";
import PathCard from "@/components/PathCard";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="max-w-[90%] mx-auto">
      <Hero />
      <div className="py-6">
        <h1 className="font-semibold text-3xl md:text-4xl">Benefits</h1>
        <div className="space-y-4 md:flex justify-between">
          <p className="text-sm md:text-base text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
          <Button className="bg-white text-gray-900">View All</Button>
        </div>
      </div>

      <PathCard />
    </div>
  );
}
