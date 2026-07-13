export default function ApplicationCard({ application, onDelete }) {

    const statusColors = {
        applied: "bg-navy-500/25 border-navy-500/40 text-white",
        interview: "bg-amber-500/25 border-amber-500/40 text-white",
        offer: "bg-emerald-500/25 border-emerald-500/40 text-white",
        rejected: "bg-red-500/25 border-red-500/40 text-white",
    };

    return (
        <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-4 relative min-h-45">
            <button onClick={() => onDelete(application.id)}
                className="text-navy-100 hover:text-white text-sm absolute top-3 right-3">✕</button>

            <h3 className="text-white font-medium">{application.company}</h3>

            <p className="text-navy-100 text-sm mt-1">{application.role} </p>

            <div className="flex items-center justify-between mt-3">
                <span
                    className={`text-xs px-2 py-1 rounded-full border ${statusColors[application.status]}`}>
                    {application.status} </span>

                <span className="text-navy-100 text-xs">{application.dateApplied}</span>
            </div>

            {application.link && (
                <a href={application.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy-200 text-xs mt-2 block hover:underline">
                    View job posting →</a>
            )}

            {application.notes && (
                <p className="text-navy-100/80 text-xs mt-2 border-t border-white/10 pt-2">{application.notes}</p>
            )}
        </div>
    )
}