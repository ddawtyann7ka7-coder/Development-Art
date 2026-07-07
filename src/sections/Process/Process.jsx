import React from 'react'
import { processData } from '@/datas/datas'
import ProcessRow from './components/ProcessRow/ProcessRow'

export default function Process() {
    return (
        <section id='process' className="py-24 bg-slate-950 border-t border-slate-900 px-6">
            <div className="max-w-5xl mx-auto">
                <h2 className="animate-fade-in-up text-3xl font-bold text-center mb-16">
                    Ինչպե՞ս են անցնում <span className="text-indigo-400">Դասընթացները</span>
                </h2>
                <div className="space-y-8 cursor-pointer">
                    {processData.map((step, index) => (
                        <ProcessRow
                            key={index}
                            step={step}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}