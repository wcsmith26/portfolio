import React from "react";
import ReactDOM from "react-dom";
import { BsFillMoonStarsFill, BsLink } from 'react-icons/bs';
import { BsLinkedin } from "react-icons/bs";
import "./index.css";
import Project from "./Project.js";
import { useState } from "react";

function App() {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""} >
      <head>
        <title>Will Smith Portfolio</title>
      </head>

      <main className="bg-white px-10 bg-clip-padding dark:bg-slate-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-10 flex justify-between">
            <h1 className="text-2xl dark:text-slate-400">
              Will Smith's Portfolio
            </h1>
            <ul className="flex items-center space-x-4">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl  text-slate-700 hover:text-slate-500" />
              </li>
              <li>
                <a href="https://www.linkedin.com/in/wcsmith26" >
                  <BsLinkedin className="cursor-pointer text-2xl text-slate-700 hover:text-slate-500" />
                </a>
              </li>
              <li className="bg-slate-700 hover:bg-slate-500 text-white px-4 py-1 rounded-md cursor-pointer">
                <a href="#">Resume</a>
              </li>
            </ul>
          </nav>
          <div className="mx-auto text-lg text-center py-10 dark:text-slate-400">
            <h2 className="text-4xl md:text-5xl text-purple-500">Will Smith</h2>
            <h3 className="text-3xl md:text-4xl my-3">About Me</h3>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Ullamco consectetur exercitation labore est. Anim ea et reprehenderit elit magna ullamco est ullamco sunt Lorem et sit ea. Nisi esse id voluptate duis. Irure tempor occaecat eiusmod est ex esse velit. Eu ad ipsum nostrud esse pariatur sit ad irure proident amet sit velit incididunt. Mollit enim nulla ad enim nostrud veniam proident in elit. Excepteur ad esse dolor do eiusmod sunt amet. Veniam voluptate velit labore culpa veniam sit cillum aliquip proident incididunt commodo. Consequat duis occaecat esse anim irure Lorem. Nulla pariatur elit incididunt aliqua cillum sint do mollit dolore cillum.
            </p>
            <img className="mt-10 mx-auto items-center rounded-full h-80 w-80 md:w-96 md:h-96" src="will.jpg"></img>
          </div>
          <div className="text-center py-10 dark:text-slate-400">
            <h3 className="text-3xl md:text-4xl mb-3">Contact Info</h3>
            <p className="text-lg md:text-xl">
              Email: willcsmith26@gmail.com<br />
              Phone: (913) 481-9953
            </p>
          </div>
          <div className="items-center text-center mx-auto py-10 px-auto">
            <h3 className="text-3xl md:text-4xl mb-6 dark:text-slate-400">Projects</h3>
            <div className="text-center mx-auto lg:flex gap-10 max-w-5xl">
              <Project path="wordle.jpg" name="Wordle Solver" />
              <Project path="wordle.jpg" name="Placeholder" />
              <Project path="will.svg" name="Placeholder" />
            </div>
          </div>
        </section>
      </main>
    </div >
  )
}

ReactDOM.render(<App />, document.getElementById("root"))