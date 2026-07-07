import React, { useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQItem({ faq, isOpen, onToggle }) {
    const itemRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.9 });

        if (itemRef.current) observer.observe(itemRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={itemRef} className="border-b border-slate-900 pb-4 animate-faq-scale">
            <button
                className="w-full flex justify-between items-center text-left py-4 font-medium text-lg hover:text-cyan-400 transition-colors cursor-pointer"
                onClick={onToggle}
            >
                <span className="pr-4 text-base md:text-lg">{faq.q}</span>
                <div className={`text-sm text-slate-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <ChevronDown size={20} />
                </div>
            </button>
            <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                    <p className="text-slate-400 pl-2 pb-2 text-sm leading-relaxed">
                        {faq.a}
                    </p>
                </div>
            </div>
        </div>
    )
}