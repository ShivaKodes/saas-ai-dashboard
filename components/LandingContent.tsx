"use client";

import { Avatar, AvatarFallback } from "./ui/avatar";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

const testimonials = [
  {
    name: "Shiva Kumar",
    avatar: "S",
    title: "Software Engineer",
    description: "Mind-blowing cretivity unleashed! This AI SAAS project is game changer. I generated stunning images and videos effortlessly. Highly recommended.",
  },
  {
    name: "Ankit Kumar Singh",
    avatar: "A",
    title: "Software Engineer",
    description: "Incredible music composition! This platform's AI blew my mind with it's musical genius. A must-try for anyone passionate about music.",
  },
  {
    name: "Aniket Parashar",
    avatar: "A",
    title: "Software Engineer",
    description: "Instant magic! I created captivating videos in minutes using this platform.",
  },
  {
    name: "Mahiwal Sahu",
    avatar: "M",
    title: "Software Engineer",
    description: "An AI wonderland! This platform's image generation capabilities are beyond belief. Unleash your imagination and div in!",
  },
];
export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl  text-white font-extrabold mb-10 ">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#219ebc] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-gradient-to-tr from-red-600 to-blue-600 ">
                    {item.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-sm text-zinc-400">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-2 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
