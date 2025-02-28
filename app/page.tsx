import CourseCard from "@/components/CourseCard";
import Hero from "@/components/Hero";
import PathCard from "@/components/PathCard";
import SectionTitle from "@/components/SectionTitle";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";
import container from "@/public/container.png";

export default function Home() {
  return (
    <div className="max-w-[90%] mx-auto">
      <Hero />
      <Image src={container} alt="video container" />
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
      <CourseCard />
      <SectionTitle
        title="Our Testimonials"
        description="  Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
          elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
          habitasse in velit fringilla feugiat senectus in."
      />
      <Testimonial />
    </div>
  );
}
