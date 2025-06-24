import React from "react";
import Experiencecard_for_about from "./Experiencecard_for_about";

export const experience = [
  {
    title: "Data Science Team (On-site)",
    company: "Salesken.ai",
    start: "March ",
    end: "Current",
    location: "Bengaluru, India",
    discription:
      "So Far At my current job, I’ve worked on improving different parts of our AI systems. I fine-tuned a smaller, faster version of the Mistralai/Mistral-7B model to give better responses and understand goals more accurately. I also improved our speech recognition service by making it use 25% less memory and run 15% faster. To make audio clearer for users, I added a noise cancellation feature that improved sound quality by 20%. I helped build tools like Note Taker and Minutes of Meeting, and tested more than 15 different language models to find the best ones for our needs, including smaller, faster versions using Ollama. I also set up servers using VLLM and Triton to run these models smoothly and handle a lot of requests at once.",
  },
  {
    title: "Research Analyst & Software Developer",
    company: "Marathon Trends Advisory Private Limited",
    start: "May 2024",
    end: "March 2025",
    location: "Mumbai , India",
    discription:
      "I developed AI-powered financial applications like Sentient, a stocks exploration and backtesting tool, and OMS, an Order Management System. By optimizing both the backend and frontend using FastAPI, Django, and React.js, I reduced manual workflows by 50%. I also managed server deployment on Hostinger VPS, ensuring 99.9% uptime. Additionally, I built a finance-specialized chatbot using RAG models, OpenAI, and ChromaDB, enhancing query resolution by 70%. To improve real-time financial insights, I implemented web scraping techniques, which increased sentiment analysis accuracy to 90%.",
  },
  {
    title: "Full Stack Developer",
    company: "GS Designe",
    start: "May 2023 ",
    end: "April 2024",
    location: "Mumbai,India",
    discription:
      "I worked on both the front end and back end for global e-commerce clients like SquarePeg and CustoKing. I designed and built the user interface for 5+ e-commerce apps using React.js and Tailwind CSS, focusing on clean design and good user experience. I also worked closely with other teams to integrate APIs and make sure everything ran smoothly across the full stack.",
  }
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
