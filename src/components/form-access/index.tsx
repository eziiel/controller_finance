'use client'

import React from 'react'

export default function FormAccess() {
  const [loading, setLoading] = React.useState(false)
  const [successAccess, setSuccessAccess] = React.useState(false)
  const [errorAccess, setErrorAccess] = React.useState(false)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function handleAccess(e: any) {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setErrorAccess(true)
    }, 3000)
    e.preventDefault()
    console.log('Access')
  }

  const handleChange = () => {
    setLoading(false)
    setSuccessAccess(false)
    setErrorAccess(false)
  }

  return (
    <section
      data-loading={loading}
      data-success-access={successAccess}
      data-error-access={errorAccess}
      className="bg-gray-100 p-4 w-2/6 rounded-lg text-back flex 
      justify-center items-center flex-col gap-12
      
      shadow-bigComponentBlack
      data-[loading=true]:shadow-bigComponentBlue
      data-[success-access=true]:shadow-bigComponentGreen
    "
    >
      <h1
        data-error-access={errorAccess}
        className="text-black
          data-error-access={errorAccess}
        "
      >
        Welcome again!
      </h1>
      <form
        action={''}
        onSubmit={(e) => handleAccess(e)}
        className="w-4/5 text-xs flex justify-center py-12 px-8 items-center 
        flex-col gap-8 relative

        xd:w-4/5"
      >
        <div className="w-full relative group cursor-pointer">
          <input
            type="text"
            id="document"
            required
            onChange={handleChange}
            className="text-black w-full p-2 text-sm rounded-lg
              outline-none border-b focus:border-blue-500 peer 
              shadow-littleComponent
            "
          />
          <label
            data-error-access={errorAccess}
            htmlFor="document"
            className="
          cursor-pointer transform transition-all duration-300 
          absolute top-0 v h-full flex items-center pl-6
          text-sm truncate overflow-hidden w-full
          text-zinc-400 focus:border-zinc-400

          data-[error-access=true]:text-red-400
          data-[error=true]:text-red-500


          group-focus-within:text-xs 
          group-focus-within:-translate-y-full
          group-focus-within:h-1/2 
          group-focus-within:pl-0 
          group-focus-within:left-0
          group-focus-within:pb-2
          group-focus-within:text-black
          
          peer-valid:text-xs 
          peer-valid:h-1/2 
          peer-valid:-translate-y-full
          peer-valid:left-0
          peer-valid:font-semibold
          peer-valid:pb-2

          ps:left-[5%]
          pss:left-[10%]
        "
          >
            Please, insert the name user!
          </label>
        </div>
        <div className="w-full relative group cursor-pointer">
          <input
            type="password"
            id="password"
            required
            onChange={handleChange}
            className="text-black w-full p-2 text-sm rounded-lg
              outline-none border-b focus:border-blue-500 peer 
              shadow-littleComponent
              "
          />
          <label
            data-error-access={errorAccess}
            htmlFor="password"
            className="
          cursor-pointer transform transition-all duration-300 
          absolute top-0 v h-full flex items-center pl-6
          text-sm truncate overflow-hidden w-full
          text-zinc-400 focus:border-zinc-400

          data-[error-access=true]:text-red-400
          data-[error=true]:text-red-500

          group-focus-within:text-xs 
          group-focus-within:-translate-y-full
          group-focus-within:h-1/2 
          group-focus-within:pl-0 
          group-focus-within:left-0
          group-focus-within:pb-2
          group-focus-within:text-black
          
          peer-valid:text-xs 
          peer-valid:h-1/2 
          peer-valid:-translate-y-full
          peer-valid:left-0
          peer-valid:pb-2
          peer-valid:font-semibold

          ps:left-[5%]
          pss:left-[10%]
        "
          >
            Please, insert the password!
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 p-2 rounded-lg m-2 text-white 
          font-medium antialiased tracking-tight hover:bg-blue-500 uppercase
          disabled:bg-blue-200 
          disabled:cursor-wait
        "
        >
          Login
        </button>
      </form>
    </section>
  )
}
