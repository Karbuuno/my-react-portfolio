import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y9ssic7",
        "template_0hqygrs",
        form.current,
        "jxry0MxNUVC0mmrkj"
      )
      .then(
        result => {
          console.log(result);
          toast.success("Massage sent");
        },
        error => {
          toast.error("Please fill in all the fields");
        }
      );
    if (form.current) {
      form.current.reset();
    }
  };
  return (
    <div
      name='contact'
      className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'
    >
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Contact
          </p>
          <p className='py-6'>Submit the form below to get in touch with me</p>
        </div>

        <div className=' flex justify-center items-center'>
          <form
            ref={form}
            onSubmit={sendEmail}
            className=' flex flex-col w-full md:w-1/2'
          >
            <input
              type='text'
              name='name'
              required
              placeholder='Enter your name'
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
            />
            <input
              required
              type='text'
              name='email'
              placeholder='Enter your email'
              className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
            />
            <textarea
              required
              name='message'
              placeholder='Enter your message'
              rows='10'
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
            ></textarea>

            <button
              type='submit'
              className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'
            >
              Let's talk
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
