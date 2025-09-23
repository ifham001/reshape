"use client";

import { FC } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactUs: FC = () => {
  return (
    <section className="py-20 px-6 md:px-20 ">

      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Contact Us
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions or want to get in touch? Fill out the form below or
          reach us through our contact details.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
   
        <form className="bg-white shadow-md rounded-2xl p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              placeholder="Your message..."
              rows={5}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#ff5e1a] text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition"
          >
            Send Message
          </button>
        </form>

     
        <div className="flex flex-col justify-center space-y-6">
          <div className="flex items-center space-x-4">
            <div className="bg-orange-100 p-3 rounded-full">
              <Mail className="text-orange-600" size={22} />
            </div>
            <span className="text-gray-700">contact@reshape.systems</span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-orange-100 p-3 rounded-full">
              <Phone className="text-orange-600" size={22} />
            </div>
            <span className="text-gray-700">CHE-344.673.513</span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-orange-100 p-3 rounded-full">
              <MapPin className="text-orange-600" size={22} />
            </div>
            <span className="text-gray-700">
           
                 unlimitrust, route des Flumeaux 42, 1008 Prilly, Switzerland
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
