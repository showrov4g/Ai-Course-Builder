import React from 'react'

const Hero = () => {
  return (
    <div>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-purple-500">
              Ai course generator
              <strong className="font-extrabold text-black sm:block"> Custom learning path with AI </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
              numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded-sm bg-purple-500 px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-purple-600 focus:ring-3 focus:outline-hidden sm:w-auto"
                href="#"
              >
                Get Started
              </a>


            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Hero