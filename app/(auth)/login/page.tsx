import Login from "@/components/Login";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function page() {
  const testimonials = [
    {
      comment:
        "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
      name: "Sara L",
      img: "/sara.png",
    },
    {
      comment:
        "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
      name: "Jason M",
      img: "/jason.png",
    },

    {
      comment:
        "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!",
      name: "Emily R",
      img: "/emily.png",
    },
    {
      comment:
        "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!",
      name: "Michael K",
      img: "/michael.png",
    },
  ];
  return (
    <div className="max-w-[90%] mx-auto ">
      <div className="md:flex flex-row-reverse  items-center justify-center gap-12">
        <div className="md:basis-1/2">
          <Login />
        </div>

        <div className="md:basis-1/2">
          <h1 className="font-semibold text-3xl md:text-4xl mt-6">
            Students Testimonials
          </h1>
          <p className="text-sm text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="py-4"
          >
            <CarouselContent>
              {testimonials.map((testimonial, key) => (
                <CarouselItem key={key}>
                  <Card>
                    <CardHeader>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.comment}
                      </p>
                    </CardHeader>
                    <CardContent className="flex justify-between items-center py-5">
                      <div className="flex items-center gap-3">
                        <Image
                          src={testimonial.img}
                          alt={testimonial.name}
                          width={50}
                          height={50}
                        />
                        <p className="text-sm font-semibold">
                          {testimonial.name}
                        </p>
                      </div>
                      <Button className="bg-gray-50 text-gray-900 font-semibold">
                        Read Full Story
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselNext />
              <CarouselPrevious />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
