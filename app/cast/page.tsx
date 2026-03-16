/* eslint-disable @next/next/no-img-element */
import { leadCast, supportingCast, familyTree } from "../data/cast";

export default function CastPage() {
  return (
    <div className="min-h-screen px-6 py-10 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <span className="text-gold text-sm tracking-[0.2em] uppercase">Characters</span>
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mt-2">Meet the Cast</h1>
        <p className="text-text-secondary mt-2">The faces behind the drama of Mannat</p>
      </div>

      {/* Lead Cast */}
      <section className="mb-12">
        <h2 className="text-2xl text-gold mb-6">Lead Cast</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadCast.map((member) => (
            <div
              key={member.name}
              className="card-hover bg-bg-card border border-burgundy/30 rounded-xl overflow-hidden"
            >
              {member.image && (
                <div className="relative w-full h-56 overflow-hidden">
                  <img
                    src={member.image}
                    alt={`${member.actor} as ${member.name}`}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent" />
                </div>
              )}
              <div className={`${member.image ? '' : 'bg-gradient-to-r from-burgundy/40 to-burgundy/20'} px-6 py-4`}>
                <h3 className="text-xl font-bold text-text-primary">{member.name}</h3>
                <p className="text-gold text-sm">{member.actor}</p>
              </div>
              <div className="px-6 py-4">
                <p className="text-text-secondary text-sm leading-relaxed">{member.role}</p>
                <span className="inline-block mt-3 px-3 py-1 text-xs rounded-full bg-burgundy/20 border border-burgundy/40 text-text-muted capitalize">
                  {member.family} family
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Supporting Cast */}
      <section className="mb-12">
        <h2 className="text-2xl text-gold mb-6">Supporting Cast</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {supportingCast.map((member) => (
            <div
              key={member.name}
              className="card-hover bg-bg-card/70 border border-burgundy/20 rounded-lg overflow-hidden"
            >
              {member.image && (
                <div className="relative w-full h-36 overflow-hidden">
                  <img
                    src={member.image}
                    alt={`${member.actor} as ${member.name}`}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent" />
                </div>
              )}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-text-primary">{member.name}</h3>
                <p className="text-gold text-xs">{member.actor}</p>
                <p className="text-text-secondary text-xs mt-1 leading-relaxed">{member.role}</p>
                <span className="inline-block mt-2 px-2 py-0.5 text-xs rounded-full bg-burgundy/15 border border-burgundy/30 text-text-muted capitalize">
                  {member.family}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Family Trees */}
      <section>
        <h2 className="text-2xl text-gold mb-6">Family Connections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(familyTree).map(([key, family]) => (
            <div
              key={key}
              className="bg-bg-card border border-gold/20 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-gold mb-2">{family.name}</h3>
              <p className="text-text-secondary text-sm mb-4 leading-relaxed">{family.description}</p>
              <div className="flex flex-wrap gap-2">
                {family.members.map((member) => (
                  <span
                    key={member}
                    className="px-3 py-1 text-sm rounded-full bg-burgundy/20 border border-burgundy/40 text-text-primary"
                  >
                    {member}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
