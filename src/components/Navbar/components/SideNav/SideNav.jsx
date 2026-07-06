export default function SideNav({ data, onScroll, getIcon }) {
    return (
        <div className="hidden md:flex xl:hidden fixed left-4 top-1/2 -translate-y-1/2 z-50 flex-col items-start gap-4 bg-slate-950/60 backdrop-blur-xl p-3.5 rounded-2xl border border-slate-900/80 shadow-2xl transition-all duration-300 ease-in-out w-14 hover:w-60 group overflow-hidden">
            {data.map((item, index) => (
                <button key={index} onClick={() => onScroll(item.id)} className="flex items-center gap-4 text-xs font-medium text-slate-400 hover:text-cyan-400 transition-all duration-200 cursor-pointer tracking-wide py-2 w-full text-left relative rounded-xl hover:bg-slate-900/40 px-2">
                    <div className="text-slate-400 group-hover:text-cyan-400 transition-colors shrink-0">{getIcon(index)}</div>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out whitespace-nowrap">{item.name}</span>
                </button>
            ))}
        </div>
    )
}