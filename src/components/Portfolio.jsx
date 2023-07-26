import React from "react";

import myLittleWebShop from "../assets/portfolio/my-little-web-shop.png";
import restaurant from "../assets/portfolio/restaurant-finder.png";
import weather from "../assets/portfolio/weather-app.png";
import notetaker from "../assets/portfolio/note-taker-app.png";
import techblog from "../assets/portfolio/tech-blog-app.png";
import quiz from "../assets/portfolio/quiz-app.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: myLittleWebShop,
      link: "https://mylittlewebshop.herokuapp.com",
      code: "https://github.com/kristiyantefov/MyLittleWebShop",
    },
    {
      id: 2,
      src: weather,
      link: "https://karbuuno.github.io/weather-app/",
      code: "https://github.com/Karbuuno/weather-app",
    },
    {
      id: 3,
      src: restaurant,
      link: "https://ze7hu.github.io/Restaurant-Finder-App/",
      code: "https://github.com/Ze7Hu/Restaurant-Finder-App",
    },
    {
      id: 4,
      src: notetaker,
      link: "https://note-taker-nodjs.herokuapp.com/",
      code: "https://github.com/Karbuuno/note-taker-app",
    },
    {
      id: 5,
      src: techblog,
      link: "https://tech-blog-app1.herokuapp.com/",
      code: "https://github.com/Karbuuno/tech-blog-app",
    },
    {
      id: 6,
      src: quiz,
      link: "https://karbuuno.github.io/code-quiz-app/",
      code: "https://github.com/Karbuuno/code-quiz-app",
    },
  ];

  return (
    <div
      name='portfolio'
      className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Portfolio
          </p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolios.map(({ id, src, link, code }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img
                src={src}
                alt=''
                className='rounded-md duration-200 hover:scale-105'
              />
              <div className='flex items-center justify-center'>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                  <a
                    href={link}
                    target='_blank'
                    rel='noreferrer'
                    className='font-bold'
                  >
                    Demo
                  </a>
                </button>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                  <a
                    href={code}
                    target='_blank'
                    rel='noreferrer'
                    className='font-bold'
                  >
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
