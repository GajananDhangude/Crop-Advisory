import React from 'react'

export default function Navbar() {
  return (
    <nav className='bg-green-700 text-white px-8 py-4 flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Smart Crop Advisory</h1>
        <div className='space-x-6'>
            <a href="/" className='hover:text-gray-200'>Home</a>
            <a href="/" className='hover:text-gray-200'>Features</a>
            <a href="/" className='bg-white text-green-700 px-4 py-2 rounded-lg hover:bg-green-100'>Login</a>
            <a href="/" className='bg-yellow-300 text-green-900 px-4 py-2 rounded-lg hover:bg-yellow-400'>Sign Up</a>
        </div>
    </nav>
  )
}
