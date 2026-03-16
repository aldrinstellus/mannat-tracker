import { latestDigest } from "../data/digest";

export default function DigestPage() {
  return (
    <div className="min-h-screen px-6 py-10 max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <span className="text-gold text-sm tracking-[0.2em] uppercase">Episode Digest</span>
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mt-2">Latest Episode</h1>
        <p className="text-text-secondary mt-2">Your quick catch-up on what just happened</p>
      </div>

      {/* Episode Header Card */}
      <div className="bg-gradient-to-br from-burgundy/30 to-bg-card border border-gold/30 rounded-xl p-6 md:p-8 mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="px-3 py-1 text-xs font-bold rounded bg-gold text-bg-primary">
            Episode {latestDigest.episodeNumber}
          </span>
          <span className="text-sm text-text-muted">{latestDigest.airDate}</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold gold-text mb-4">
          &ldquo;{latestDigest.title}&rdquo;
        </h2>
        <p className="text-text-secondary leading-relaxed">{latestDigest.summary}</p>
      </div>

      {/* Key Events */}
      <div className="bg-bg-card border border-burgundy/30 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-bold text-gold mb-4">Key Events</h3>
        <ul className="space-y-3">
          {latestDigest.keyEvents.map((event, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-text-secondary">
              <span className="mt-0.5 w-6 h-6 flex items-center justify-center rounded-full bg-burgundy/30 text-gold text-xs font-bold flex-shrink-0">
                {idx + 1}
              </span>
              {event}
            </li>
          ))}
        </ul>
      </div>

      {/* Characters Featured */}
      <div className="bg-bg-card border border-burgundy/30 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-bold text-gold mb-4">Characters Featured</h3>
        <div className="flex flex-wrap gap-2">
          {latestDigest.charactersFeatured.map((character) => (
            <span
              key={character}
              className="px-3 py-1.5 text-sm rounded-full bg-burgundy/20 border border-burgundy/40 text-text-primary"
            >
              {character}
            </span>
          ))}
        </div>
      </div>

      {/* Cliffhanger */}
      <div className="bg-bg-card border border-gold/30 rounded-xl p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl" />
        <div className="relative">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <h3 className="text-xl font-bold text-gold">Cliffhanger</h3>
          </div>
          <p className="text-text-secondary leading-relaxed italic">
            {latestDigest.cliffhanger}
          </p>
        </div>
      </div>
    </div>
  );
}
