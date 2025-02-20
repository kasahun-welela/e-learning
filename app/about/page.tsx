import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function page() {
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
        <Card>
          <CardHeader>
            <Image src="/tool.png" alt="tool" width={50} height={50} />
            <CardTitle>Trusted by Thousands</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground ">
              We have successfully served thousands of students, helping them
              unlock their potential and achieve their career goals.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Image src="/tool.png" alt="tool" width={50} height={50} />
            <CardTitle>Trusted by Thousands</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground ">
              We have successfully served thousands of students, helping them
              unlock their potential and achieve their career goals.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
