export default function Logo() {
    return (
        <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="text-xl font-black tracking-wider text-cyan-400 select-none">
                DEVELOPMENT<span className="text-white font-medium">ART</span>
            </span>
        </div>
    )
}