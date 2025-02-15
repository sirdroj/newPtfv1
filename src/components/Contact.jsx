import React, { useState } from "react";
// import "./Contact.scss"
// import instaicon from "./icons/instagram_1384015.png"
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

  const openPdfInNewTab = () => {
    const pdfUrl = "/Aman_sharma_resume.pdf";
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className=" text-LightBlue h-screen w-full lg:pt-14" id="contact">
      <div className="wrapper lg:flex  w-full">
        <div className="links lg:w-2/4 px-2">
          <h1 className=" lg:text-7xl text-5xl">Let’s connect</h1>
          <h3 className=" font-manrope text-lg text-secondary mt-4"> Say hellow at <span className="text-highGreen cursor-pointer" onClick={handleSendEmail}>developeras1999@gmail.com</span></h3>
          <h3 className=" font-manrope text-lg text-secondary mt-2"> For more info, here’s my <span className=" text-highGreen cursor-pointer" onClick={openPdfInNewTab}>resume</span></h3>

          <div className="icons flex mt-10">
            <a href="https://www.linkedin.com/in/aman-sharma-5aa4481a2/" className="mr-3" target="_blank">
              <img src="/icon/Linkedin.svg" />
            </a>
            <a href="https://github.com/sirdroj" className="mx-3" target="_blank">
              <img src="/icon/Github.svg" />
            </a>
            <a href="https://www.instagram.com/sir_droj/" className="mx-3" target="_blank" >
              <img src="/icon/insta.svg" />
            </a>
            <a href="https://leetcode.com/droj/" className="ml-3" target="_blank">
              <img src="/icon/Leetcode.svg" />
            </a>
          </div>
        </div>
        <form onSubmit={handleSendEmail} className=" grid grid-cols-1 font-manrope lg:w-2/4 px-2 " action="" >
          <div className="grid grid-cols-1 lg:mt-0 mt-16 ">
            <label>Name</label>
            <input type="text" className="p-2 h-12 bg-LightBlue2 text-white rounded-sm"  value={recipient} onChange={(e) => setRecipient(e.target.value)} />
          </div>
          <div className="grid grid-cols-1 mt-6">
            <label>Email</label>
            <input type="email" className="p-2 h-12 bg-LightBlue2 text-white rounded-sm focus:border-0"  value={recipientEmail} onChange={(e) => setRecipientEmail(e.target.value)} />
          </div>
          <div className="grid grid-cols-1 mt-6">
            <label>Subject</label>
            <input type="text" className="p-2 h-12 bg-LightBlue2 text-white rounded-sm"  onChange={(e) => setSubject(e.target.value)} />
          </div>
          <div className="grid grid-cols-1 mt-6">
            <label>Message</label>
            <textarea
            className="p-2 bg-LightBlue2 text-white rounded-sm h-40"
              type="text-area"
              // placeholder='Start a Revolution Here or Just Say "Hii"'
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div>

            <input className=" bg-highGreen text-white px-5 py-2 rounded-full font-bold mt-10" type="submit" />
          </div>
        </form >
      </div>
      <div className=" text-secondary text-base font-manrope font-medium lg:mt-0 mt-20 pb-16">© 2024 Aman Sharma</div>
    </div>
  );
};

export default Contact;
