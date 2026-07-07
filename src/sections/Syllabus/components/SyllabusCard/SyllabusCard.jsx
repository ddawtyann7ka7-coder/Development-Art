import React from 'react'

export default function SyllabusCard({ tech, index }) {
    const IconComponent = tech.icon;
    return (
        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-900/80 backdrop-blur-sm syllabus-hidden hover:-translate-y-1 hover:border-indigo-500/40 transition-all duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            <div className={`w-12 h-12 rounded-xl max-md:mx-auto bg-gradient-to-br ${tech.color} p-3 flex items-center justify-center text-white mb-4 shadow-md`}>
                <IconComponent size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2 text-slate-100">{tech.name}</h3>
            <p className="text-xs text-slate-400 leading-relaxed">{tech.desc}</p>
        </div>
    )
}