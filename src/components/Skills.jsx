import React from "react";
const skills = [
  {
    title: "Languages",
    items: ["Python", "SQL", "Java","bash","C++", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Web Development Libraries and Frameworks",
    items: [
      "FastAPI",
      "Django",
      "Node.js",
      "React.js",
      "Tailwind CSS",
      "Next.js",
      "Express.js",
      "Streamlit",
      "JWT",
      "OAuth",
    ],
  },
  {
    title: "AI/ML Libraries and Frameworks",
    items: [
      "LangChain",
      "LangGraph",
      "pydantic",
      "pyannote",
      "TensorFlow",
      "ASR",
      "TTS",
      "LLM",
      "PyTorch",
      "Scikit-learn",
      "Hugging Face Transformers",
      "NVIDIA Triton",
      "vLLM",
      "Ollama",
      "ChromaDB",
      "OpenAI",
    ],
  },
  {
    title: "Data Manipulation and Visualization",
    items: ["Pandas", "NumPy", "Matplotlib"],
  },
  {
    title: "Deployments and Cloud",
    items: ["Git", "Docker", "Kubernetes", "AWS", "Azure", "GCP", "Vercel", "Hostinger VPS"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
  },
  {
    title: "Monitoring and Logging",
    items: ["Prometheus", "Grafana", "ELK Stack", "cAdvisor", "Node Exporter", "PyActuator"],
  },
  {
    title: "Other Tools",
    items: ["Postman", "Figma", "BeautifulSoup", "Apache Kafka", "Redis", "RabbitMQ", "Celery"],
  },
];

export const Skills = () => {
  return (
    <div className="lg:flex justify-between lg:space-x-10 mb-40  pt-28">
      <div className=" lg:w-[900px] lg:text-8xl text-[42px] text-LightBlue">
        Skills
      </div>
      <div className="lg:w-[1800px] lg:px-3 font-manrope lg:mr-20">
        {skills.map((skill, index) => (
          <div key={index} className="mb-5">
            <h2 className="text-xl text-LightBlue font-semibold ">
              {skill.title}
            </h2>
            <ul className="flex mt-2 w-full flex-wrap">
              {skill.items.map((item, idx) => (
              <div className="text-secondary font-semibold text-sm border-LightBlue border-[1px] rounded-full p-1 px-3 mx-1 my-1">
                {item}
              </div>
            ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
