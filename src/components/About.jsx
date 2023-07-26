import React from "react";

const About = () => {
  return (
    <div
      name='about'
      className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            About
          </p>
        </div>

        <p className='text-xl mt-20'>
          Hello! I'm a passionate and dedicated junior full stack developer.
          With a solid foundation in front-end technologies like HTML, CSS,
          JavaScript and react, as well as back-end frameworks like Node.js and
          Express, I possess the skills to create dynamic and user-friendly web
          applications. I enjoy the challenge of working on both the client-side
          and server-side, crafting seamless experiences for users.
        </p>

        <br />

        <p className='text-xl'>
          As a junior developer, I am committed to continuous learning, always
          eager to explore new technologies and frameworks to enhance my skill
          set. I thrive in collaborative environments, where I can contribute my
          problem-solving skills and work alongside experienced professionals.
          I'm excited to be a part of impactful projects, leveraging my
          creativity and adaptability to deliver efficient and innovative
          solutions. Let's build something amazing together!.
        </p>
      </div>
    </div>
  );
};

export default About;
