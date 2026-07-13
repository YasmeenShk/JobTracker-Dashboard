export default function StatsPanel({ application }) {

    const total = application.length;
    const interviews = application.filter(app => app.status === "interview").length
    const offers = application.filter(app => app.status === "offer").length;

    const responseRate = total > 0
        ? Math.round(((interviews + offers) / total) * 100)
        : 0;


    const stats = [
        { label: "Total applied", value: total },
        { label: "Interviews", value: interviews },
        { label: "Offers", value: offers },
        { label: "Response rate", value: `${responseRate}%` },
    ]

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">

            {stats.map((stat) => (
                <div key={stat.label}
                    className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-4 text-center" >
                    <p className="text-navy-100 text-sm">{stat.label}</p>
                    <p className="text-white text-2xl font-medium mt-1">{stat.value} </p>
                </div>
            ))}

        </div>
    )
}