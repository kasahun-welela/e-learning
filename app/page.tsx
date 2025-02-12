import Hero from "@/components/Hero";
import PathCard from "@/components/PathCard";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="max-w-[90%] mx-auto">
      <Hero />
      <SectionTitle
        title="Benefits"
        description="  Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
          elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
          habitasse in velit fringilla feugiat senectus in."
      />
      <PathCard />

      <SectionTitle
        title="Our Courses"
        description="  Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
          elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
          habitasse in velit fringilla feugiat senectus in."
      />
    </div>
  );
}
