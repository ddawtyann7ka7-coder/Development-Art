import React from 'react'
import { motion } from 'framer-motion'
import { cardVariants } from '../SyllabusAnimations/SyllabusAnimations'

export default function SyllabusCard({ tech }) {
    const IconComponent = tech.icon;
    return (
        <motion.div
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.02, borderColor: 'rgba(99, 102, 241, 0.4)' }}
            className="p-6 rounded-2xl bg-slate-900/40 border border-slate-900/80 backdrop-blur-sm"
        >
            <div className={`w-12 h-12 rounded-xl max-md:mx-auto bg-gradient-to-br ${tech.color} p-3 flex items-center justify-center text-white mb-4 shadow-md`}>
                <IconComponent size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2 text-slate-100">{tech.name}</h3>
            <p className="text-xs text-slate-400 leading-relaxed">{tech.desc}</p>
        </motion.div>
    )
}