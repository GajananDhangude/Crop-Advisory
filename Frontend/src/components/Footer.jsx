import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-green-700 text-white py-6 text-center'>
        <p>&copy; {new Date().getFullYear()} Smart Crop Advisory System. All rights reserved</p>
    </footer>
  )
}
