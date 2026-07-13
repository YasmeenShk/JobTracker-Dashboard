import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

function Charts({ application }) {
    // Status ke hisaab se count nikalna
    const statusCounts = {
        applied: application.filter(app => app.status === "applied").length,
        interview: application.filter(app => app.status === "interview").length,
        offer: application.filter(app => app.status === "offer").length,
        rejected: application.filter(app => app.status === "rejected").length,
    };

    const pieData = [
        { name: "Applied", value: statusCounts.applied, color: "#49769F" },
        { name: "Interview", value: statusCounts.interview, color: "#BA7517" },
        { name: "Offer", value: statusCounts.offer, color: "#0F6E56" },
        { name: "Rejected", value: statusCounts.rejected, color: "#9F3A4A" },
    ].filter(item => item.value > 0); // khaali status hide kar do chart se

    // Week-wise grouping (dateApplied field se)
    const weekData = getWeeklyData(application);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

            {/* pie chart */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-4">
                <p className="text-navy-100 text-sm mb-3">Status breakdown</p>
                {pieData.length === 0 ? (
                    <p className="text-navy-100/50 text-xs">No Data</p>
                ) : (
                    <ResponsiveContainer width="100%" height={200}>
                        <PieChart>
                            <Pie
                                data={pieData}
                                dataKey="value"
                                nameKey="name"
                                innerRadius={50}
                                outerRadius={80}
                                paddingAngle={2}
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={index} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                )}
            </div>

            {/* Bar chart */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-4">
                <p className="text-navy-100 text-sm mb-3">Applications per week</p>
                <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={weekData}>
                        <XAxis dataKey="week" stroke="#BDD8E9" fontSize={12} />
                        <YAxis stroke="#BDD8E9" fontSize={12} allowDecimals={false} />
                        <Tooltip />
                        <Bar dataKey="count" fill="#7BBDE8" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
}

// Helper function - dates ko week-wise group karta hai
function getWeeklyData(application) {
    const weeks = {};

    application.forEach((app) => {
        if (!app.dateApplied) return; //if no date return
        const date = new Date(app.dateApplied);
        const weekNum = Math.ceil(date.getDate() / 7); //mothnly dates into week
        const key = `Week ${weekNum}`;
        weeks[key] = (weeks[key] || 0) + 1;
    });

    return Object.entries(weeks).map(([week, count]) => ({ week, count })); //object to array 
}

export default Charts;