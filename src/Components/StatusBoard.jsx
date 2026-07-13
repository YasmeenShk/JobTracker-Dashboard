import ApplicationCard from "./ApplicationCard";

export default function StatusBoard({ application, onDelete }) {

    const columns = [
        { key: "applied", label: "Applied" },
        { key: "interview", label: "Interview" },
        { key: "offer", label: "Offer" },
        { key: "rejected", label: "Rejected" },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {columns.map((col) => {
                const filteredApps = application.filter(
                    (app) => app.status === col.key
                );

                return (
                    <div key={col.key}>
                        <h3 className="text-navy-100 text-sm font-medium mb-3">
                            {col.label} ({filteredApps.length})
                        </h3>
                        <div className="flex flex-col gap-3"> 
                            {filteredApps.length === 0 ? (
                                <p className="text-navy-100/50 text-xs">No Application Yet</p>
                            ) : (
                                filteredApps.map((app) => (
                                    <ApplicationCard
                                        key={app.id}
                                        application={app}
                                        onDelete={onDelete}
                                    />
                                ))
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
