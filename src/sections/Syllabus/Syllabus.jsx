import React, { useEffect, useRef } from 'react'
import { syllabusData } from '@/datas/datas'
import SyllabusCard from './components/SyllabusCard/SyllabusCard'

export default function Syllabus() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible')
                    observer.unobserve(entry.target);
                }
            })
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" })

        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section id="syllabus" ref={sectionRef} className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-900">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
                <h2 className="text-3xl font-bold animate-fade-in-up">Ի՞նչ ենք Սովորելու</h2>
                <p className="text-slate-400 text-sm animate-fade-in-up">Ծրագիրը կազմված է այնպես...</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer max-md:text-center"
            >
                {syllabusData.map((tech, idx) => (
                    <SyllabusCard key={idx} tech={tech} index={idx} />
                ))}
            </div>
        </section>
    )
}