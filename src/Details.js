// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Evren Keskin",
  tagline: "I build things for web",
  img: profile,
  about: `I am an undergraduate computer science student, and an aspiring Frontend Developer.
  I have a high interest in and am currently learning front-end and back-end web development. I also like to create small projects to apply the knowledge i have learned.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/evren-keskin-099065127/",
  github: "https://github.com/keskinEvren/",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

export const workDetails = [
  {
    Position: "UI Developer",
    Company: `JotForm `,
    Location: "Istanbul",
    Type: "Internship",
    Duration: "Jul 2021 - Sep 2021",
  },
];

export const eduDetails = [
  {
    Position: "Computer Engineering",
    Company: "Fatih Sultan Mehmet University",
    Location: "Istanbul",
    Type: "Full Time",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  tailwind: tailwind,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

export const projectDetails = [
  {
    title: "Blog Page Bootstrap",
    image: projectImage1,
    description: `This is a blog page that develop with bootstrap`,
    techstack: "Html, Bootstrap",
    previewLink: "https://keskinevren.github.io/blog-page-bootstrap/index.html",
    githubLink: "https://github.com/keskinEvren/blog-page-bootstrap",
  },
  {
    title: "Javascript Applications",
    image: projectImage2,
    description: `This repository includes my class works, homeworks and project in the advanced programming course.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://keskinevren.github.io/advanced-programming/index.html",
    githubLink: "https://github.com/keskinEvren/advanced-programming",
  },
  {
    title: "Book Recommendation KNN",
    image: projectImage3,
    description: `This is a book recommendation system that using K-Nearest Neighbors(KNN) algorithm.`,
    techstack: "Python",
    previewLink: "https://github.com/keskinEvren/book-recommendation-knn/blob/main/book_recommendation.ipynb",
    githubLink: "https://github.com/keskinEvren/book-recommendation-knn",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "evrenkeskin0998@gmail.com",
  phone: "+91 12345 67890",
};
