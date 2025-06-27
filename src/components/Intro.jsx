import React from "react";

export const openPdfInNewTab = () => {
  const pdfUrl = "/resume_aman.pdf";
  window.open(pdfUrl, "_blank");
};
const Intro = () => {
  const smoothScroll = (target) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex flex-col lg:flex-row justify-between w-full item-center h-screen mb-16 px-1">
      <div className=" lg:my-36 mt-10 mb-7  lg:w-2/5 w-full">
        <div className="text-LightBlue font-normal lg:text-8xl text-6xl">
          <h1>HI, I AM </h1>
          <hi>AMAN SHARMA</hi>
        </div>
        <p className="font-medium text-base lg:text-lg text-secondary font-manrope w-full">
          A software developer and AI enthusiast with hands-on experience in building full-stack applications and machine learning solutions. I love turning complex ideas into real-world products.
        </p>
        <div className="flex mt-10 pb-">
          {/* <a
            onClick={() => smoothScroll("#contact")}
            className=" cursor-pointer mx-2 text-gray-600 text-base font-bold font-manrope bg-primary rounded-full p-2 px-6 text-center items-center align-middle flex"
          >
            <h1>CONTACT ME</h1>{" "}
            <div className="ml-3 bg-black rounded-full w-2 h-2 items-center flex"></div>
          </a> */}
          <a
            onClick={openPdfInNewTab}
            className=" cursor-pointer mx-2 text-gray-600 lg:text-base w-max text-sm font-bold font-manrope bg-primary rounded-full p-2 px-6 text-center items-center align-middle flex"
          >
            <h1>DOWNLOAD RESUME</h1>{" "}
            <div className="ml-3 bg-black rounded-full w-2 h-2 items-center flex"></div>
          </a>

          <a
            target="_blank"
            href="https://www.linkedin.com/in/aman-sharma-5aa4481a2/"
            className=" cursor-pointer mx-2 bg-primary rounded-full p-2"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.644 9.59602C8.2552 9.59602 9.56134 8.28988 9.56134 6.67869C9.56134 5.06749 8.2552 3.76135 6.644 3.76135C5.0328 3.76135 3.72667 5.06749 3.72667 6.67869C3.72667 8.28988 5.0328 9.59602 6.644 9.59602Z"
                fill="white"
              />
              <path
                d="M12.316 11.8067V27.992H17.3413V19.988C17.3413 17.876 17.7387 15.8307 20.3573 15.8307C22.94 15.8307 22.972 18.2453 22.972 20.1213V27.9933H28V19.1173C28 14.7573 27.0613 11.4067 21.9653 11.4067C19.5187 11.4067 17.8787 12.7493 17.208 14.02H17.14V11.8067H12.316ZM4.12666 11.8067H9.16V27.992H4.12666V11.8067Z"
                fill="white"
              />
            </svg>
          </a>
          <a
            target="_blank"
            href="https://github.com/sirdroj"
            className="mx-2 bg-primary rounded-full p-2 cursor-pointer"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.0347 2.66669C8.68933 2.66669 2.73599 8.62002 2.73599 15.9654C2.73599 21.84 6.54533 26.8254 11.8307 28.5854C12.496 28.7054 12.736 28.296 12.736 27.944C12.736 27.628 12.7253 26.7907 12.7213 25.6827C9.02133 26.4854 8.23999 23.8987 8.23999 23.8987C7.63733 22.3627 6.76399 21.9534 6.76399 21.9534C5.55733 21.128 6.85599 21.1467 6.85599 21.1467C8.19199 21.24 8.89199 22.5174 8.89199 22.5174C10.0787 24.5494 12.0067 23.9627 12.7613 23.6227C12.8827 22.7627 13.2293 22.176 13.608 21.844C10.656 21.5094 7.55199 20.368 7.55199 15.2707C7.55199 13.8214 8.07066 12.632 8.91733 11.704C8.78266 11.3667 8.32266 10.0134 9.04933 8.18402C9.04933 8.18402 10.1653 7.82535 12.7053 9.54535C13.7901 9.25025 14.9091 9.09961 16.0333 9.09735C17.1576 9.09918 18.2766 9.24982 19.3613 9.54535C21.9027 7.82402 23.0173 8.18402 23.0173 8.18402C23.744 10.0134 23.288 11.3667 23.1493 11.704C24.0027 12.632 24.5147 13.82 24.5147 15.2707C24.5147 20.3814 21.408 21.504 18.4453 21.8334C18.9187 22.244 19.3453 23.0547 19.3453 24.2947C19.3453 26.0734 19.3293 27.508 19.3293 27.944C19.3293 28.3 19.5667 28.7134 20.2453 28.5827C25.528 26.82 29.3333 21.8387 29.3333 15.9654C29.3333 8.62002 23.38 2.66669 16.0347 2.66669Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="lg:w-2/4 lg:py-10  flex flex-col-reverse h-min">
        <img src="hero.svg" className="" />
      </div>
    </div>
  );
};

export default Intro;
