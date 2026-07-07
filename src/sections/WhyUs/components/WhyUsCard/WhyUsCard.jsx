import React from 'react'

export default function WhyUsCard({ item, index }) {
    // 0, 1, 2 = ձախ, 3, 4, 5 = աջ
    const isLeft = index < 3;

    // Սա կտպի քո կոնսոլում, թե քարտը որ կողմից է գալիս (ստուգելու համար)
    console.log(`Card ${index} isLeft: ${isLeft}`);

    return (
        <div className={`p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-sm hover:-translate-y-2 ${isLeft ? 'animate-slide-left' : 'animate-slide-right'}`}
            style={{ animationDelay: `${(index % 3) * 150}ms` }}
        >
            <h3 className="text-xl font-semibold mb-3 text-cyan-400">{item.title}</h3>
            <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
        </div>
    )
}