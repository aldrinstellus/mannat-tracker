/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { showInfo } from "./data/show";

const quickLinks = [
  { href: "/cast", title: "Meet the Cast", desc: "Characters & family trees", color: "from-burgundy/40 to-burgundy/20" },
  { href: "/timeline", title: "Story Timeline", desc: "8 phases of drama", color: "from-burgundy-light/30 to-burgundy/20" },
  { href: "/quiz", title: "Test Your Knowledge", desc: "50 questions to challenge you", color: "from-gold/20 to-burgundy/20" },
  { href: "/digest", title: "Latest Episode", desc: "Episode 372 digest", color: "from-burgundy/30 to-bg-card" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-burgundy/20 via-bg-primary to-bg-secondary" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-burgundy/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto">
          {/* Show Banner */}
          <div className="mb-8 rounded-xl overflow-hidden border border-gold/20">
            <img
              src={showInfo.bannerImage}
              alt="Mannat - Har Khushi Paane Ki"
              className="w-full h-48 md:h-64 object-cover"
            />
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block w-12 h-0.5 bg-gold" />
            <span className="text-gold text-sm tracking-[0.3em] uppercase">{showInfo.network}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold gold-text mb-2 tracking-tight">
            {showInfo.title}
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary mb-8 italic">
            {showInfo.subtitle}
          </p>

          <div className="flex flex-wrap gap-4 mb-12 text-sm">
            <span className="px-4 py-1.5 rounded-full bg-burgundy/30 border border-burgundy/50 text-text-primary">
              {showInfo.episodes} Episodes
            </span>
            <span className="px-4 py-1.5 rounded-full bg-bg-card border border-burgundy/30 text-text-secondary">
              Since {showInfo.premiere}
            </span>
            <span className="px-4 py-1.5 rounded-full bg-bg-card border border-burgundy/30 text-text-secondary">
              {showInfo.airDays} at {showInfo.airTime}
            </span>
          </div>

          {/* Current Arc Card */}
          <div className="bg-bg-card/80 backdrop-blur border border-gold/30 rounded-xl p-6 md:p-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              <h2 className="text-lg text-gold font-semibold tracking-wide">Where We Are Now</h2>
            </div>
            <h3 className="text-xl md:text-2xl text-text-primary mb-3">{showInfo.currentArc}</h3>
            <p className="text-text-secondary leading-relaxed">{showInfo.currentArcSummary}</p>
          </div>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section className="px-6 py-12 max-w-4xl mx-auto">
        <h2 className="text-2xl text-text-primary mb-6">Explore</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {quickLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <div className={`card-hover bg-gradient-to-br ${link.color} border border-burgundy/30 rounded-xl p-6 cursor-pointer`}>
                <h3 className="text-lg text-text-primary font-semibold mb-1">{link.title}</h3>
                <p className="text-sm text-text-secondary">{link.desc}</p>
                <span className="inline-block mt-3 text-gold text-sm">
                  Explore &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Show Info Footer */}
      <section className="px-6 py-8 max-w-4xl mx-auto border-t border-burgundy/20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div>
            <p className="text-text-muted mb-1">Network</p>
            <p className="text-text-primary">{showInfo.network}</p>
          </div>
          <div>
            <p className="text-text-muted mb-1">Genre</p>
            <p className="text-text-primary">{showInfo.genre}</p>
          </div>
          <div>
            <p className="text-text-muted mb-1">Producers</p>
            <p className="text-text-primary">{showInfo.producers}</p>
          </div>
          <div>
            <p className="text-text-muted mb-1">Updated</p>
            <p className="text-text-primary">{showInfo.updatedDate}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
