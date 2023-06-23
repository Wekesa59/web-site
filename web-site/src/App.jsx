"use client";
import React from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import { AiFillLinkedin,AiFillGithub,AiFillMail} from 'react-icons/ai'; 
import Nice_Cut from "./Images/Nice_Cut.png";
import bank_site from "./Images/bank_website.png";
import Python from "./Images/Python.png";
import Git from "./Images/Git.png";
import VSCode from "./Images/VSCode.png";
import Group_10 from "./Images/Group_10_Proj.jpg";
import i_schedule from "./Images/i_schedule.jpg";

import { useState } from 'react';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white text-black px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-semibold text-[#FB5607] font">developed by</h1>
            <ul className= "flex items-center">
              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)}className="cursor-pointer text-2xl"/></li>
              <li><a className=" bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8 dark:from-red-500 dark:to-red-300 dark:bg-red-500" href="https://drive.google.com/file/d/1srAwpS_UjRqnAcLDAxJGImW0FTPUKUCO/view?usp=share_link">Resume</a></li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 md:text-6xl text-[#3A86FF] font-bold">Daniel Libese Wekesa</h2>
            <h3 className="text-2xl py-2 md:text-3xl underline font-semibold text-[#FFBE0B]"> Aspiring Software Engineer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">Hello! I am a recent graduate of Computer Science at Georgia State University. I hope you enjoy exploring my <span className="text-purple-500"> React JS</span> and <span className="text-purple-500">Tailwind CSS </span> website! </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-500">
            <p><a href="https://www.linkedin.com/in/daniel-wekesa-442a4317a/"><AiFillLinkedin /></a></p>
            <p><a href = "daniellw59@outlook.com"><AiFillMail /></a></p>
            <p><a href="https://github.com/Wekesa59"><AiFillGithub /></a></p>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-purple-600 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 dark:bg-gradient-to-b dark:from-blue-600 ">
            <img className="mx-auto object-contain" src={Nice_Cut} width = {320} height = {300} layout ="fill" objectFit = "contain"/>
          </div>
        </section>

        <section className="py-5 ">
          <div className="text-center bg-gradient-to-b from-gray-400 rounded-md py-2">
            <h3 className="text-3xl py-1 text-[#FF006E] font-semibold underline">About me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">I first gained interest in Computer Science thanks to my dad working in Tech and seeing how much he enjoyed his job and was able to keep a nice work-life balance. When I went into college and declared my major in CS, I was met with some of the greatest and most gifted people I have ever met who, in my eyes were brimming with information about different aspects of the field.</p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">It was then that I decided that I wanted to learn more to myself everything I could get my hands on, so I began looking at <span className="text-red-600">YouTube</span> videos and <span className="tiktok_gradient">TikTok</span> videos that further fanned the flames of curiosity for me. </p>
          </div>
          <div className=" flex flex-col gap-10 md:p-0  lg:flex-row lg:flex-wrap justify-center">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 Langs w-1/3 ">
              <img src ={Python} width = {100} height = {100} className="mx-auto object-contain"/>
              <h3 className="text-lg font-medium pt-8 pb-2 underline">Programming Languages</h3>
              <p className="text-gray-800 py-1 dark:text-[#3A86FF]">Java</p>
              <p className="text-gray-800 py-1 dark:text-[#3A86FF]">Python</p>
              <p className="text-gray-800 py-1 dark:text-[#3A86FF]">Html</p>
              <p className="text-gray-800 py-1 dark:text-[#3A86FF]">Mysql</p>
              <p className="text-gray-800 py-1 dark:text-[#3A86FF]">C</p>
              <p className="text-gray-800 py-1 dark:text-[#3A86FF]">CSS</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 skills w-1/4  Sub">
              <img src = {Git} width = {100} height = {100} className="mx-auto"/>
              <h3 className="text-lg font-medium pt-8 pb-2 underline ">Sub Skills</h3>
              <p className="text-gray-800 py-1 dark:text-[#8338EC]">Git</p>
              <p className="text-gray-800 py-1 dark:text-[#8338EC]">Firebase</p>
              <p className="text-gray-800 py-1 dark:text-[#8338EC]">Linux</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 skills w-1/3 Frame">
              <img src = {VSCode} width = {100} height = {100} className="mx-auto"/>
              <h3 className="text-lg font-medium pt-8 pb-2 underline">Frameworks</h3>
              <p className="text-gray-800 py-1 dark:text-[#FFBE0B]">React</p>
              <p className="text-gray-800 py-1 dark:text-[#FFBE0B]">Android Studio</p>
              <p className="text-gray-800 py-1 dark:text-[#FFBE0B]">Flutter</p>
              <p className="text-gray-800 py-1 dark:text-[#FFBE0B]">Visual Studio Code</p>
            </div>
          </div>
        </section>
        <section>
          <div className="text-center ">
            <h3 className="text-3xl py-1 text-[#8338EC] font-semibold">Portfolio</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-white">These are some of the projects, I have worked on in my years of learning. I hope you take the time to look at some of them!</p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 text-center">
              <h3 className="font-semibold text-[#FFBE0B]"><a href ="https://github.com/Wekesa59/bank_modern_app">React JS & Tailwind CSS Bank Site</a></h3>
              <img src={bank_site} className="rounded-lg object-cover w-[100%] h-[100%]" layout = "responsive"/>
            </div>
            <div className="basis-1/3 flex-1 text-center">
              <h3 className="font-semibold text-[#FFBE0B]"><a href ="">Software Engineer Flutter Calendar App</a></h3>
              <img src={i_schedule} className="rounded-lg object-cover w-[100%] h-[100%]" layout = "responsive"/>
            </div>
            <div className="basis-1/3 flex-1 text-center">
              <h3 className="font-semibold text-[#FFBE0B]"><a href ="https://github.com/Wekesa59/Group_10">Mobile App Project w/ Firebase</a></h3>
              <img src={Group_10} className="rounded-lg object-cover w-[100%] h-[100%]" layout = "responsive"/>
            </div>
          </div>
        </section>
      </main>
    </div>
  
  )
}

export default App