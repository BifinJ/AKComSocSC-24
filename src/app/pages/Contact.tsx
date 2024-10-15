import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-c1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-48 max-w-7xl mx-auto">
      
        <div className="flex flex-col items-center">
          <h2 className="font-futura font-bold text-c5 text-2xl md:text-5xl sm:text-4xl xs:text-3xl mb-8 mt-16">LOCATION</h2>
          
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
            Mar Athanasius College of Engineering<br />
            Kothamangalam, Kerala - 686 666
          </p>
        </div>
        
        <div className="relative">

          <div className="relative bg-c3 p-8 rounded-lg w-2xl py-16 bg-opacity-35 backdrop-blur-md mb-8">
            <h2 className="font-futura font-bold text-c5 text-2xl md:text-5xl sm:text-4xl xs:text-3xl mb-8 text-center">CONTACT US</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="font-open w-full p-3 bg-c5 bg-opacity-50 border border-transparent rounded-md placeholder-c1 focus:outline-none focus:ring-2 focus:ring-[#98C5E9] focus:border-transparent"
                  placeholder="NAME"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="font-open w-full p-3 bg-c5 bg-opacity-50 border border-transparent rounded-md placeholder-c1 focus:outline-none focus:ring-2 focus:ring-[#98C5E9] focus:border-transparent"
                  placeholder="EMAIL"
                />
              </div>
              <div>
                <label htmlFor="subject" className="sr-only">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="font-open w-full p-3 bg-c5 bg-opacity-50 border border-transparent rounded-md placeholder-c1 focus:outline-none focus:ring-2 focus:ring-[#98C5E9] focus:border-transparent"
                  placeholder="SUBJECT"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
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
                <button className="flex items-center justify-center md:w-36 w-32 h-10 border border-cwhite rounded-md p-0.5 bg-c1">
                  <a href="/" className="flex items-center justify-center w-full h-full text-coffwhite hover:bg-c5 bg-opacity-100 hover:bg-opacity-50 hover:text-c1 rounded-[4px] transition-all duration-300 ease-in-out">
                    Register
                  </a>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
