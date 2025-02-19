import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";

export default function Testimonial() {
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {testimonials.map((testimonial) => (
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
              <p className="text-sm font-semibold">{testimonial.name}</p>
            </div>
            <Button className="bg-gray-50 text-gray-900 font-semibold">
              Read Full Story
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
