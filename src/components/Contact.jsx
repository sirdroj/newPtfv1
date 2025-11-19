import React, { useState } from "react";
import { openPdfInNewTab } from "./Intro"; // Assuming you have a utility function to open PDF in a new tab
// import "./Contact.scss"
// import instaico`n from "./icons/instagram_1384015.png"
// import resume from "../../others/resume.pdf"
const Contact = () => {
  const [recipient, setRecipient] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSendEmail = (e) => {
    e.preventDefault();

    const subjectEncoded = encodeURIComponent(subject);
    const messageEncoded = encodeURIComponent(message);
    const mailtoUrl = `mailto:${"developeras1999@gmail.com"}?subject=${subjectEncoded}&body=${messageEncoded}`;
    window.open(mailtoUrl);
  };



  return (
    <div className=" text-LightBlue h-screen w-full lg:pt-14" id="contact">
      <div className="wrapper lg:flex  w-full">
        <div className="links lg:w-2/4 px-2">
          <h1 className=" lg:text-7xl text-5xl">Let’s connect</h1>
          <h3 className=" font-manrope text-lg text-secondary mt-4"> Say hellow at <span className="text-highGreen cursor-pointer" onClick={handleSendEmail}>developeras1999@gmail.com</span></h3>
          <h3 className=" font-manrope text-lg text-secondary mt-2"> For more info, here’s my <span className=" text-highGreen cursor-pointer" onClick={openPdfInNewTab}>resume</span></h3>

          <div className="icons flex mt-10">
            <a href="https://www.linkedin.com/in/aman-sharma-5aa4481a2/" className="mr-3" target="_blank" rel="noopener noreferrer">
              <img src="/icon/Linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="https://github.com/sirdroj" className="mx-3" target="_blank" rel="noopener noreferrer">
              <img src="/icon/Github.svg" alt="GitHub" />
            </a>
            <a href="https://www.instagram.com/sir_droj/" className="mx-3" target="_blank" rel="noopener noreferrer">
              <img src="/icon/insta.svg" alt="Instagram" />
            </a>
            <a href="https://leetcode.com/droj/" className="ml-3" target="_blank" rel="noopener noreferrer">
              <img src="/icon/Leetcode.svg" alt="LeetCode" />
            </a>
            {/* <a href="https://www.hackerrank.com/sirdroj" className="ml-3" target="_blank" rel="noopener noreferrer">
              <img src="/icon/Hackerrank.svg" alt="HackerRank" />
            </a> */}
          </div>
        </div>
        <form onSubmit={handleSendEmail} className="grid grid-cols-1 font-manrope lg:w-2/4 px-2" action="">
          <div className="grid grid-cols-1 lg:mt-0 mt-16">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              className="p-2 h-12 bg-LightBlue2 text-white rounded-sm"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 mt-6">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="p-2 h-12 bg-LightBlue2 text-white rounded-sm focus:border-0"
              value={recipientEmail}
              onChange={(e) => setRecipientEmail(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 mt-6">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              className="p-2 h-12 bg-LightBlue2 text-white rounded-sm"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 mt-6">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              className="p-2 bg-LightBlue2 text-white rounded-sm h-40"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div>
            <input className="bg-highGreen text-white px-5 py-2 rounded-full font-bold mt-10" type="submit" value="Send" />
          </div>
        </form>
      </div>
      <div className="text-secondary text-base font-manrope font-medium lg:mt-0 mt-20 pb-16">© 2024 Aman Sharma</div>
    </div>
  );
};

export default Contact;
