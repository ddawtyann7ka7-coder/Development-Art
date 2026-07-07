import React, { useEffect, useRef } from 'react'
import { whyUsData } from '@/datas/datas'
import WhyUsCard from './components/WhyUsCard/WhyUsCard'

export default function WhyUs() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('is-visible')
            })
        }, { threshold: 0.5 })

        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section id='whyUs' ref={sectionRef} className="py-24 bg-slate-950 text-white px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fade-in-up" >
                    Ինչու՞ ընտրել <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">Development Art</span>-ը
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer" >
                    {whyUsData.map((item, index) => (
                        <WhyUsCard key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}