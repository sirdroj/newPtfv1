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
      "Designed and deployed scalable, real-time financial systems using Python, FastAPI, and PostgreSQL, reducing backtesting latency by 67% and optimizing query performance by 45%. Built robust microservices architecture with Docker and Kubernetes, powering financial APIs and RAG-based chatbots with sub-second response times using LangChain, ChromaDB, and OpenAI. Engineered high-throughput data scraping pipelines with asyncio and aiohttp, processing over 1M daily financial records for sentiment analysis. Enhanced data reliability with automated validation workflows in Pandas and NumPy, boosting accuracy from 70% to 95%. Authored complete API documentation using OpenAPI/Swagger, and ensured 99.2% uptime for services supporting 500+ concurrent users.",
  },
  {
    title: "Full Stack Developer",
    company: "GS Designe",
    start: "May 2023 ",
    end: "April 2024",
    location: "Mumbai,India",
    discription:
      "Collaborated with global e-commerce clients including SquarePeg and CustoKing to develop and maintain full-stack web applications. Built responsive, user-centric frontends for 5+ platforms using React.js, Tailwind CSS, and Next.js, focusing on performance and clean UI design. Integrated secure backend APIs using Django REST Framework, managed databases with PostgreSQL and MongoDB, and implemented user authentication with JWT and OAuth2. Worked closely with cross-functional teams to ensure smooth API integration and full-stack functionality across development and production environments.",
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
