import { useState } from 'react'

export default function ApplicationForm({ onAdd, onClose }) {

    const [formData, setformData] = useState({
        company: "",
        role: "",
        status: "applied",
        dateApplied: "",
        link: "",
        notes: "",
    })

    function handleChange(e) {
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()

        if (!formData.company || !formData.role) {
            alert("Please fill in both Company and Role.")
            return;
        }
        onAdd({ id: Date.now(), ...formData });
        onClose();

    }

    return (
        <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-6 max-w-sm mx-auto">
            <div className="flex justify-between items-center mb-5">
                <h2 className="text-white font-medium text-lg">Add Application</h2>
                <button onClick={onClose}
                    className="text-navy-100 hover:text-white">✕</button>
            </div>

            <form onSubmit={handleSubmit}
                className="flex flex-col gap-3">
                <div>
                    <label
                        className="text-navy-100 text-xs block mb-1">Company Name</label>
                    <input type="text"
                        name='company'
                        placeholder="e.g. Zomato"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/15 text-white placeholder-navy-100/60 rounded-lg px-3 py-2 transition-all duration-200 hover:border-white/25 focus:outline-none focus:border-navy-200 focus:bg-white/15"
                    />
                </div>

                <div>
                    <label className="text-navy-100 text-xs block mb-1">Role</label>
                    <input type="text"
                        name='role'
                        value={formData.role}
                        onChange={handleChange}
                        placeholder="e.g. Frontend developer"
                        className="w-full bg-white/10 border border-white/15 text-white placeholder-navy-100/60 rounded-lg px-3 py-2 focus:outline-none focus:border-navy-200" />
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <div>
                        <label className="text-navy-100 text-xs block mb-1">Status</label>
                        <select name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="w-full bg-white/10 border border-white/15 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-navy-200">

                            <option value="applied" className="text-black">Applied</option>
                            <option value="interview" className="text-black">Interview</option>
                            <option value="offer" className="text-black">Offer</option>
                            <option value="rejected" className="text-black" >Rejected</option>
                        </select>

                    </div>

                    <div>
                        <label className="text-navy-100 text-xs block mb-1">Date Applied</label>
                        <input type="date"
                            name="dateApplied"
                            value={formData.dateApplied}
                            onChange={handleChange}
                            className="w-full bg-white/10 border border-white/15 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-navy-200" />
                    </div>
                </div>

                <div>
                    <label className="text-navy-100 text-xs block mb-1">Job Link(optional)</label>
                    <input type="text"
                        name='link'
                        value={formData.link}
                        onChange={handleChange}
                        name="link"
                        placeholder="https://..."
                        className="w-full bg-white/10 border border-white/15 text-white placeholder-navy-100/60 rounded-lg px-3 py-2 focus:outline-none focus:border-navy-200" />
                </div>

                <div>
                    <label className="text-navy-100 text-xs block mb-1">Notes (optional)</label>
                    <textarea name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Hr name , referral"
                        className="w-full bg-white/10 border border-white/15 text-white placeholder-navy-100/60 rounded-lg px-3 py-2 resize-none focus:outline-none focus:border-navy-200"></textarea>
                </div>

                <div className="flex  gap-2 mt-3">
                    <button onClick={onClose}
                        type="button"
                        className="flex-1 bg-white/10 border border-white/15 text-white rounded-lg py-2 transition-all duration-200 hover:bg-white/20">
                        Cancel</button>


                    <button type="submit"
                        className="flex-1 bg-navy-200/25 border border-navy-200/40 text-white rounded-lg py-2 transition-all duration-200 hover:bg-navy-200/40 hover:scale-[1.02]">
                        Add Application</button>
                </div>
            </form>
        </div>
    )
}