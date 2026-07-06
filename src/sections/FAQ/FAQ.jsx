import React, { useState } from 'react'
import { faqData } from '@/datas/datas'
import FAQItem from './components/FAQItem/FAQItem'

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null)

    return (
        <section id='faq' className="py-24 bg-slate-950 border-t border-slate-900 px-6">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Հաճախ տրվող <span className="text-cyan-400">Հարցեր</span></h2>

                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <FAQItem
                            key={index}
                            faq={faq}
                            isOpen={openIndex === index}
                            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}