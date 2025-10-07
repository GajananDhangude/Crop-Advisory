import React from 'react'

export default function Features() {

    const Feature = [
        {title: "Crop Recommendation" , desc:"Get the best crops to plant based on your soil and weather."},
        {title:"Yield Prediction" , desc:"Estimate your crop yield using data-driven insights."},
        { title: "🦠 Disease Detection", desc: "Upload plant images to detect diseases with deep learning." },
        {title: "ChatBot" , desc:"Ask Farming questions and get instant AI-powered answer"}
    ]

  return (
    <section className='py-16 bg-white text-center'>
        <h3 className='text-3xl font-bold text-green-800 mb-8'>Key Features</h3>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-8'>
            {Feature.map((f , i) =>(
                <div key={i} className='bg-green-100 p-6 rounded-xl shadow-md hover:shadow-lg transition'>
                    <h4 className='text-xl font-semibold text-green-900'>{f.title}</h4>
                    <p className='mt-2 text-gray-700'>{f.desc}</p>
                </div>
            ))}
        </div>
    </section>
  )
}
