import React from 'react'

export default function Howitworks() {

    const steps = [
        "Register and login to your dashboard",
        "Enter your soil and weather data",
        "Get AI-based crop recommendations",
        "Ask chatbot for advice or upload plant images"
    ]

  return (
    <section className='py-16 bg-green-50 text-center'>
        <h3 className='text-3xl font-bold text-green-800 mb-6'>How It Works</h3>
        <ul className='max-w-2xl mx-auto text-gray-700 text-lg space-y-4'>
            {steps.map((s , i) =>(
                <li key={i} className='bg-white p-4 rounded-lg shadow'>{s}</li>
            ))}
        </ul>
    </section>
  )
}
