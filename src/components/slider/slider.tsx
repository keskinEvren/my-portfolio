"use client";

import { AnimatedTestimonials } from "./animated-testimonials";

export function Slider() {
  const testimonials = [
    {
      name: "Quick Products",
      quote:"Eligible product management app for JotForm.",
      redirect: "https://github.com/keskinEvren/quick-products",
      pic: "https://github.com/keskinEvren/quick-products/blob/master/screenshots/qf-0.png?raw=true",
    },
    {
      name: "Cube Runner",
      quote:"This project is a simple game created by following the 'Parallax' tutorial series, marking my first step into game development.",
      redirect: "https://evren-keskin.itch.io/cube-runner-2d",
      pic: "https://i.ibb.co/rn1pFvJ/Capture.png",
    },
    {
      name: "Online Trading App",
      quote:"This project is a trading platform developed using .NET, React, and PostgreSQL, designed to manage user balances and execute trade transactions.",
      redirect: "https://github.com/keskinEvren/online-trading-app-react",
      pic: "https://raw.githubusercontent.com/keskinEvren/online-trading-app-react/refs/heads/main/readme-assets/users.PNG",
    },
    {
      name: "Kariyer Takip Portali",
      quote:"This project is a career tracking portal built with .NET Razor and PostgreSQL, aimed at helping students manage their internships and career progress digitally.",
      redirect: "https://github.com/keskinEvren/kariyer-takip-portali",
      pic: "https://i.ibb.co/JVkZgbg/career-optimized.jpg",
    },
    {
      name: "Random Quote Machine",
      quote:"This is a random quote machine that you can tweet instantly.",
      redirect: "https://keskinevren.github.io/random-quote-machine/",
      pic: "https://i.ibb.co/JWkHwtnQ/Capture.png",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
