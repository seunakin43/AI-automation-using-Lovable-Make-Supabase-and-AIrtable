const metricCards = [
  { label: 'Workflows', value: '24', trend: '+12%' },
  { label: 'Automation Runs', value: '1.8k', trend: '+8.4%' },
  { label: 'Lead Syncs', value: '486', trend: '+23%' },
  { label: 'Avg. Response', value: '4m 30s', trend: '-18%' }
];

const tasks = [
  'Sync leads from Airtable to Supabase',
  'Trigger onboarding message after signup',
  'Review campaign performance data',
  'Update CRM records with AI summaries'
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <header className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 font-bold shadow-soft">
              L
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight">Lovable</p>
              <p className="text-xs text-slate-400">AI automation workspace</p>
            </div>
          </div>

          <button className="rounded-full border border-violet-500/40 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-200 transition hover:bg-violet-500/20">
            New workflow
          </button>
        </header>

        <main className="space-y-8">
          <section className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-violet-950/80 p-8 shadow-soft">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-xl">
                <p className="mb-3 inline-flex rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
                  Connected stack
                </p>
                <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
                  AI automation built for fast-moving teams.
                </h1>
                <p className="mt-4 text-base text-slate-300">
                  Connect your Lovable workflow to Supabase data, Airtable records, and AI-driven automations in one place.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Supabase</p>
                  <p className="mt-2 text-xl font-bold text-emerald-300">Online</p>
                </div>
                <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Airtable</p>
                  <p className="mt-2 text-xl font-bold text-sky-300">Synced</p>
                </div>
                <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">AI</p>
                  <p className="mt-2 text-xl font-bold text-violet-300">Ready</p>
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {metricCards.map((card) => (
              <div key={card.label} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
                <p className="text-sm text-slate-400">{card.label}</p>
                <div className="mt-4 flex items-end justify-between">
                  <span className="text-3xl font-bold text-white">{card.value}</span>
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-xs font-semibold text-emerald-300">
                    {card.trend}
                  </span>
                </div>
              </div>
            ))}
          </section>

          <section className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">Workflow overview</h2>
                <button className="rounded-full bg-violet-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-violet-400">
                  View all
                </button>
              </div>

              <div className="space-y-4">
                {tasks.map((task, index) => (
                  <div key={task} className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/15 text-xs font-semibold text-violet-200">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-slate-100">{task}</p>
                      <p className="mt-1 text-xs text-slate-400">Status: healthy and scheduled</p>
                    </div>
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-emerald-300">
                      active
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
              <h2 className="text-xl font-semibold text-white">Automation stack</h2>
              <div className="mt-6 space-y-4">
                {['Lovable frontend', 'Supabase database', 'Airtable records', 'AI orchestration'].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/60 p-3">
                    <span className="text-sm text-slate-200">{item}</span>
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
