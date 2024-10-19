import React from "react";
import RegisterButton from "../components/RegisterButton";
import SubHeading from "../components/SubHeading";

export default function Contact() {
  return (
    <div className="min-h-screen bg-c1 flex items-center justify-center py-12 px-6 lg:px-24 xl:px-48">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24 w-full md:w-80%">
        <div className="w-full md:w-1/2  p-5 flex flex-col items-center gap-3">
          <SubHeading heading="LOCATION" />
          <div className="w-full h-[300px] lg:w-[400px] lg:h-[300px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.5500639865463!2d76.6193309!3d10.053936999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07e6154a2133e5%3A0x2c26b2d532bb30ea!2sMar%20Athanasius%20College%20of%20Engineering%20-%20Kothamangalam!5e0!3m2!1sen!2sin!4v1718273487535!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen={false}
              loading="lazy"
            ></iframe>
          </div>
          <p className="mt-4 text-center text-cwhite font-normal">
            Mar Athanasius College of Engineering
            <br />
            Kothamangalam, Kerala - 686 666
          </p>
        </div>

        <div className="bg-c2 p-5 flex flex-col items-center justify-center gap-3 rounded-md w-full sm:w-1/2">
          <SubHeading heading="Contact Us" />
          <form className=" w-full flex items-center justify-center flex-col gap-3">
            <div className="relative w-full">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="font-open w-full p-3 bg-c5 bg-opacity-50 border border-transparent rounded-md placeholder-c1 focus:outline-none focus:ring-2 focus:ring-[#98C5E9] focus:border-transparent"
                placeholder="Name"
              />
            </div>
            <div className=" w-full">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="font-open w-full p-3 bg-c5 bg-opacity-50 border border-transparent rounded-md placeholder-c1 focus:outline-none focus:ring-2 focus:ring-[#98C5E9] focus:border-transparent"
                placeholder="Email"
              />
            </div>
            <div className=" w-full">
              <label htmlFor="subject" className="sr-only">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                className="font-open w-full p-3 bg-c5 bg-opacity-50 border border-transparent rounded-md placeholder-c1 focus:outline-none focus:ring-2 focus:ring-[#98C5E9] focus:border-transparent"
                placeholder="Subject"
              />
            </div>
            <div className=" w-full">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="font-open w-full p-3 bg-c5 bg-opacity-50 border border-transparent rounded-md placeholder-c1 focus:outline-none focus:ring-2 focus:ring-[#98C5E9] focus:border-transparent"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <div className="flex justify-center">
              <RegisterButton className=" bg-c1" text="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
