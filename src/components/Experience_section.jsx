import React from "react";
import Experiencecard_for_about from "./Experiencecard_for_about";

const experience = [
  {
    title: "Software Developer",
    company: "Marathon Trends Advisory Private Limited",
    start: "May 2024",
    end: "Present",
    location: "Mumbai , India",
    discription:
      "I developed AI-powered financial applications like Sentient, a stocks exploration and backtesting tool, and OMS, an Order Management System. By optimizing both the backend and frontend using FastAPI, Django, and React.js, I reduced manual workflows by 50%. I also managed server deployment on Hostinger VPS, ensuring 99.9% uptime. Additionally, I built a finance-specialized chatbot using RAG models, OpenAI, and ChromaDB, enhancing query resolution by 70%. To improve real-time financial insights, I implemented web scraping techniques, which increased sentiment analysis accuracy to 90%.",
  },
  {
    title: "Full Stack Developer",
    company: "Rays Software Solution",
    start: "Jan 2024",
    end: "May 2024",
    location: "Kolkata, India",
    discription:
      "I developed Cart and Watchlist features for a global e-commerce platform, reducing cart abandonment by 25%. Additionally, I built frontends for over five e-commerce applications, improving load time by 20%. By integrating APIs in collaboration with cross-functional teams, I streamlined development processes, reducing development time by 30%. I also deployed applications on Vercel, Netlify, and Firebase, ensuring 99% uptime.",
  },
  {
    title: "Freelance Software Developer",
    start: "Jan 2023",
    end: "Dec 2023",
    location: "Remote",
    discription:
      "I delivered custom web applications across various industries, including a dynamic e-commerce platform with real-time inventory tracking that boosted online sales by 40%. I also built a portfolio website using React.js, enhancing SEO rankings by 20%. Additionally, I developed a blogging platform with Firebase authentication, increasing user engagement by 30%.",
  },
];

const Experience_section = () => {
  return (
    <div
      className="lg:flex justify-between w-full item-center  lg:mb-20 mb-16 lg:pt-36 pt-12"
      id="work"
    >
      <div className="  lg:w-2/5 w-full mb-2">
        <h1 className="lg:text-8xl text-6xl text-LightBlue">My Experience</h1>
      </div>
      <div className="lg:w-2/4  font-manrope">
        {experience.map((item) => (
          <Experiencecard_for_about job={item} />
        ))}
      </div>
    </div>
  );
};

export default Experience_section;
