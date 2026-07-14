# Job Application Tracker

A glassmorphic, dark-themed dashboard to track job applications — built to solve a real problem while job hunting: keeping applications, interview stages, and outcomes organized in one place instead of scattered across notes and spreadsheets.

**🔗 Live demo:** [job-application-tracker-ys.vercel.app](https://job-application-tracker-ys.vercel.app/)

![Dashboard overview](./screenshots/dashboard-overview.png)

![Add application form](./screenshots/add-application-form.png)

---

## Features

- **Add / delete applications** — track company, role, status, date applied, job link, and notes
- **Inline status updates** — change an application's stage (Applied → Interview → Offer/Rejected) directly from a dropdown on each card, no need to delete and re-add
- **Kanban-style board** — applications automatically grouped into Applied / Interview / Offer / Rejected columns
- **Live stats panel** — total applications, interview count, offers, and response rate, calculated in real time
- **Data visualizations** — status breakdown donut chart and applications-per-week bar chart (Recharts)
- **Persistent storage** — all data saved to `localStorage`, so it survives page refreshes
- **Fully responsive** — usable on desktop, tablet, and mobile
- **Glassmorphic dark UI** — frosted-glass cards over a navy-to-blue gradient background

## Tech stack

- **React** + **Vite**
- **Tailwind CSS**
- **Recharts** — for charts
- **localStorage** — for data persistence (no backend required)
- **Vercel** — deployment

## Why this project

Built while actively job hunting — every feature here is something I needed myself: a single place to see which applications are pending, which turned into interviews, and how the response rate is trending over time.

## Getting started locally

```bash
git clone https://github.com/YasmeenShk/JobTracker-Dashboard.git
cd job-tracker
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

## Project structure

```
src/
├── Components/
│   ├── ApplicationForm.jsx   # form to add a new application
│   ├── ApplicationCard.jsx   # single application card with status dropdown
│   ├── StatsPanel.jsx        # total/interviews/offers/response-rate cards
│   ├── Charts.jsx            # pie + bar chart
│   └── StatusBoard.jsx       # Kanban-style column layout
└── App.jsx                   # state management + localStorage persistence
```

## Roadmap / possible improvements

- [ ] Search and filter by company or status
- [ ] Sort by date applied
- [ ] Export data as CSV
- [ ] Optional cloud sync (Supabase) instead of localStorage only

## Author

**Yasmeen Shaikh**
GitHub: [@YasmeenShk](https://github.com/YasmeenShk)
