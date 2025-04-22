import axios from "axios";
import React, { useState } from "react";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    number: "",
    description: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmitData = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const token = "7356453117:AAGCcU1rfib6FYCKoJlt8-77Dgq5RK8UgkE";
    const chat_id = "5625872174";
    const URL = `https://api.telegram.org/bot${token}/sendMessage`;
    const text = `Sizga Yangi Xabar: 
    \n Email manzili: ${formData.email}
    \n Telefon raqami: ${formData.number}
    \n Xabar: ${formData.description}
    `;

    try {
      await axios.post(URL, {
        chat_id,
        text: text,
      });

      toast.success("Xabaringiz muvaffaqqiyatli yuborildi.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setIsLoading(false);
      setFormData({
        email: "",
        number: "",
        description: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="w-full max-w-[1450px] mx-auto px-4 mt-32 flex flex-col gap-28">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          <div className="flex flex-col items-start gap-8 w-full lg:w-1/2">
            <h1 className="text-3xl font-bold">Aloqa</h1>
            <form
              onSubmit={handleSubmitData}
              className="flex flex-col items-start gap-8 w-full"
              action="/"
            >
              <input
                className="w-full h-[40px] bg-gray-200 rounded-[25px] p-6 outline-none font-[300] text-[13px]"
                type="email"
                name="email"
                placeholder="Sizning elektron pochtangiz"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                className="w-full h-[40px] bg-gray-200 rounded-[25px] p-6 outline-none font-[300] text-[13px]"
                type="number"
                name="number"
                placeholder="Telefon raqamingiz"
                value={formData.number}
                onChange={handleChange}
              />
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full h-[130px] bg-gray-200 font-[300] text-[13px] p-6 rounded-[25px] resize-none outline-none"
                placeholder="Sizning xabaringiz bo'lsa yozing"
              ></textarea>
              <button
                type="submit"
                className="w-[170px] h-[45px] flex items-center justify-center text-[14px] text-white bg-red-500 rounded-[25px] cursor-pointer"
              >
                {isLoading === true ? "Loading..." : "Yuborish"}
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="w-full lg:w-1/2">
            <iframe
              className="w-full h-[400px] md:h-[500px] lg:h-[700px] rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3067.6526359032846!2d64.459964!3d39.747453!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQ0JzUwLjgiTiA2NMKwMjcnMzUuOSJF!5e0!3m2!1sen!2sus!4v1745183767293!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact info */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-red-500 text-[18px] flex items-center gap-4">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="2em"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12zM7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"></path>
            </svg>
            <span className="text-black">Email: sleepnest@gmail.com</span>
          </p>
          <p className="text-red-500 text-[16px] flex items-center gap-4">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="2em"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M15 12h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3zm4 0h2a9 9 0 0 0-9-9v2c3.87 0 7 3.13 7 7zm1 3.5c-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"></path>
            </svg>
            <span className="text-black">
              Tel: +998 94 033 72 12 <br className="md:hidden" />
              <span className="ml-4">+998 91 777 73 68</span>
            </span>
          </p>
          <p className="text-red-500 text-[16px] flex items-center gap-4">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="2em"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"
              ></path>
              <circle
                cx="256"
                cy="192"
                r="48"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              ></circle>
            </svg>
            <span className="text-black">Buxoro, st. Alpomish 80.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
