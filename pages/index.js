import Head from 'next/head'
import {BsFillMoonStarsFill, BsSun} from 'react-icons/bs'
import {AiFillGithub, AiFillLinkedin, AiFillMail, } from 'react-icons/ai'
import Image from 'next/image';
import ProfileImg from '../public/profileImg.jpg';
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import web1 from "../public/web1.PNG"
import web2 from "../public/web2.PNG"
import web3 from "../public/web3.PNG"
import web4 from "../public/web4.PNG"
import web5 from "../public/web5.PNG"
import web6 from "../public/web6.png"
import { useState } from 'react';

export default function Home() {

  const [darkMode, setDarkMode] = useState("false")

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Roee Kazma Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=' bg-gradient-to-b from-white to-gray-100 px-10 md:px-20 lg:px-40 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-700'>

       {/* FRONT PAGE  */}

      <section className='min-h-screen'>

    <nav className=' py-10 mb-12 flex justify-between dark:text-white'>
      <h1 className=' text-xl font-burtons'>Portfolio - R . K</h1>
      <ul className=' flex items-center gap-5'>
        <li>{darkMode ? <BsSun className=' cursor-pointer text-2xl' onClick={() => setDarkMode(!darkMode)}/> : <BsFillMoonStarsFill className=' cursor-pointer text-2xl' onClick={() => setDarkMode(!darkMode)}/>}</li>
        <li><a className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md' href="https://www.linkedin.com/in/roee-kazma-a48858222/overlay/1635507565895/single-media-viewer/" target={"_blank"} rel="noreferrer">Resume</a></li>
      </ul>
    </nav>
    <div className=' text-center p-10'>
      <h2 className=' text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400'>Roee Kazma</h2>
      <h3 className=' text-2xl py-2 md:text-3xl dark:text-white'>Full-Stack Developer</h3>
      <p className=' text-md py-5 leading-8 text-gray-800 md:text-xl max-w-2xl mx-auto dark:text-gray-200'>After an 8-month <span className=' text-teal-400'>Full-Stack</span> Bootcamp, I am ready for my first adventure in the industry.
      I am a discharged combat soldier from the Nahal brigade and my two most valuable qualities are  <span className=' text-teal-400'>hard work</span> and <span className=' text-teal-400'>motivation</span></p>
    </div>
    <div className=' text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
    <a href="https://github.com/RoeeKazma?tab=repositories" target={"_blank"} rel="noreferrer"><AiFillGithub/></a>
    <a href="https://www.linkedin.com/in/roee-kazma-a48858222/" target={"_blank"} rel="noreferrer"><AiFillLinkedin/></a>
    <a href="mailto:roeekazma@gmail.com" target={"_blank"} rel="noreferrer"><AiFillMail/></a>
    </div>
    <div className=' relative mx-auto  w-80 h-80 mt-20 mb-10 md:w-96 md:h-96'>
       <Image src={ProfileImg} className=' rounded-full ' layout='fill' objectFit='cover' alt="Profile image"/>
    </div>
      </section>

    {/* WHAT I PUT ON THE TABLE */}

    <section>
      <div className=' text-center'>
        <h3 className='  text-3xl py-1 md:text-4xl dark:text-white'>What I bring with me</h3>
        <p className=' text-md py-2 leading-8 text-gray-600 max-w-2xl mx-auto md:text-xl dark:text-gray-200'>
        Every day, <span className=' text-teal-400'> I strive to learn more and constantly improve</span>, from the technological front to the social front. 
        I take a lot of value and pride from the <span className=' text-teal-400'>Bootcamp </span>and <span className=' text-teal-400'>military service </span> I attended and I try to implement my learning into my work ethic.
        </p>
         <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Here are some of the skills I offer:
            </p>
      </div>

      <div className=' lg:flex gap-10'>
        <div className=' text-center shadow-lg p-10 rounded-xl my-10 bg-gradient-to-tr from-blue-200 to-teal-200 lg:w-1/3'>
          <Image src={design}  width={100} height={100} className='m-auto' alt="Design image"/> 
          <h4 className=' py-4 text-xl font-medium'>Front End Technologies:</h4>
          <p className=' text-gray-800 py-1'>ReactJs</p>
          <p className=' text-gray-800 py-1'>HTML5</p>
          <p className=' text-gray-800 py-1'>JavaScript</p>
          <p className=' text-gray-800 py-1'>CSS (TailWindCSS, Bootstrap)</p>
          <p className=' text-gray-800 py-1'>REST Api</p>
        </div>

        <div className=' text-center align shadow-lg p-10 rounded-xl my-10 bg-gradient-to-br from-blue-200 to-teal-200 lg:w-1/3'>
          <Image src={code}  width={100} height={100} className='m-auto' alt="Code image"/> 
          <h4 className=' py-4 text-xl font-medium'> Back End Technologies:</h4>
          <p className=' text-gray-800 py-1'>NodeJs</p>
          <p className=' text-gray-800 py-1'>MongoDB</p>
          <p className=' text-gray-800 py-1'>Firebase</p>
          <p className=' text-gray-800 py-1'>SQL</p>
        </div>

        <div className=' text-center shadow-lg p-10 rounded-xl my-10 bg-gradient-to-tr from-blue-200 to-teal-200 lg:w-1/3'>
          <Image src={consulting}  width={100} height={100} className='m-auto' alt="Consulting image"/> 
          <h4 className=' py-4 text-xl font-medium'>Social Skills:</h4>
          <p className=' text-gray-800 py-1 '><span className=' text-gray-900 font-medium '>Fast Learner</span>, I am able to grasp new concepts quickly</p>
          <p className=' text-gray-800 py-1 '><span className=' text-gray-900 font-medium '>Motivated</span>, Always seeking to be the best at what I do</p>
          <p className=' text-gray-800 py-1 '><span className=' text-gray-900 font-medium '>Great Team Player</span>, I know the value of having a good relationship with my co-workers</p>
        </div>
      </div>
    </section>

    {/* PROJECTS */}

    <section>
    <div className=' text-center'>
      <h3 className=' text-3xl py-1 md:text-4xl dark:text-white'>Projects</h3>
      <p className=' text-md py-2 leading-8 text-gray-600 max-w-xl mx-auto md:text-xl dark:text-gray-200'>
       Throughout my time at the bootcamp, we had to finish some projects to show our newly acquired skills. Here are some of them 
      </p>
         <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-500">
              *Hover over a project to see the technologies used in it and click to view the code on github*
            </p>
    </div>
    <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap ">
            <div className="basis-1/3 flex-1 ">
              <a href="https://github.com/RoeeKazma/React-Hotel-Project" target={"_blank"} rel="noreferrer" className=' group relative'>
                <Image
                className="rounded-lg object-cover h-full group-hover:opacity-10"
                src={web1}
                alt="Project 1"
              />
              <div className="opacity-0 md:hover:opacity-100 duration-300 absolute inset-0 z-10 flex flex-col justify-center items-center text-6xl text-white font-semibold ">
                <p className=' text-blue-500 font-bold text-3xl'>React</p>
                <p className=' text-blue-400 font-bold text-3xl'>NodeJs</p>
                <p className=' text-blue-300 font-bold text-3xl'>MongoDB</p>
                <p className=' text-blue-200 font-bold text-3xl'>REST Api</p>
                </div>
              
                
            
              </a>
            </div>
            <div className="basis-1/3 flex-1">
            <a href="https://github.com/RoeeKazma/royal-crm" target={"_blank"} rel="noreferrer" className=' group relative'>
                <Image
                className="rounded-lg object-cover h-full group-hover:opacity-10"
                src={web2}
                alt="Project 2"
              />
                 <div className="opacity-0 md:hover:opacity-100 duration-300 absolute inset-0 z-10 flex flex-col justify-center items-center text-6xl text-white font-semibold ">
                <p className=' text-green-500 font-bold text-3xl'>Angular</p>
                <p className=' text-green-400 font-bold text-3xl'>Firebase</p>
                <p className=' text-green-300 font-bold text-3xl'>Typescript</p>
            </div>
              </a>
            </div>
            <div className="basis-1/3 flex-1">
            <a href="https://github.com/RoeeKazma/Mardi-Gras" target={"_blank"} rel="noreferrer" className=' group relative'>
                <Image
                className="rounded-lg object-cover h-full group-hover:opacity-10"
                src={web3}
                alt="Project 3"
              />
                 <div className="opacity-0 md:hover:opacity-100 duration-300 absolute inset-0 z-10 flex flex-col justify-center items-center text-6xl text-white font-semibold ">
                <p className=' text-purple-500 font-bold text-3xl'>HTML5</p>
                <p className=' text-yellow-500 font-bold text-3xl'>SASS</p>
                <p className=' text-green-500 font-bold text-3xl'>Javascript</p>
            </div>
              </a>
            </div>
            <div className="basis-1/3 flex-1">
            <a href="https://github.com/RoeeKazma/kanban-LocalStorage/tree/WorkingBranch" target={"_blank"} rel="noreferrer" className=' group relative'>
                <Image
                className="rounded-lg object-cover h-full group-hover:opacity-10"
                src={web4}
                alt="Project 4"
              />
                  <div className="opacity-0 md:hover:opacity-100 duration-300 absolute inset-0 z-10 flex flex-col justify-center items-center text-6xl text-white font-semibold ">
                <p className=' text-red-500 font-bold text-3xl'>HTML5</p>
                <p className=' text-yellow-500 font-bold text-3xl'>CSS</p>
                <p className=' text-green-700 font-bold text-3xl'>Javascript</p>
            </div>
              </a>
            </div>
            <div className="basis-1/3 flex-1">
            <a href="https://github.com/RoeeKazma/MP3-DOM" target={"_blank"} rel="noreferrer" className=' group relative'>
                <Image
                className="rounded-lg object-cover h-full group-hover:opacity-10"
                src={web5}
                alt="Project 5"
              />
                 <div className="opacity-0 md:hover:opacity-100 duration-300 absolute inset-0 z-10 flex flex-col justify-center items-center text-6xl text-white font-semibold ">
                <p className=' text-gray-500 font-bold text-3xl'>HTML5</p>
                <p className=' text-gray-400 font-bold text-3xl'>CSS</p>
                <p className=' text-gray-300 font-bold text-3xl'>Javascript</p>
            </div>
              </a>
            </div>
            <div className="basis-1/3 flex-1">
            <a href="https://github.com/RoeeKazma/ReactNodeJsProject" target={"_blank"} rel="noreferrer" className=' group relative'>
                <Image
                className="rounded-lg object-cover h-full min-w-full group-hover:opacity-10"
                src={web6}
                alt="Project 6"
              />
                  <div className="opacity-0 md:hover:opacity-100 duration-300 absolute inset-0 z-10 flex flex-col justify-center items-center text-6xl text-white font-semibold ">
                  <p className=' text-blue-500 font-bold text-3xl'>React</p>
                <p className=' text-blue-400 font-bold text-3xl'>NodeJs</p>
                <p className=' text-blue-300 font-bold text-3xl'>MongoDB</p>
            </div>
              </a>
            </div>
          </div>

    </section>

    {/* FOOTER */}

    <section>

    <div className=' flex flex-col text-center py-8 '>
    <h1 className=' text-xl font-burtons text-teal-600 dark:text-teal-400 ml-6 mb-2'>Call Me : +972 52-8669118</h1>
    <p className='text-xl font-burtons text-teal-600 dark:text-teal-400  mb-2' >This website was made using - NextJS and TailwindCSS</p>
    </div>
    
    </section>
      </main>
    </div>
  )
}
