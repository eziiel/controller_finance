'use client'

import React from 'react'

export default function FormAccess() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleAccess = (e: any) => {
    e.preventDefault()
    console.log('Access')
  }
  return (
    <section
      className="bg-slate-300 p-4 w-2/6 rounded-lg text-back flex 
      justify-center items-center flex-col gap-12
    "
    >
      <h1>Welcome again!</h1>
      <form
        onSubmit={(e) => handleAccess(e)}
        className="flex gap-4 p-4 rounded-lg bg-slate-600 shadow-md flex-col
        text-black justify-center items-center w-full
      "
      >
        <label htmlFor="user"></label>
        <input
          type="text"
          id="user"
          placeholder="username"
          className=" flex rounded-lg px-8 py-4 text-black w-3/4 bg-blue-700
          
            focus:text-red-600
          "
        />
        <button
          type="submit"
          className="px-8 py-4 cursor-pointer text-black rounded-lg bg-green-600"
        >
          entrar
        </button>
      </form>
    </section>
  )
}
