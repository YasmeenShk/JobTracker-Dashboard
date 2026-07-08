export default function ApplicationCard() {
    return (
        <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-4 relative">
            <button
                className="text-navy-100 hover:text-white text-sm absolute top-3 right-3">✕</button>
            <h3 className="text-white font-medium">Swiggy</h3>
            <p className="text-navy-100 text-sm mt-1">Frontend</p>

            <div className="flex items-center justify-between mt-3">
                <span
                    className="text-xs px-2 py-1 rounded-full border">
                    Interview</span>
                <span className="text-navy-100 text-xs">23-02-2007</span>
            </div>

            <a href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-200 text-xs mt-2 block hover:underline">
                View job posting →</a>
            <p className="text-navy-100/80 text-xs mt-2 border-t border-white/10 pt-2">Hr priya</p>
        </div>
    )
}