import React from "react";

const Experiencecard_for_about = ({job}) => {
  return (
    <div className="mb-7">
      <div className="lg:flex justify-between">
        <h1 className=" lg:text-2xl text-lg text-LightBlue font-medium">
          {job.title}
        </h1>

        <h1 className="lg:text-lg text-base text-secondary">
          {job.start} - {job.end}
        </h1>
      </div>
      <h1 className=' text-highGreen text-lg'>{job.company}</h1>

      <p className=" text-secondary text-base mt-4">
        {" "}
     
        {job.discription}
      </p>
    </div>
  );
};

export default Experiencecard_for_about;
