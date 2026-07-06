export default function NavLinks({ data, onScroll }) {
    return (
        <div className="hidden xl:flex items-center gap-8">
            {data.map((item, index) => (
                <button key={index} onClick={() => onScroll(item.id)} className="text-sm font-medium text-slate-400 hover:text-white transition-colors cursor-pointer tracking-wide py-1">
                    {item.name}
                </button>
            ))}
        </div>
    )
}