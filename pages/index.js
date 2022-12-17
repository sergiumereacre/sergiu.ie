import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import logo from "../public/s.png";
import Image from "next/image";
import { useEffect, useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Engineer", "Designer", "Consultant"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval (() => {
      tick();
    },delta)

    return () => { clearInterval(ticker)};
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if(isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(300);
    }
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* THIS IS FOR CONTENT LIKE TILTE, DESCRIPTION AND IMAGE. */}
      <Head>
        <title>Sergiu Mereacre - Portfolio</title>
        <meta name="description" content="Portfolio website showing my work."/>
        <link rel="icon" href="/s.png" />
      </Head>
      {/* THIS IS WHERE THE MAIN SECTION BEGINS */}
      <main className="bg-white px-10 md:px-30 lg:px-40 min-h-screen dark:bg-gray-900">
        {/* THIS SECTION DEALS WITH THE FIRST PART OF THE WEBPAGE. */}
        <section>
          {/* THIS DEALS WITH THE NAVBAR. */}
          <nav className="py-10 mb-20 flex justify-between">
            <a className='w-7 h-7 md:w-10 md:h-10 lg:w-12 lg:h-12' href=''><Image src={logo}/></a>
            {/* BUTTONS FOR DARK MODE AND LETS CONNECT */}
            <ul className="flex items-centre">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-white"/>
              </li>
              <li>
                <a className="transition-all duration-600 bg-gradient-to-br to-teal-600 via-blue-700 from-cyan-700 bg-size-200 text-white px-4 py-2 rounded-md ml-8 font-poppins hover:bg-right-bottom" href="https://www.linkedin.com/in/sergiumereacre">Let&apos;s Connect</a>
              </li>
            </ul>
          </nav>
          {/* THIS IS THE SECTION WHERE THE CONTENT IS. */}
          <div className="text-center p-10">
            <h2 className='text-5xl py-2 font-medium text-transparent bg-clip-text bg-gradient-to-l from-red-400 to-blue-500'>Sergiu Mereacre</h2>
            <h3 className='text-2xl py-2 dark:text-cyan-200'>Developer and {text}.</h3>
            <p className='text-md py-5 leading-7 text-gray-800 md:max-w-lg mx-auto dark:text-gray-400'>
              I am a software engineer based in Ireland. I&apos;m passionate about building and launching products that solve real world problems. Computers are my <span className='font-bold text-blue-500'>passion</span> and I love to learn new things.
            </p>
          </div>
          {/* THIS IS THE SECTION WHERE THE SOCIAL MEDIA ICONS ARE. */}
          <div>
            <ul className='text-5xl flex justify-center gap-10 py-2 text-gray-600'>
              <li>
                <a className='hover:text-blue-700 hover:transition-all hover:duration-300' href='https://www.linkedin.com/in/sergiumereacre'><AiFillLinkedin /></a>
              </li>
              <li>
                <a className='hover:text-gray-800 hover:transition-all hover:duration-300' href='https://github.com/sergiumereacre'><AiFillGithub /></a>
              </li>
            </ul>
          </div>
        </section> 
        {/* THIS IS THE SECTION WHERE THE SECOND PART OF THE WEBPAGE IS. */}
        <section className='p-5 md:p-10'>
          {/* THIS SECTION DEALS WITH THE PERSONAL EXPERIENCE PAROGRAPH. */}
          <div>
            <h3 className='text-2xl py-2 pt-9 dark:text-cyan-200'>Professional Experience</h3>
            <p className='text-md py-2 leading-7 text-gray-800 dark:text-gray-400'>
            From a very young age, I was inspired to design, create and mess around with projects that found my interest. Learning new things and building stuff from scratch is what I love to do. 
            I have a <span className='text-red-400 font-bold'>burning passion</span> for technology with a strong interest in software engineering and I am always looking for new opportunities to <span className='text-blue-600 font-bold'>learn</span> and <span className='text-blue-600 font-bold'>grow</span>.
            This is what led me to pursue a career in software engineering. I am currently working as a software engineer at <span className='text-blue-600 font-bold font'>Intel</span> during my university co-operative placement.
            </p>
          </div>
          {/* THIS SECTION DEALS WITH THE CARDS AT THE BOTTOM. */}
          <div className='lg:flex gap-10'>
            <div>
              <div className='text-center shadow-lg p-10 rounded-xl my-10 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-800 bg-slate-50 dark:bg-slate-900'>
                <Image src={code} width={100} height={100}/>
                <h3 className='text-lg font-medium pt-6 pb-1 dark:text-cyan-200'>Coding Projects</h3>
                <p className='py-2 dark:text-gray-400'>
                  I have worked on projects with a team and also on my own. Some have reached a small audience and others have the potential to reach <span className='text-blue-600 font-bold'>millions</span>.
                </p>
                <h4 className='py-3 text-orange-600 dark:text-orange-700'>Coding languages I&apos;ve used in the past.</h4>
                <p className='text-gray-800 py-1 dark:text-gray-500'>Python</p>
                <p className='text-gray-800 py-1 dark:text-gray-500'>Java</p>
                <p className='text-gray-800 py-1 dark:text-gray-500'>C++</p>
              </div>
            </div>
            <div>
              <div className='text-center shadow-lg p-10 rounded-xl my-10 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-800 bg-slate-50 dark:bg-slate-900'>
                <Image src={design} width={100} height={100}/>
                <h3 className='text-lg font-medium pt-6 pb-1 dark:text-cyan-200'>Beautiful Designs</h3>
                <p className='py-2 dark:text-gray-400'>
                  Worked along many customers creating designs that are both <span className='text-blue-600 font-bold'>beautiful</span> and <span className='text-blue-600 font-bold'>functional</span> for their desired needs. 
                </p>
                <h4 className='py-3 text-orange-600 dark:text-orange-700'>Design tools I use.</h4>
                <p className='text-gray-800 py-1 dark:text-gray-500'>Photoshop</p>
                <p className='text-gray-800 py-1 dark:text-gray-500'>After Effects</p>
                <p className='text-gray-800 py-1 dark:text-gray-500'>Premiere Pro</p>
              </div>
            </div>
            <div>
              <div className='text-center shadow-lg p-10 rounded-xl my-10 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-800 bg-slate-50 dark:bg-slate-900'>
                <Image src={consulting} width={100} height={100}/>
                <h3 className='text-lg font-medium pt-6 pb-1 dark:text-cyan-200'>Team Collaboration</h3>
                <p className='py-2 dark:text-gray-400'>
                  Have the experience of working with teams of <span className='text-blue-600 font-bold'>all</span> sizes. I have worked with teams of 2 during my degree to teams of 10+ during my co-op at Intel.
                </p>
                <h4 className='py-3 text-orange-600 dark:text-orange-700'>Skills acquired.</h4>
                <p className='text-gray-800 py-1 dark:text-gray-500'>Leadership</p>
                <p className='text-gray-800 py-1 dark:text-gray-500'>Time Management</p>
                <p className='text-gray-800 py-1 dark:text-gray-500'>Problem-solving</p>
              </div>
            </div>
          </div>
          <footer className="p-5 bg-slate-50 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-slate-900 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-800">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="" class="hover:underline">Sergiu™</a>. All Rights Reserved.</span>
          </footer>
        </section>
      </main>
    </div>
  )
}
