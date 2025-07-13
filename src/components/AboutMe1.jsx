import React from "react";

const AboutMe1 = ({ setpg }) => {
  return (
    <div className="lg:flex justify-between mb-2 h-screen pt-28" id="aboutme">
      <div className=" lg:w-[900px] lg:text-8xl text-[42px] text-LightBlue">
        About Me
      </div>
      <div className="lg:w-[1800px] lg:px-3 font-manrope">
        <h1 className=" lg:text-3xl text-xl text-LightBlue mb-4 lg:block hidden">
          I am a  Full-Stack Developer & Machine Learning Engineer based in Bangalore.
        </h1>
        <p className=" mb-12 text-lg text-secondary">
          I am a Full-Stack Software Developer and Machine Learning Engineer
          with hands-on experience across backend development, frontend
          frameworks, and scalable AI/ML systems. I specialize in building
          production-grade APIs using FastAPI and Django, deploying
          high-performance ML inference pipelines with vLLM and NVIDIA Triton,
          and crafting intelligent RAG-based applications leveraging LangChain,
          LangGraph, and ChromaDB. With a strong foundation in data structures,
          distributed systems, and DevOps tools like Docker, Kubernetes, and
          Prometheus, I excel at developing and deploying end-to-end solutions.
          I’ve successfully delivered real-time financial engines, large-scale
          audio processing services, and LLM-powered agents in production
          environments. Passionate about innovation, I combine deep technical
          proficiency with a problem-solving mindset to drive impact across AI
          and full-stack development projects.
        </p>
        <a
          onClick={() => setpg(2)}
          className="cursor-pointer text-highGreen text-base flex items-center mr-6 border-b-2 border-highGreen w-max"
        >
          {" "}
          More about me
        </a>
      </div>
    </div>
  );
};

export default AboutMe1;
