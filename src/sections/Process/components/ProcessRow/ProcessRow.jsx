import React, { useEffect, useRef } from 'react'

export default function ProcessRow({ step, index }) {
    const rowRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
        if (rowRef.current) observer.observe(rowRef.current);
        return () => observer.disconnect();
    }, []);

    const isLeft = index % 2 === 0;

    return (
        <div
            ref={rowRef}
            className={`flex flex-col md:flex-row items-start gap-6 p-6 rounded-2xl bg-slate-900/20 border border-slate-900 border-l-2 border-l-transparent hover:border-l-indigo-500 hover:bg-slate-900/40 transition-all duration-700 ${isLeft ? 'animate-process-left' : 'animate-process-right'}`}>

            <span className="text-4xl font-black bg-gradient-to-br from-cyan-400 to-indigo-500 bg-clip-text text-transparent leading-none pt-1 group-hover:scale-110 transition-transform duration-300 shrink-0">
                {step.num}
            </span>
            <div>
                <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
        </div>
    )
}