import React from 'react'
import { Link } from 'react-router-dom'
import BlogHeading from './BlogHeading'

const Jumbotron = () => {
  return (
    <section className="bg-violet-950 mt-12">
  <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
    <h1 className="mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
      Django and React JS.
    </h1>
    <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48">
      Django handles the backend, including server-side logic and database management, while React creates a dynamic, interactive frontend. Together, they build a full-stack web app, combining Django's APIs with React's user interface.
    </p>
    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
    <a 
    href="https://github.com/Gmp999/django_react_blog_template-main" 
    target="_blank" 
    rel="noopener noreferrer"
    className="py-3 px-5 sm:ms-4 text-sm font-medium text-white focus:outline-none bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 hover:border-blue-800 hover:text-white focus:z-10 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
  >
  Learn more
</a>

    </div>
  </div>
</section>

  )
}

export default Jumbotron

