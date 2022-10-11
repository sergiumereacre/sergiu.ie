import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Sergiu Mereacre</title>
        <meta name="description" content="Portfolio website showing my work."/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-30 min-h-screen dark:bg-gray-900">
        <section>
          <nav className="py-10 mb-20 flex justify-between">
            <h1 className=" text-2xl font-poppins dark:text-white">sergiu</h1>
            <ul className="flex items-centre">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-white"/>
              </li>
              <li>
                <a className="transition-all duration-600 bg-gradient-to-br to-teal-600 via-blue-700 from-cyan-700 bg-size-200 text-white px-4 py-2 rounded-md ml-8 font-poppins hover:bg-right-bottom" href="https://www.linkedin.com/in/sergiumereacre">Let's Connect</a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className='text-5xl py-2 font-medium text-transparent bg-clip-text bg-gradient-to-l from-red-400 to-blue-500'>Sergiu Mereacre</h2>
            <h3 className='text-2xl py-2 dark:text-cyan-200'>Developer and engineer.</h3>
            <p className='text-md py-5 leading-7 text-gray-800 md:max-w-lg mx-auto dark:text-gray-400'>
              I'm a software engineer based in Ireland. I'm passionate about building and launching products that solve real world problems. Computers are my <span className='text-blue-500'>passion</span> and I love to learn new things.
            </p>
          </div>
          <ul className='text-5xl flex justify-center gap-10 py-2 text-gray-600'>
            <li>
              <a className='hover:text-blue-700 hover:transition-all hover:duration-300' href='https://www.linkedin.com/in/sergiumereacre'><AiFillLinkedin /></a>
            </li>
            <li>
              <a className='hover:text-gray-800 hover:transition-all hover:duration-300' href='https://github.com/itsnurdy'><AiFillGithub /></a>
            </li>
          </ul>
        </section> 
        <section className='px-5 md:px-10'>
          <div>
            <h3 className='text-2xl py-2 pt-9 dark:text-cyan-200'>Professional Experience</h3>
            <p className='text-md py-2 leading-7 text-gray-800 dark:text-gray-400'>
            From a very young age, I was inspired to design, create and mess around with projects that found my interest. Learning new things and building stuff from scratch is what I love to do. 
            I have a <span className='text-red-400'>burning passion</span> for technology with a strong interest in software engineering and I am always looking for new opportunities to <span className='text-blue-600'>learn</span> and <span className='text-blue-600'>grow</span>.
            </p>
          </div>
          <div className='lg:flex gap-10'>
            <div>
              <div className='text-center shadow-lg p-10 rounded-xl my-10 transition-all duration-300 hover:shadow-2xl bg-slate-50 dark:bg-stone-900'>
                <Image src={code} width={100} height={100}/>
                <h3 className='text-lg font-medium pt-6 pb-1 dark:text-cyan-200'>Coding Projects</h3>
                <p className='py-2 dark:text-gray-400'>
                  I have worked on projects with a team and also on my own. Some have reached a small audience and others have the potential to reach <span className='text-blue-600'>millions</span>.
                </p>
                <h4 className='py-3 text-orange-600 dark:text-orange-700'>Coding lanugages I've used in the past.</h4>
                <p className='text-gray-800 py-1 dark:text-gray-500'>Python</p>
                <p className='text-gray-800 py-1 dark:text-gray-500'>Java</p>
                <p className='text-gray-800 py-1 dark:text-gray-500'>C++</p>
              </div>
            </div>
            <div>
              <div className='text-center shadow-lg p-10 rounded-xl my-10 transition-all duration-300 hover:shadow-2xl bg-slate-50 dark:bg-stone-900'>
                <Image src={design} width={100} height={100}/>
                <h3 className='text-lg font-medium pt-6 pb-1 dark:text-cyan-200'>Beautiful Designs</h3>
                <p className='py-2 dark:text-gray-400'>
                  Worked along many customers creating designs that are both <span className='text-blue-600'>beautiful</span> and <span className='text-blue-600'>functional</span> for their desired needs. 
                </p>
                <h4 className='py-3 text-orange-600 dark:text-orange-700'>Design tools I use.</h4>
                <p className='text-gray-800 py-1 dark:text-gray-500'>Photoshop</p>
                <p className='text-gray-800 py-1 dark:text-gray-500'>After Effects</p>
                <p className='text-gray-800 py-1 dark:text-gray-500'>Premiere Pro</p>
              </div>
            </div>
            <div>
              <div className='text-center shadow-lg p-10 rounded-xl my-10 transition-all duration-300 hover:shadow-2xl bg-slate-50 dark:bg-stone-900'>
                <Image src={consulting} width={100} height={100}/>
                <h3 className='text-lg font-medium pt-6 pb-1 dark:text-cyan-200'>Team Collaboration</h3>
                <p className='py-2 dark:text-gray-400'>
                  Have the experience of working with teams of all sizes. I have worked with teams of 2 during my degree to teams of 10+ during my co-op at Intel.
                </p>
                <h4 className='py-3 text-orange-600 dark:text-orange-700'>Skills acquired.</h4>
                <p className='text-gray-800 py-1 dark:text-gray-500'>Leadership</p>
                <p className='text-gray-800 py-1 dark:text-gray-500'>Time Management</p>
                <p className='text-gray-800 py-1 dark:text-gray-500'>Problem-solving</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
