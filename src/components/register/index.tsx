"use client";
import React, { use, useState } from "react";
import Image from "next/image";

const formFields = [
  { label: "Full Name", type: "text" },
  { label: "Email", type: "email" },
  { label: "About Yourself", type: "textarea" },
  { label: "GitHub", type: "text" },
  { label: "LinkedIn", type: "text" },
  { label: "Password", type: "password" },
  { label: "Confirm Password", type: "password" },
];
const domains = [
  { name: "Technical" },
  { name: "Corporate" },
  { name: "Design" },
  { name: "Events" },
];

const index = () => {
  const [selectedDomain, setSelectedDomain] = useState(null);

  const handleDomainClick = (domainName) => {
    setSelectedDomain(domainName);
  };
  console.log(selectedDomain);

  return (
    <>
      <div className="  min-h-screen bg-[url('/images/register/bg_android.jpeg')]  md:bg-[url('/images/register/bg_desktop.png')] lg:bg-[url('/images/register/bg_desktop.png')] xl:bg-[url('/images/register/bg_desktop.png')] bg-cover bg-center ">
        <form action="">
          <div className=" min-h-screen inset-0 bg-black bg-opacity-60">
            <div className=" px-10 py-12 md:px-10 md:py-10 lg:px-12 lg:py-14 xl:px-12 xl:py-14 flex flex-col gap-4">
              {/* heading */}
              <div className="md:self-start lg:self-start xl:self-start self-center text-5xl md:text-6xl lg:text-6xl xl:text-6xl  font-f1 font-normal ">
                <h1>Register</h1>
              </div>
              {/* form field */}
              <div className="mt-6 flex justify-center md:justify-between lg:justify-between xl:justify-between  ">
                {/* <div className="flex justify-center w-full md:w-[50%] lg:w-[50%] xl:w-[50%]"> */}
                <div className=" w-full max-w-md md:max-w-none lg:max-w-none xl:max-w-none 2xl:max-w-none md:w-[50%] lg:w-[50%] xl:w-[50%]  ">
                  {/* form field data */}
                  {formFields.map((field, index) => (
                    <div className=" flex flex-col    gap-2 mb-2" key={index}>
                      <div className="mb-2">
                        <h2 className="text-2xl md:text-3xl lg:text-3xl font-f1 font-normal xl:text-3xl">
                          {field.label}
                        </h2>
                      </div>
                      {field.type === "textarea" ? (
                        <textarea
                          className="bg-white  items-center h-32 w-full max-w-md md:w-[89%] md:max-w-none lg:w-[80%] lg:max-w-none xl:w-[80%] xl:max-w-none px-4 py-2 text-lg bg-opacity-30 md:bg-opacity-50 lg:bg-opacity-50 xl:bg-opacity-50 rounded-br-lg"
                          rows={4}
                          style={{ resize: "none" }}
                        />
                      ) : (
                        <input
                          className="bg-white h-12 w-full max-w-md md:max-w-none lg:max-w-none xl:max-w-none  md:w-[89%] lg:w-[80%]  xl:w-[80%] 2xl:max-w-none px-4 py-2 text-lg bg-opacity-30 md:bg-opacity-50 lg:bg-opacity-50 xl:bg-opacity-50 rounded-br-lg"
                          type={field.type}
                        />
                      )}
                    </div>
                  ))}
                </div>
                {/* </div> */}

                {/* image for track */}
                <div className="w-[50%]  hidden md:block   lg:block  xl:block  ">
                  <Image
                    src="/images/register/image.svg"
                    alt="track"
                    height={450}
                    width={450}
                  />
                </div>
              </div>
              {/* domain */}
              <div className=" flex justify-center md:block lg:block xl:block ">
                <div className=" max-w-md md:max-w-none flex flex-col">
                  <div className="mb-3">
                    <h2 className="text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-f1 font-normal">
                      Select the domain you want to apply for
                    </h2>
                  </div>
                  {/* subdomains */}
                  <div className="w-full md:w-[85%] lg:w-[85%] xl:w-[85%]">
                    <div className="grid grid-cols-1  md:grid-cols-2 md:grid-rows-2 gap-4">
                      {/* subdomain items */}
                      {domains.map((domain, index) => (
                        <button
                          className={` font-f1 font-normal h-12 bg-white bg-opacity-30 md:bg-opacity-50 lg:bg-opacity-50 xl:bg-opacity-50 ${
                            selectedDomain === domain.name
                              ? "border-2 "
                              : "border-0"
                          }  rounded-br-lg py-4 text-lg md:text-xl lg:text-xl xl:text-xl  flex justify-center items-center hover:bg-white/[0.3] `}
                          key={index}
                          type="button"
                          onClick={() => handleDomainClick(domain.name)}
                        >
                          {domain.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Submit Button */}
              <div className="flex justify-center mt-12">
                <button
                  className="font-f1 font-normal max-w-xs w-[60%] md:w-[30%] lg:w-[30%] xl:w-[30%] bg-white bg-opacity-30 md:bg-opacity-50 lg:bg-opacity-50 xl:bg-opacity-50 text-black text-xl px-6 py-3 rounded-lg shadow-lg hover:bg-white"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default index;
