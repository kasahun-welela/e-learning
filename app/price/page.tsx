import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function page() {
  const freeplan = [
    {
      featureName: "Access to selected free courses.",
      isAvailable: true,
    },
    {
      featureName: "Limited course materials and resources.",
      isAvailable: true,
    },
    {
      featureName: "Basic community support.",
      isAvailable: true,
    },
    {
      featureName: "No certification upon completion.",
      isAvailable: true,
    },
    {
      featureName: "Ad-supported platform.",
      isAvailable: true,
    },
    {
      featureName: "Access to exclusive Pro Plan community forums.",
      isAvailable: false,
    },
    {
      featureName: "Early access to new courses and updates.",
      isAvailable: false,
    },
  ];
  const proPlan = [
    {
      featureName: "Unlimited access to all courses.",
      isAvailable: true,
    },
    {
      featureName: "Unlimited course materials and resources.",
      isAvailable: true,
    },
    {
      featureName: "Priority support from instructors.",
      isAvailable: true,
    },
    {
      featureName: "Course completion certificates.",
      isAvailable: true,
    },
    {
      featureName: "Ad-free experience.",
      isAvailable: true,
    },
    {
      featureName: "Access to exclusive Pro Plan community forums.",
      isAvailable: true,
    },
    {
      featureName: "Early access to new courses and updates.",
      isAvailable: true,
    },
  ];

  return (
    <div className="max-w-[90%] mx-auto">
      <div className="rounded-xl border  text-card-foreground py-4 max-w-sm">
        <h2 className="bg-primary/30 text-center py-3 mx-3 rounded">
          Free Plan
        </h2>
        <h1 className="text-5xl font-bold text-center ">
          $0 <span className="text-lg">/month</span>
        </h1>
        <Card className="mx-3">
          <CardHeader>
            <CardTitle>Available Feature</CardTitle>
          </CardHeader>
          <CardContent>
            {freeplan.map((plan) => (
              <div className="my-2 flex justify-start gap-3 items-center rounded border bg-card text-foreground py-3 px-2">
                <i
                  className={` ${
                    plan.isAvailable ? "ri-check-line" : "ri-close-fill"
                  } bg-primary/25 px-0.5`}
                ></i>
                <p className="text-muted-foreground">{plan.featureName}</p>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button className="w-full"> Get Started</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
