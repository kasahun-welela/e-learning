import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function page() {
  const cardDetail = [
    {
      img: "",
      title: "Trusted by Thousands",
      description:
        "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.",
    },
    {
      img: "",
      title: "Award-Winning Courses",
      description:
        "Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies.",
    },
    {
      img: "",
      title: "Positive Student Feedback",
      description:
        "We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials.",
    },
    {
      img: "",
      title: "Industry Partnerships",
      description:
        "We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies",
    },
  ];

  return (
    <div className="max-w-[90%] mx-auto">
      <div className="py-6 md:flex justify-between items-center">
        <h1 className="font-semibold text-3xl md:text-4xl md:basis-1/2">
          About Skillbridge
        </h1>
        <p className="text-sm md:text-base text-muted-foreground md:basis-1/2">
          Welcome to our platform, where we are passionate about empowering
          individuals to master the world of design and development. We offer a
          wide range of online courses designed to equip learners with the
          skills and knowledge needed to succeed in the ever-evolving digital
          landscape.
        </p>
      </div>

      <div className="py-4">
        <h1 className="font-semibold text-2xl md:text-3xl">Achievements</h1>
        <p className="text-sm md:text-base text-muted-foreground ">
          Our commitment to excellence has led us to achieve significant
          milestones along our journey. Here are some of our notable
          achievements
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cardDetail.map((detail) => (
          <Card>
            <CardHeader>
              <Image src="/tool.png" alt="tool" width={50} height={50} />
              <CardTitle>{detail.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground ">{detail.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
