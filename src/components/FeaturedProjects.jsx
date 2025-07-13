import React from 'react'
import ProjectCard from './ProjectCard'

const projects=[
    {
        h1:"OpenChat – Real-Time Chat Application Backend",
        p:"OpenChat is a judgment-free space where anyone can express their thoughts freely. No filters, no restrictions—just raw, unfiltered conversations with a community that values true expression.",
        year:"2023",
        role:"Developer",
        livelink:"https://vite-chatapp.vercel.app/",
        gitlink:"https://github.com/sirdroj/vite_chatapp",
        img:"./chatapp.png"
    },
    {
        h1:"Enterprise-Grade Interview Bot Backend",
        p:"A real-time, interactive interview bot built with Python and Streamlit, designed to simulate natural voice conversations. It integrates Groq LLM APIs (using DeepSeek for language understanding), Whisper for speech-to-text, and PlayAI-TTS for text-to-speech. The system enables fluid, voice-driven interactions, demonstrating advanced multimodal AI integration and user-centric design.",
        year:"2025",
        role:"Developer",
        // livelink:"https://customrag.streamlit.app/",
        gitlink:"https://github.com/sirdroj/interview_bothttps://github.com/sirdroj/basic_custom_rag",
        img:"./interviewBot.png"
    },
    {
        h1:"Agentic_rag_legal_assistant",
        p:"Built an AI-powered Indian Law Assistant using RAG architecture with LangGraph, ChromaDB, and Groq LLMs. It retrieves legal context from a vector DB and web, then generates structured answers with cited sources. Deployed via Streamlit with real-time chat, document insights, and support for multiple Groq models.",
        year:"2025",
        role:"Developer",
        // livelink:"https://legaladvise.streamlit.app/",
        gitlink:"https://github.com/sirdroj/Agentic_rag_legal_assistant",
        img:"./legal_assistant.png"
    },
    {
        h1:"Document Intelligence RAG System",
        year:"2025",
        p:"Designed and deployed a high-performance RAG model using ChromaDB and vector embeddings, integrating Groq API for LLM and pdfplumber for document parsing. Implemented chunked processing and semantic search achieving 75% relevance accuracy.",
        role:"Developer",
        // livelink:"https://aboutrepl-oggtwskbcc3kiegbgdfswu.streamlit.app/",
        gitlink:"https://github.com/sirdroj/interview_bot",
        img:"./basic_rag.png"
    },
    

]

const FeaturedProjects = () => {
    return (

        <div className='w-full pt-10' id='work'>
            <h1 className=' text-[42px] lg:text-7xl text-LightBlue my-2'>Featured Projects</h1>
            <p className=' lg:text-lg text-base  text-secondary font-manrope mb-5 w-full'>Here are some of the selected projects that showcase my passion for front-end development.</p>
            {/* <ProjectCard /> */}
            {projects.map((item,idx)=>(
                <ProjectCard data={item} key={idx} />
            ))}
        </div>

    )
}

export default FeaturedProjects