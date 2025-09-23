"use client";

import { FC, useState } from "react";


import { SiGitter, SiInstagram, SiTiktok, SiYoutube } from "react-icons/si";
import Link from "next/link";
import Textarea from "../ui/TextArea";
import Input from "../ui/Input";
import Button from "../ui/Button";

const ContactPage: FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    
  };

  return (
    <section className="bg-white min-h-screen py-16 px-6 flex items-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-3xl shadow-lg p-10">
   
        <div>
          <h1 className="text-4xl font-bold text-purple-800 mb-4">Get in Touch</h1>
          <p className="text-gray-700 mb-8">
            Have questions, feedback, or just want to say hi? Fill out the form below 
            and our team will get back to you shortly.
          </p>
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
             
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="rounded-lg border-gray-300"
              required
            />
            <Input
          
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="rounded-lg border-gray-300"
              required
            />
            <Textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="rounded-lg border-gray-300 min-h-[150px]"
              required
            />
            <Button type="submit" className="bg-purple-800 hover:bg-purple-900 text-white px-6 py-3 rounded-full">
              Send Message
            </Button>
          </form>
        </div>


        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-purple-800 mb-2">Contact Information</h2>
            <p className="text-gray-700">We’d love to hear from you. Reach us through any of the ways below:</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800">Email:</p>
            <p className="text-gray-600">support@yourbrand.com</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800">Phone:</p>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800 mb-2">Follow Us:</p>
            <div className="flex gap-4">
              <Link href="https://twitter.com" target="_blank" className="bg-purple-800 text-white p-3 rounded-full hover:bg-purple-900">
                <SiGitter className="w-5 h-5" />
              </Link>
              <Link href="https://instagram.com" target="_blank" className="bg-purple-800 text-white p-3 rounded-full hover:bg-purple-900">
                <SiInstagram className="w-5 h-5" />
              </Link>
              <Link href="https://tiktok.com" target="_blank" className="bg-purple-800 text-white p-3 rounded-full hover:bg-purple-900">
                <SiTiktok className="w-5 h-5" />
              </Link>
              <Link href="https://youtube.com" target="_blank" className="bg-purple-800 text-white p-3 rounded-full hover:bg-purple-900">
                <SiYoutube className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
