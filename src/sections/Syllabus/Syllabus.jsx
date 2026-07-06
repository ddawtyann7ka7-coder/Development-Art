import React from 'react'
import { motion } from 'framer-motion'
import { syllabusData } from '@/datas/datas'
import { containerVariants } from './components/SyllabusAnimations/SyllabusAnimations'
import SyllabusCard from './components/SyllabusCard/SyllabusCard'

export default function Syllabus() {
    return (
        <section id="syllabus" className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-900">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
                <h2 className="text-3xl font-bold">Ի՞նչ ենք Սովորելու</h2>
                <p className="text-slate-400 text-sm">Ծրագիրը կազմված է այնպես...</p>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer max-md:text-center"
            >
                {syllabusData.map((tech, idx) => (
                    <SyllabusCard key={idx} tech={tech} />
                ))}
            </motion.div>
        </section>
    )
}