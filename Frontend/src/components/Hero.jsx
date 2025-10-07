import React from 'react'

export default function Hero() {
  return (
    <section className='bg-green-50 py-20 px-8 text-center'>
        <h2 className='text-4xl font-bold text-green-800'>AI-Powered Farming Guidance</h2>
        <p className='mt-4 text-lg text-gray-700 max-w-2xl mx-auto'>Get Smart crop recommendations , detect plant diseases , predict yields , and get advisory insights -all powered by AI and our ML models.</p>
        <div className='mt-8'>
            <a href="/dashboard" className='bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700'>Get Started</a>
        </div>
    </section>
  )
}
