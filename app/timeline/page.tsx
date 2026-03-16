import { phases } from "../data/timeline";

export default function TimelinePage() {
  return (
    <div className="min-h-screen px-6 py-10 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <span className="text-gold text-sm tracking-[0.2em] uppercase">Story Arcs</span>
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mt-2">Timeline</h1>
        <p className="text-text-secondary mt-2">The complete journey of Mannat across 8 phases</p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-burgundy/30" />

        <div className="space-y-8">
          {phases.map((phase) => (
            <div key={phase.phase} className="relative pl-16 md:pl-20">
              {/* Dot on timeline */}
              <div
                className="absolute left-4 md:left-6 top-2 w-5 h-5 rounded-full border-2 z-10"
                style={{
                  backgroundColor: phase.isCurrent ? phase.color : "transparent",
                  borderColor: phase.color,
                  boxShadow: phase.isCurrent ? `0 0 12px ${phase.color}60` : "none",
                }}
              />

              <div
                className={`bg-bg-card border rounded-xl p-6 transition-all ${
                  phase.isCurrent
                    ? "border-gold/50 shadow-lg shadow-gold/10"
                    : "border-burgundy/20"
                }`}
              >
                {/* Phase Header */}
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span
                    className="text-xs font-bold tracking-wider uppercase px-2 py-0.5 rounded"
                    style={{ backgroundColor: `${phase.color}30`, color: phase.color }}
                  >
                    Phase {phase.phase}
                  </span>
                  <span className="text-xs text-text-muted">{phase.episodeRange}</span>
                  {phase.isCurrent && (
                    <span className="px-2 py-0.5 text-xs font-bold rounded bg-gold text-bg-primary animate-pulse">
                      NOW
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-text-primary mb-3">{phase.title}</h3>

                <ul className="space-y-2">
                  {phase.events.map((event, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: phase.color }}
                      />
                      {event}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
