import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  const plans = {
    free: {
      title: "Free Plan",
      price: "$0",
      features: [
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
      ],
    },
    pro: {
      title: "Pro Plan",
      price: "$79",
      features: [
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
      ],
    },
  };

  return (
    <div className="max-w-[90%] mx-auto py-8">
      <div className="rounded-xl border bg-card p-5 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  md:w-[80%] mx-auto">
          {Object.entries(plans).map(([planKey, planData]) => (
            <div key={planKey} className="rounded-xl border bg-muted max-w-md">
              <h2 className="bg-primary/30 text-center py-3 mx-3 rounded my-4">
                {planData.title}
              </h2>
              <h1 className="text-5xl font-bold text-center my-3">
                {planData.price} <span className="text-lg">/month</span>
              </h1>
              <Card className="mx-3 mb-3">
                <CardHeader>
                  <CardTitle className="text-center">
                    Available Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {planData.features.map((feature) => (
                    <div
                      key={feature.featureName}
                      className="my-2 flex justify-start gap-3 items-center rounded border bg-card text-foreground py-3 px-2"
                    >
                      <i
                        className={`${
                          feature.isAvailable
                            ? "ri-check-line"
                            : "ri-close-fill"
                        } bg-primary/25 px-0.5`}
                      ></i>
                      <p className="text-muted-foreground">
                        {feature.featureName}
                      </p>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
