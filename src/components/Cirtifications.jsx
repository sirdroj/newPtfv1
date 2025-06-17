import React from "react";

const cirtificates = [
  {
    title: "Mathematics for Machine Learning: Multivariate Calculus",
    institiute: "Imperial College London",
    issuer: "Coursera",
    date: "2023",
    link: "https://coursera.org/share/007fac905de773133ac3752519ebfa5a",
  },
  {
    title: "A Crash Course in Data Science",
    institiute: "Johns Hopkins University",
    issuer: "Coursera",
    date: "2023",
    link: "https://coursera.org/share/09865a3626cf076680d4e813f09b8a2d",
  },
  {
    title: "AWS Fundamentals: Going Cloud-Native",
    institiute: "Amazon Web Services",
    issuer: "Coursera",
    date: "2023",
    link: "https://coursera.org/share/fc94a4a471eaa26823acbc0a608cad85",
  },
  {
    title: "React Basics",
    institiute: "Meta",
    issuer: "Coursera",
    date: "2023",
    link: "https://coursera.org/share/1a809fa0dc452f0d0a43fdf792b3e863",
  },
  {
    title: "Interactivity with JavaScript",
    institiute: "Meta",
    issuer: "Coursera",
    date: "2023",
    link: "https://coursera.org/share/8aab7fed7ef05acd0ab8053878c64b0f",
  },
  {
    title: "AI For Everyone",
    institiute: "DeepLearning.AI",
    issuer: "Coursera",
    date: "2023",
    link: "https://coursera.org/share/8f02e8cc939ed2845f9959effddab61d",
  },
  {
    title: "Cybersecurity and Its Ten Domains",
    institiute: "University of Washington",
    issuer: "Coursera",
    date: "2023",
    link: "https://coursera.org/share/9736d22a9ce6199e1c7b029a9b62279b",
  },
];

const Cirtifications = () => {
  return (
    <div className="lg:flex justify-between lg:space-x-10 mb-40 h-screen pt-28">
      <div className=" lg:w-[900px] lg:text-8xl text-[42px] text-LightBlue">
        My Cirtifications
      </div>
      <div className="lg:w-[1800px] lg:px-3 font-manrope lg:mr-20">
        <ul>
          {cirtificates.map((item, idx) => (
            <li key={idx} className="mb-4 border-b-1 border-solid">
              <h2 className="font-bold text-LightBlue">{item.title}</h2>
              <p>Institute - {item.institiute}</p>
              <div className="flex justify-between">
                <p className="text-secondary">
                  {item.issuer} - {item.date}
                </p>
                <a href={item.link} className="">verify </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cirtifications;
