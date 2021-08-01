import React from 'react'

export default function Button({ text, onClick, ...props }) {
  return (
    <span className="relative inline-block px-4 py-2 font-medium group" onClick={onClick}>
      <button className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></button>
      <button className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></button>
      <button className="relative text-black group-hover:text-white">{text}</button>
    </span>
  )
}
